import { clamp, dist, dist2, distToPolyline, mulberry32, pointInPoly } from "./geom";
import type {
  FactionId,
  Front,
  FrontOrder,
  Grid,
  Scenario,
  StrikeKind,
  Terrain,
  Unit,
  UnitType,
  World,
} from "./types";
import { TERRAIN_CODE } from "./types";

const GW = 50;
const GH = 36;
const CELL_INFLUENCE = 52;
const MOVE: Record<UnitType, number> = { infantry: 7, mech: 13, armor: 15, artillery: 9 };
const BASE_POWER: Record<UnitType, number> = { infantry: 1, mech: 1.15, armor: 1.35, artillery: 0.7 };
const FORM_COST: Record<UnitType, { man: number; eq: number; hours: number }> = {
  infantry: { man: 8, eq: 6, hours: 16 },
  mech: { man: 10, eq: 14, hours: 22 },
  armor: { man: 8, eq: 22, hours: 28 },
  artillery: { man: 6, eq: 16, hours: 20 },
};

function fid(world: World, id: FactionId): number {
  return world.factionIndex[id] ?? 0;
}

function cellIndex(grid: Grid, x: number, y: number): number {
  const cx = clamp((x / grid.cellW) | 0, 0, grid.w - 1);
  const cy = clamp((y / grid.cellH) | 0, 0, grid.h - 1);
  return cy * grid.w + cx;
}

function cellCenter(grid: Grid, i: number): { x: number; y: number } {
  const cx = i % grid.w;
  const cy = (i / grid.w) | 0;
  return { x: (cx + 0.5) * grid.cellW, y: (cy + 0.5) * grid.cellH };
}

function paintPoly(grid: Grid, poly: number[], owner: number, onlyLand: boolean) {
  for (let i = 0; i < grid.w * grid.h; i++) {
    if (onlyLand && grid.terrain[i] === TERRAIN_CODE.water) continue;
    const p = cellCenter(grid, i);
    if (pointInPoly(p.x, p.y, poly)) {
      if (owner === 0) {
        grid.terrain[i] = TERRAIN_CODE.water;
        grid.owner[i] = 0;
      } else {
        grid.owner[i] = owner;
        grid.pressure[i] = 0.72;
      }
    }
  }
}

function terrainAt(map: Scenario["map"], x: number, y: number): Terrain {
  for (const w of map.water) if (pointInPoly(x, y, w)) return "water";
  let land = false;
  for (const p of map.land) if (pointInPoly(x, y, p)) land = true;
  if (!land) return "water";
  for (const m of map.mountains) if (pointInPoly(x, y, m)) return "mountain";
  for (const f of map.forests) if (pointInPoly(x, y, f)) return "forest";
  for (const r of map.rivers) if (distToPolyline(x, y, r.pts) < r.width + 4) return "river";
  for (const c of map.cities) if (Math.hypot(c.x - x, c.y - y) < 16) return "urban";
  return "plains";
}

function buildGrid(scenario: Scenario): Grid {
  const map = scenario.map;
  const grid: Grid = {
    w: GW,
    h: GH,
    cellW: map.width / GW,
    cellH: map.height / GH,
    owner: new Uint8Array(GW * GH),
    terrain: new Uint8Array(GW * GH),
    pressure: new Float32Array(GW * GH),
    supply: new Uint8Array(GW * GH),
  };
  for (let i = 0; i < GW * GH; i++) {
    const p = cellCenter(grid, i);
    const t = terrainAt(map, p.x, p.y);
    grid.terrain[i] = TERRAIN_CODE[t];
    grid.owner[i] = t === "water" ? 0 : 0;
  }
  const idx = Object.fromEntries(scenario.factions.map((f, i) => [f.id, i + 1]));
  for (const region of scenario.startOwner) {
    const o = idx[region.faction] ?? 0;
    for (const poly of region.polys) paintPoly(grid, poly, o, true);
  }
  const home = idx[scenario.startOwner[0]?.faction ?? scenario.factions[0]!.id] ?? 1;
  for (let i = 0; i < GW * GH; i++) {
    if (grid.terrain[i] === TERRAIN_CODE.water) grid.owner[i] = 0;
    else if (grid.owner[i] === 0) grid.owner[i] = home;
  }
  return grid;
}

function makeId(world: World, prefix: string): string {
  world.nextId += 1;
  return `${prefix}${world.nextId}`;
}

