import { scenarioById } from "./scenarios";
import { createWorld, dateLabel, forcePower, victoryScore } from "./sim";
import type { Camera } from "./render";
import { fitCamera } from "./render";
import { readSave, serializeWorld, writeSave, type SaveBlob } from "./save";
import type { Front, HudSnap, StrikeKind, Unit, World } from "./types";
import { mulberry32 } from "./geom";

export interface Runtime {
  world: World;
  camera: Camera;
  startIso: string;
  scenarioName: string;
}

let runtime: Runtime | null = null;
let lastSave = 0;

export function getRuntime(): Runtime | null {
  return runtime;
}

export function startRuntime(scenarioId: string, player: string, balance: number, w: number, h: number): Runtime {
  const sc = scenarioById(scenarioId);
  if (!sc) throw new Error("unknown scenario");
  const world = createWorld(sc, player, balance, (Date.now() & 0xffff) + 1);
  runtime = {
    world,
    camera: fitCamera(world, Math.max(320, w), Math.max(480, h)),
    startIso: sc.startHourStamp,
    scenarioName: sc.name,
  };
  persist();
  return runtime;
}

export function stopRuntime() {
  runtime = null;
}

export function snapshotHud(): HudSnap | null {
  const rt = runtime;
  if (!rt) return null;
  const w = rt.world;
  const f = w.factions[w.player]!;
  const latest = [...w.eventsFired].pop();
  const ev = latest ? w.events.find((e) => e.id === latest && w.hour - e.hour < 8) : null;
  return {
    hour: w.hour,
    dateLabel: dateLabel(w, rt.startIso),
    manpower: f.manpower,
    equipment: f.equipment,
    air: f.air,
    airMax: f.airMax,
    drones: f.drones,
    missiles: f.missiles,
    artillery: f.artillery,
    playerPower: forcePower(w, w.player),
    enemyPower: forcePower(w, w.enemy),
    playerCities: w.cities.filter((c) => c.owner === w.player).length,
    enemyCities: w.cities.filter((c) => c.owner === w.enemy).length,
    victoryScore: victoryScore(w),
    log: w.logs.slice(0, 6),
    outcome: w.outcome,
    eventBanner: ev ? { title: ev.title, body: ev.body } : null,
  };
}

export function persist(force = false) {
  const rt = runtime;
  if (!rt) return;
  const now = performance.now();
  if (!force && now - lastSave < 4000) return;
  lastSave = now;
  const blob: SaveBlob = {
    version: 1,
    screen: "play",
    scenarioId: rt.world.scenarioId,
    player: rt.world.player,
    balance: rt.world.balance,
    hour: rt.world.hour,
    world: serializeWorld(rt.world),
  };
  writeSave(blob);
}

export function tryRestore(w: number, h: number): Runtime | null {
  const blob = readSave();
  if (!blob) return null;
  const sc = scenarioById(blob.scenarioId);
  if (!sc) return null;
  try {
    const data = blob.world as ReturnType<typeof serializeWorld>;
    const world = createWorld(sc, blob.player, blob.balance, 1);
    world.hour = data.hour;
    world.nextId = data.nextId;
    world.units = data.units as Unit[];
    world.fronts = data.fronts as Front[];
    world.cities = data.cities as World["cities"];
    world.factions = data.factions as World["factions"];
    world.logs = data.logs as World["logs"];
    world.eventsFired = new Set(data.eventsFired);
    world.outcome = data.outcome as World["outcome"];
    world.rng = mulberry32((data.hour + 17) | 0);
    const g = data.grid;
    world.grid.owner = Uint8Array.from(g.owner);
    world.grid.terrain = Uint8Array.from(g.terrain);
    world.grid.pressure = Float32Array.from(g.pressure);
    world.grid.supply = Uint8Array.from(g.supply);
    runtime = {
      world,
      camera: fitCamera(world, Math.max(320, w), Math.max(480, h)),
      startIso: sc.startHourStamp,
      scenarioName: sc.name,
    };
    return runtime;
  } catch {
    return null;
  }
}

export function findUnit(id: string): Unit | undefined {
  return runtime?.world.units.find((u) => u.id === id);
}

export function findFront(id: string): Front | undefined {
  return runtime?.world.fronts.find((f) => f.id === id);
}

export type { StrikeKind };