export function createWorld(scenario: Scenario, player: FactionId, balance: number, seed = 1): World {
  const factionIndex: Record<FactionId, number> = {};
  scenario.factions.forEach((f, i) => {
    factionIndex[f.id] = i + 1;
  });
  const enemy = scenario.factions.find((f) => f.id !== player)?.id ?? scenario.factions[1]!.id;
  const playerMult = 1 + balance * 0.18;
  const enemyMult = 1 - balance * 0.14;

  const world: World = {
    scenarioId: scenario.id,
    player,
    enemy,
    factionIndex,
    factions: {},
    defs: Object.fromEntries(scenario.factions.map((f) => [f.id, f])),
    map: scenario.map,
    grid: buildGrid(scenario),
    units: [],
    fronts: [],
    cities: scenario.map.cities.map((c) => ({ id: c.id, owner: null, siege: 0 })),
    hour: 0,
    rng: mulberry32(seed + Math.abs(balance) * 9),
    strikes: [],
    logs: [],
    eventsFired: new Set(),
    outcome: null,
    nextId: 1,
    timeLimitHours: scenario.timeLimitHours,
    events: scenario.events,
    balance,
  };

  for (const f of scenario.factions) {
    const isP = f.id === player;
    const m = isP ? playerMult : enemyMult;
    world.factions[f.id] = {
      id: f.id,
      manpower: Math.round(42 * m),
      equipment: Math.round(38 * m),
      artillery: Math.round(4 * m),
      air: Math.round((f.id === "il" ? 8 : 5) * m),
      airMax: f.id === "il" ? 10 : 7,
      drones: Math.round((scenario.id === "ua2026" ? 6 : 3) * m),
      missiles: Math.round((f.id === "il" || f.id === "ru" ? 4 : 2) * m),
      casualties: 0,
      startPower: 0,
    };
  }

  for (const s of scenario.units) {
    const isP = s.faction === player;
    const m = isP ? playerMult : enemyMult;
    const unit: Unit = {
      id: makeId(world, "u"),
      faction: s.faction,
      type: s.type,
      name: s.name,
      x: s.x,
      y: s.y,
      strength: clamp(s.strength * m, 28, 100),
      org: s.elite ? 86 : 74,
      supplied: true,
      forming: 0,
      elite: !!s.elite,
      order: "idle",
      tx: s.x,
      ty: s.y,
      frontId: null,
      lastCombat: -999,
    };
    world.units.push(unit);
  }

  for (const fr of scenario.fronts) {
    const front: Front = {
      id: makeId(world, "f"),
      name: fr.name,
      faction: fr.faction,
      anchors: fr.anchors.map((a) => ({ ...a })),
      order: fr.order,
      unitIds: [],
      artillery: fr.faction !== player,
      air: false,
      drones: scenario.id === "ua2026" && fr.faction !== player,
    };
    world.fronts.push(front);
  }

  autoAssignUnits(world);
  captureCitiesFromGrid(world);
  rebuildSupply(world);
  for (const f of scenario.factions) {
    world.factions[f.id]!.startPower = forcePower(world, f.id);
  }
  log(world, "Операция начата. Линия фронта живая — назначайте силы на участки.");
  return world;
}

function autoAssignUnits(world: World) {
  for (const u of world.units) {
    let best: Front | null = null;
    let bestD = 140;
    for (const f of world.fronts) {
      if (f.faction !== u.faction) continue;
      for (let i = 0; i < f.anchors.length; i++) {
        const d = dist(u, f.anchors[i]!);
        if (d < bestD) {
          bestD = d;
          best = f;
        }
      }
    }
    if (best) {
      u.frontId = best.id;
      u.order = "front";
      if (!best.unitIds.includes(u.id)) best.unitIds.push(u.id);
    }
  }
}

function log(world: World, text: string) {
  world.logs.unshift({ hour: world.hour, text });
  if (world.logs.length > 24) world.logs.length = 24;
}

function captureCitiesFromGrid(world: World) {
  for (const city of world.map.cities) {
    const i = cellIndex(world.grid, city.x, city.y);
    const o = world.grid.owner[i] ?? 0;
    const st = world.cities.find((c) => c.id === city.id)!;
    st.owner = o === 0 ? null : ownerId(world, o);
  }
}

function ownerId(world: World, idx: number): FactionId | null {
  for (const [id, n] of Object.entries(world.factionIndex)) if (n === idx) return id;
  return null;
}

export function forcePower(world: World, faction: FactionId): number {
  let s = 0;
  for (const u of world.units) {
    if (u.faction !== faction || u.forming > 0) continue;
    s += unitPower(u);
  }
  return s;
}

export function unitPower(u: Unit): number {
  const supply = u.supplied ? 1 : 0.52;
  const org = 0.55 + u.org / 220;
  const elite = u.elite ? 1.12 : 1;
  return (u.strength / 100) * BASE_POWER[u.type] * supply * org * elite;
}

function rebuildSupply(world: World) {
  const g = world.grid;
  g.supply.fill(0);
  const q: number[] = [];
  const push = (i: number, owner: number) => {
    if (g.terrain[i] === TERRAIN_CODE.water) return;
    if (g.owner[i] !== owner) return;
    if (g.supply[i] === owner) return;
    g.supply[i] = owner;
    q.push(i);
  };

  for (const [id, idx] of Object.entries(world.factionIndex)) {
    const def = world.defs[id]!;
    for (const edge of def.supplyEdges) {
      if (edge === "n") for (let x = 0; x < g.w; x++) push(x, idx);
      if (edge === "s") for (let x = 0; x < g.w; x++) push((g.h - 1) * g.w + x, idx);
      if (edge === "w") for (let y = 0; y < g.h; y++) push(y * g.w, idx);
      if (edge === "e") for (let y = 0; y < g.h; y++) push(y * g.w + (g.w - 1), idx);
    }
    for (const city of world.map.cities) {
      const st = world.cities.find((c) => c.id === city.id);
      if (st?.owner !== id) continue;
      if (!city.assets.includes("depot") && !city.assets.includes("port") && !city.assets.includes("hq")) continue;
      push(cellIndex(g, city.x, city.y), idx);
    }
  }

  const dirs = [1, -1, g.w, -g.w];
  while (q.length) {
    const i = q.pop()!;
    const owner = g.supply[i]!;
    for (const d of dirs) {
      const n = i + d;
      if (n < 0 || n >= g.w * g.h) continue;
      if (d === 1 && i % g.w === g.w - 1) continue;
      if (d === -1 && i % g.w === 0) continue;
      push(n, owner);
    }
  }

  for (const u of world.units) {
    const i = cellIndex(g, u.x, u.y);
    const want = world.factionIndex[u.faction] ?? 0;
    u.supplied = g.supply[i] === want || nearSupply(world, u, want);
  }
}

function nearSupply(world: World, u: Unit, want: number): boolean {
  const g = world.grid;
  const i = cellIndex(g, u.x, u.y);
  const cx = i % g.w;
  const cy = (i / g.w) | 0;
  for (let dy = -2; dy <= 2; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const x = cx + dx;
      const y = cy + dy;
      if (x < 0 || y < 0 || x >= g.w || y >= g.h) continue;
      if (g.supply[y * g.w + x] === want) return true;
    }
  }
  return false;
}

function terrainMod(t: number, type: UnitType, attacking: boolean): number {
  if (t === TERRAIN_CODE.urban) return type === "infantry" ? 1.25 : type === "armor" ? 0.72 : 0.95;
  if (t === TERRAIN_CODE.forest) return type === "infantry" ? 1.15 : type === "armor" ? 0.8 : 1;
  if (t === TERRAIN_CODE.mountain) return attacking ? 0.7 : type === "infantry" ? 1.35 : 0.9;
  if (t === TERRAIN_CODE.river) return attacking ? 0.62 : 1.2;
  if (t === TERRAIN_CODE.plains) return type === "armor" ? 1.2 : 1;
  return 1;
}

function cityFortAt(world: World, x: number, y: number, defender: FactionId): number {
  let f = 0;
  for (const c of world.map.cities) {
    const st = world.cities.find((s) => s.id === c.id);
    if (st?.owner !== defender) continue;
    const d = Math.hypot(c.x - x, c.y - y);
    if (d < 22) f = Math.max(f, c.fort);
  }
  return f;
}

function supportBonus(world: World, faction: FactionId, x: number, y: number): number {
  let b = 1;
  for (const f of world.fronts) {
    if (f.faction !== faction) continue;
    const on = nearAnchors(f, x, y, 90);
    if (!on) continue;
    if (f.artillery) b += 0.16;
    if (f.air) b += 0.12;
    if (f.drones) b += 0.1;
  }
  return b;
}

function nearAnchors(f: Front, x: number, y: number, r: number): boolean {
  const pts: number[] = [];
  for (const a of f.anchors) pts.push(a.x, a.y);
  if (pts.length < 4) {
    return f.anchors.some((a) => Math.hypot(a.x - x, a.y - y) < r);
  }
  return distToPolyline(x, y, pts) < r;
}

function influence(world: World, i: number, faction: FactionId, attacking: boolean): number {
  const p = cellCenter(world.grid, i);
  const t = world.grid.terrain[i]!;
  let s = 0;
  for (const u of world.units) {
    if (u.faction !== faction || u.forming > 0) continue;
    const d2 = dist2(u, p);
    if (d2 > CELL_INFLUENCE * CELL_INFLUENCE) continue;
    const fall = Math.exp(-d2 / (CELL_INFLUENCE * CELL_INFLUENCE * 0.55));
    s += unitPower(u) * fall * terrainMod(t, u.type, attacking);
  }
  const fort = cityFortAt(world, p.x, p.y, faction);
  if (!attacking) s *= 1 + fort * 0.22;
  s *= supportBonus(world, faction, p.x, p.y);
  return s;
}

function stepFront(world: World) {
  const g = world.grid;
  const fA = world.player;
  const fB = world.enemy;
  const iA = fid(world, fA);
  const iB = fid(world, fB);
  const nextOwner = new Uint8Array(g.owner);
  const nextP = new Float32Array(g.pressure);

  for (let i = 0; i < g.w * g.h; i++) {
    if (g.terrain[i] === TERRAIN_CODE.water) continue;
    const owner = g.owner[i]!;
    if (owner === 0) continue;
    let border = false;
    const cx = i % g.w;
    const cy = (i / g.w) | 0;
    for (let dy = -1; dy <= 1 && !border; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const x = cx + dx;
        const y = cy + dy;
        if (x < 0 || y < 0 || x >= g.w || y >= g.h) continue;
        const o = g.owner[y * g.w + x]!;
        if (o !== 0 && o !== owner) border = true;
      }
    }
    if (!border && world.rng() > 0.04) {
      nextP[i] = clamp((g.pressure[i] ?? 0.6) + 0.01, 0.2, 1);
      continue;
    }

    const pA = influence(world, i, fA, owner !== iA);
    const pB = influence(world, i, fB, owner !== iB);
    const sum = pA + pB + 0.35;
    const lean = (pA - pB) / sum;
    let pressure = g.pressure[i] ?? 0.6;
    if (owner === iA) pressure += lean * 0.085;
    else pressure -= lean * 0.085;
    if (pressure < 0) {
      nextOwner[i] = owner === iA ? iB : iA;
      nextP[i] = 0.35;
    } else {
      nextP[i] = clamp(pressure, 0, 1);
    }
  }
  g.owner.set(nextOwner);
  g.pressure.set(nextP);
}

function stepCombat(world: World) {
  for (const u of world.units) {
    if (u.forming > 0) continue;
    let enemyP = 0;
    for (const v of world.units) {
      if (v.faction === u.faction || v.forming > 0) continue;
      const d2 = dist2(u, v);
      if (d2 > 46 * 46) continue;
      enemyP += unitPower(v) * Math.exp(-d2 / 1400);
    }
    if (enemyP < 0.08) {
      if (u.supplied) u.org = clamp(u.org + 0.35, 20, 100);
      u.strength = clamp(u.strength + (u.supplied ? 0.04 : 0), 8, 100);
      continue;
    }
    u.lastCombat = world.hour;
    const own = unitPower(u) * supportBonus(world, u.faction, u.x, u.y);
    const i = cellIndex(world.grid, u.x, u.y);
    const t = world.grid.terrain[i]!;
    const def = terrainMod(t, u.type, false);
    const fort = cityFortAt(world, u.x, u.y, u.faction);
    const taken = (enemyP / (own * def * (1 + fort * 0.15) + 0.4)) * (0.55 + world.rng() * 0.35);
    const dmg = taken * 0.55;
    u.strength = clamp(u.strength - dmg, 0, 100);
    u.org = clamp(u.org - dmg * 0.9, 8, 100);
    const fac = world.factions[u.faction]!;
    fac.casualties += dmg * 0.2;
  }
  world.units = world.units.filter((u) => {
    if (u.forming > 0) return true;
    if (u.strength > 12) return true;
    log(world, `${u.name} выведена из строя.`);
    return false;
  });
  for (const f of world.fronts) {
    f.unitIds = f.unitIds.filter((id) => world.units.some((u) => u.id === id));
  }
}

function frontTarget(world: World, u: Unit): { x: number; y: number } {
  const f = world.fronts.find((fr) => fr.id === u.frontId);
  if (!f) return { x: u.x, y: u.y };
  let nearest = f.anchors[0]!;
  let best = Infinity;
  for (const a of f.anchors) {
    const d = dist(u, a);
    if (d < best) {
      best = d;
      nearest = a;
    }
  }
  const i = cellIndex(world.grid, nearest.x, nearest.y);
  const nrm = borderNormal(world, i, fid(world, u.faction));
  const push = f.order === "attack" ? 28 : f.order === "defend" ? 6 : 0;
  return { x: nearest.x + nrm.x * push, y: nearest.y + nrm.y * push };
}

function borderNormal(world: World, i: number, owner: number): { x: number; y: number } {
  const g = world.grid;
  const cx = i % g.w;
  const cy = (i / g.w) | 0;
  let nx = 0;
  let ny = 0;
  for (let dy = -2; dy <= 2; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const x = cx + dx;
      const y = cy + dy;
      if (x < 0 || y < 0 || x >= g.w || y >= g.h) continue;
      const o = g.owner[y * g.w + x]!;
      if (o === 0) continue;
      if (o !== owner) {
        nx += dx;
        ny += dy;
      }
    }
  }
  const len = Math.hypot(nx, ny) || 1;
  return { x: nx / len, y: ny / len };
}

function stepMove(world: World) {
  for (const u of world.units) {
    if (u.forming > 0) {
      u.forming -= 1;
      if (u.forming <= 0) {
        u.forming = 0;
        log(world, `${u.name} сформирована.`);
      }
      continue;
    }
    let tx = u.tx;
    let ty = u.ty;
    if (u.order === "front") {
      const t = frontTarget(world, u);
      tx = t.x;
      ty = t.y;
    } else if (u.order === "idle") {
      continue;
    }
    const d = Math.hypot(tx - u.x, ty - u.y);
    if (d < 4) {
      if (u.order === "move" || u.order === "attack") u.order = u.frontId ? "front" : "idle";
      continue;
    }
    const inCombat = world.hour - u.lastCombat < 3;
    let spd = MOVE[u.type] * (u.supplied ? 1 : 0.55) * (inCombat ? 0.42 : 1);
    const i = cellIndex(world.grid, u.x, u.y);
    const t = world.grid.terrain[i]!;
    if (t === TERRAIN_CODE.mountain) spd *= 0.55;
    if (t === TERRAIN_CODE.river) spd *= 0.6;
    if (t === TERRAIN_CODE.forest) spd *= 0.8;
    if (t === TERRAIN_CODE.urban) spd *= 0.75;
    const step = Math.min(d, spd);
    let nx = u.x + ((tx - u.x) / d) * step;
    let ny = u.y + ((ty - u.y) / d) * step;
    const ni = cellIndex(world.grid, nx, ny);
    if (world.grid.terrain[ni] === TERRAIN_CODE.water) {
      nx = u.x + (world.rng() - 0.5) * spd;
      ny = u.y + (world.rng() - 0.5) * spd;
    }
    u.x = clamp(nx, 8, world.map.width - 8);
    u.y = clamp(ny, 8, world.map.height - 8);
  }
}

function stepCities(world: World) {
  for (const city of world.map.cities) {
    const st = world.cities.find((c) => c.id === city.id)!;
    const i = cellIndex(world.grid, city.x, city.y);
    const gridOwner = ownerId(world, world.grid.owner[i] ?? 0);
    if (!gridOwner) continue;
    if (st.owner === gridOwner) {
      st.siege = Math.max(0, st.siege - 0.2);
      continue;
    }
    const fort = 4 + city.fort * 6;
    st.siege += 1;
    if (st.siege >= fort) {
      st.owner = gridOwner;
      st.siege = 0;
      log(world, `${city.name}: контроль перешёл к ${world.defs[gridOwner]?.short ?? gridOwner}.`);
    }
  }
}

function stepEconomy(world: World) {
  const prod: Record<string, { man: number; eq: number; air: number }> = {};
  for (const id of Object.keys(world.factions)) prod[id] = { man: 0.12, eq: 0.08, air: 0 };
  for (const city of world.map.cities) {
    const st = world.cities.find((c) => c.id === city.id);
    if (!st?.owner) continue;
    const p = prod[st.owner]!;
    p.man += city.population * 0.018;
    if (city.assets.includes("factory")) p.eq += 0.22;
    if (city.assets.includes("infra")) p.man += 0.04;
    if (city.assets.includes("airbase")) p.air += 0.035;
    if (city.assets.includes("port")) p.eq += 0.08;
  }
  for (const [id, p] of Object.entries(prod)) {
    const f = world.factions[id]!;
    f.manpower = clamp(f.manpower + p.man, 0, 120);
    f.equipment = clamp(f.equipment + p.eq, 0, 120);
    f.air = clamp(f.air + p.air, 0, f.airMax);
    if (world.hour % 48 === 0) f.missiles = clamp(f.missiles + 0.35, 0, 8);
    if (world.hour % 24 === 0) f.drones = clamp(f.drones + 0.4, 0, 10);
    if (world.hour % 12 === 0) f.artillery = clamp(f.artillery + 0.15, 0, 8);
  }
}

function stepEvents(world: World) {
  for (const ev of world.events) {
    if (world.hour < ev.hour || world.eventsFired.has(ev.id)) continue;
    world.eventsFired.add(ev.id);
    log(world, ev.title);
    const e = ev.effect;
    if (!e) continue;
    const fac = e.faction ? world.factions[e.faction] : null;
    if (fac && e.org) {
      for (const u of world.units) if (u.faction === fac.id) u.org = clamp(u.org + e.org, 10, 100);
    }
    if (fac && e.manpower) fac.manpower += e.manpower;
    if (fac && e.equipment) fac.equipment += e.equipment;
    if (fac && e.missiles) fac.missiles += e.missiles;
  }
}

function checkVictory(world: World) {
  if (world.outcome) return;
  const key = world.map.cities.filter((c) => c.victory > 0);
  let pScore = 0;
  let eScore = 0;
  let total = 0;
  for (const c of key) {
    total += c.victory;
    const st = world.cities.find((s) => s.id === c.id);
    if (st?.owner === world.player) pScore += c.victory;
    if (st?.owner === world.enemy) eScore += c.victory;
  }
  const pCap = world.map.cities.find((c) => c.capitalOf === world.player);
  const eCap = world.map.cities.find((c) => c.capitalOf === world.enemy);
  const pCapSt = pCap ? world.cities.find((c) => c.id === pCap.id) : null;
  const eCapSt = eCap ? world.cities.find((c) => c.id === eCap.id) : null;
  const pPow = forcePower(world, world.player);
  const ePow = forcePower(world, world.enemy);
  const pStart = world.factions[world.player]!.startPower || 1;
  const eStart = world.factions[world.enemy]!.startPower || 1;

  if (pCapSt && pCapSt.owner === world.enemy && world.hour > 48) {
    world.outcome = { kind: "defeat", reason: `Потеряна столица — ${pCap?.name}.` };
    return;
  }
  if (eCapSt && eCapSt.owner === world.player && pScore >= total * 0.45) {
    world.outcome = { kind: "victory", reason: `Взята столица противника — ${eCap?.name}.` };
    return;
  }
  if (pScore >= total * 0.72 && pPow > ePow * 0.7) {
    world.outcome = { kind: "victory", reason: "Ключевые узлы под контролем." };
    return;
  }
  if (ePow < eStart * 0.22 && pScore > eScore) {
    world.outcome = { kind: "victory", reason: "Силы противника истощены." };
    return;
  }
  if (pPow < pStart * 0.2 && eScore >= pScore) {
    world.outcome = { kind: "defeat", reason: "Собственные силы разбиты." };
    return;
  }
  if (world.hour >= world.timeLimitHours) {
    const win = pScore > eScore || (pScore === eScore && pPow >= ePow);
    world.outcome = {
      kind: win ? "victory" : "defeat",
      reason: win ? "К сроку удержаны ключевые цели." : "Срок операции истёк без решающего результата.",
    };
  }
}

function stepAi(world: World) {
  if (world.hour % 6 !== 0) return;
  const fac = world.enemy;
  for (const f of world.fronts) {
    if (f.faction !== fac) continue;
    let own = 0;
    let foe = 0;
    for (const a of f.anchors) {
      own += localPower(world, fac, a.x, a.y);
      foe += localPower(world, world.player, a.x, a.y);
    }
    const ratio = own / (foe + 0.4);
    if (ratio > 1.25) f.order = "attack";
    else if (ratio < 0.8) f.order = "defend";
    else f.order = "hold";
    f.artillery = world.factions[fac]!.artillery >= 1;
    f.drones = world.factions[fac]!.drones >= 1;
  }
  const unassigned = world.units.filter((u) => u.faction === fac && !u.frontId && u.forming <= 0);
  const fronts = world.fronts.filter((f) => f.faction === fac);
  for (const u of unassigned) {
    const weakest = fronts.slice().sort((a, b) => a.unitIds.length - b.unitIds.length)[0];
    if (!weakest) break;
    assignUnitToFront(world, u.id, weakest.id);
  }
  if (world.rng() < 0.45) {
    const kinds: StrikeKind[] = ["artillery", "air", "drone", "missile"];
    const kind = kinds[(world.rng() * kinds.length) | 0]!;
    let tx = 0;
    let ty = 0;
    let best = 0;
    for (const u of world.units) {
      if (u.faction !== world.player) continue;
      const stack = localPower(world, world.player, u.x, u.y);
      if (stack > best) {
        best = stack;
        tx = u.x;
        ty = u.y;
      }
    }
    if (best > 0.8) fireStrike(world, fac, kind, tx, ty);
  }
  tryFormUnit(world, fac);
}

function localPower(world: World, faction: FactionId, x: number, y: number): number {
  let s = 0;
  for (const u of world.units) {
    if (u.faction !== faction || u.forming > 0) continue;
    const d2 = (u.x - x) ** 2 + (u.y - y) ** 2;
    if (d2 < 70 * 70) s += unitPower(u) * Math.exp(-d2 / 2500);
  }
  return s;
}

export function assignUnitToFront(world: World, unitId: string, frontId: string | null) {
  const u = world.units.find((x) => x.id === unitId);
  if (!u) return;
  if (u.frontId) {
    const old = world.fronts.find((f) => f.id === u.frontId);
    if (old) old.unitIds = old.unitIds.filter((id) => id !== u.id);
  }
  u.frontId = frontId;
  if (frontId) {
    const f = world.fronts.find((fr) => fr.id === frontId);
    if (f && f.faction === u.faction) {
      if (!f.unitIds.includes(u.id)) f.unitIds.push(u.id);
      u.order = "front";
    }
  } else {
    u.order = "idle";
  }
}

export function orderMove(world: World, unitId: string, x: number, y: number, attack: boolean) {
  const u = world.units.find((n) => n.id === unitId);
  if (!u || u.faction !== world.player) return;
  u.tx = x;
  u.ty = y;
  u.order = attack ? "attack" : "move";
}

export function setFrontOrder(world: World, frontId: string, order: FrontOrder) {
  const f = world.fronts.find((n) => n.id === frontId);
  if (!f || f.faction !== world.player) return;
  f.order = order;
}

export function createFront(world: World, name: string, anchors: { x: number; y: number }[]): Front | null {
  if (anchors.length < 1) return null;
  const f: Front = {
    id: makeId(world, "f"),
    name,
    faction: world.player,
    anchors,
    order: "hold",
    unitIds: [],
    artillery: false,
    air: false,
    drones: false,
  };
  world.fronts.push(f);
  log(world, `Создан фронт «${name}».`);
  return f;
}

export function toggleFrontSupport(world: World, frontId: string, kind: "artillery" | "air" | "drones") {
  const f = world.fronts.find((n) => n.id === frontId);
  if (!f || f.faction !== world.player) return;
  f[kind] = !f[kind];
}

export function fireStrike(world: World, faction: FactionId, kind: StrikeKind, x: number, y: number): boolean {
  const f = world.factions[faction];
  if (!f) return false;
  const cost: Record<StrikeKind, { key: keyof typeof f; need: number; r: number; dmg: number }> = {
    artillery: { key: "artillery", need: 0.8, r: 36, dmg: 7 },
    air: { key: "air", need: 1, r: 42, dmg: 11 },
    drone: { key: "drones", need: 1, r: 28, dmg: 6 },
    missile: { key: "missiles", need: 1, r: 48, dmg: 18 },
  };
  const c = cost[kind];
  const pool = f[c.key];
  if (typeof pool !== "number" || pool < c.need) return false;
  (f[c.key] as number) = pool - c.need;
  world.strikes.push({ x, y, r: c.r, kind, t: 1 });
  for (const u of world.units) {
    if (u.faction === faction) continue;
    const d = Math.hypot(u.x - x, u.y - y);
    if (d > c.r) continue;
    const fall = 1 - d / c.r;
    u.strength = clamp(u.strength - c.dmg * fall, 5, 100);
    u.org = clamp(u.org - c.dmg * 0.8 * fall, 8, 100);
  }
  const city = world.map.cities.find((ct) => Math.hypot(ct.x - x, ct.y - y) < 18);
  if (city) {
    const st = world.cities.find((s) => s.id === city.id);
    if (st && st.owner && st.owner !== faction) st.siege += kind === "missile" ? 3 : 1.2;
  }
  if (faction === world.player) log(world, `${kindLabel(kind)} по координатам ${x | 0},${y | 0}.`);
  return true;
}

function kindLabel(k: StrikeKind): string {
  if (k === "air") return "Авиаудар";
  if (k === "drone") return "Удар дронов";
  if (k === "missile") return "Ракетный удар";
  return "Артналёт";
}

export function tryFormUnit(world: World, faction: FactionId, type: UnitType = "infantry", cityId?: string): boolean {
  const f = world.factions[faction]!;
  const cost = FORM_COST[type];
  if (f.manpower < cost.man || f.equipment < cost.eq) return false;
  let city = cityId ? world.map.cities.find((c) => c.id === cityId) : undefined;
  if (!city) {
    city = world.map.cities.find((c) => {
      const st = world.cities.find((s) => s.id === c.id);
      return st?.owner === faction && c.assets.includes("factory");
    });
  }
  if (!city) return false;
  const st = world.cities.find((s) => s.id === city!.id);
  if (st?.owner !== faction) return false;
  f.manpower -= cost.man;
  f.equipment -= cost.eq;
  const names: Record<UnitType, string> = {
    infantry: "Пех. бр.",
    mech: "Мех. бр.",
    armor: "Танк. бр.",
    artillery: "Арт. бр.",
  };
  world.units.push({
    id: makeId(world, "u"),
    faction,
    type,
    name: `${names[type]} ${city.name}`,
    x: city.x + (world.rng() - 0.5) * 12,
    y: city.y + (world.rng() - 0.5) * 12,
    strength: 62,
    org: 58,
    supplied: true,
    forming: cost.hours,
    elite: false,
    order: "idle",
    tx: city.x,
    ty: city.y,
    frontId: null,
    lastCombat: -999,
  });
  if (faction === world.player) log(world, `Формируется ${names[type]} в ${city.name}.`);
  return true;
}

export function stepWorld(world: World, hours: number) {
  for (let h = 0; h < hours; h++) {
    if (world.outcome) return;
    world.hour += 1;
    rebuildSupply(world);
    stepMove(world);
    stepFront(world);
    stepCombat(world);
    stepCities(world);
    stepEconomy(world);
    stepEvents(world);
    stepAi(world);
    if (world.hour % 6 === 0) checkVictory(world);
    world.strikes = world.strikes.filter((s) => {
      s.t -= 0.12;
      return s.t > 0;
    });
  }
}

export function dateLabel(world: World, startIso: string): string {
  const t = Date.parse(startIso) + world.hour * 3600 * 1000;
  const d = new Date(t);
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const hh = String(d.getUTCHours()).padStart(2, "0");
  return `${dd}.${mm}.${d.getUTCFullYear()}  ${hh}:00`;
}

export function victoryScore(world: World): number {
  const key = world.map.cities.filter((c) => c.victory > 0);
  let p = 0;
  let t = 0;
  for (const c of key) {
    t += c.victory;
    if (world.cities.find((s) => s.id === c.id)?.owner === world.player) p += c.victory;
  }
  return t === 0 ? 0 : p / t;
}

export { cellIndex, cellCenter, GW, GH };
