import { chaikin, hash2 } from "./geom";
import { cellCenter } from "./sim";
import type { Front, StrikeKind, Unit, UnitType, World } from "./types";
import { TERRAIN_CODE } from "./types";

export interface Camera {
  x: number;
  y: number;
  zoom: number;
}

export interface ViewPick {
  kind: "unit" | "city" | "front" | "map";
  id?: string;
  x: number;
  y: number;
}

const TERRAIN_FILL: Record<number, string> = {
  0: "#152026",
  1: "#2a3228",
  2: "#223026",
  3: "#35352f",
  4: "#3a372f",
  5: "#1c2c32",
};

export function worldToScreen(cam: Camera, x: number, y: number, w: number, h: number) {
  return {
    x: (x - cam.x) * cam.zoom + w / 2,
    y: (y - cam.y) * cam.zoom + h / 2,
  };
}

export function screenToWorld(cam: Camera, sx: number, sy: number, w: number, h: number) {
  return {
    x: (sx - w / 2) / cam.zoom + cam.x,
    y: (sy - h / 2) / cam.zoom + cam.y,
  };
}

function strokePoly(ctx: CanvasRenderingContext2D, pts: number[], close = true) {
  ctx.beginPath();
  ctx.moveTo(pts[0]!, pts[1]!);
  for (let i = 2; i < pts.length; i += 2) ctx.lineTo(pts[i]!, pts[i + 1]!);
  if (close) ctx.closePath();
}

function traceFront(world: World): { x: number; y: number }[][] {
  const g = world.grid;
  const seen = new Uint8Array(g.w * g.h);
  const lines: { x: number; y: number }[][] = [];
  const neigh = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const isBorder = (i: number) => {
    if (g.terrain[i] === TERRAIN_CODE.water || g.owner[i] === 0) return false;
    const cx = i % g.w;
    const cy = (i / g.w) | 0;
    for (const [dx, dy] of neigh) {
      const x = cx + dx;
      const y = cy + dy;
      if (x < 0 || y < 0 || x >= g.w || y >= g.h) continue;
      const o = g.owner[y * g.w + x]!;
      if (o !== 0 && o !== g.owner[i]) return true;
    }
    return false;
  };

  for (let i = 0; i < g.w * g.h; i++) {
    if (seen[i] || !isBorder(i)) continue;
    const line: { x: number; y: number }[] = [];
    let cur = i;
    let guard = 0;
    while (cur >= 0 && guard++ < 400) {
      if (seen[cur]) break;
      seen[cur] = 1;
      line.push(cellCenter(g, cur));
      const cx = cur % g.w;
      const cy = (cur / g.w) | 0;
      let next = -1;
      for (const [dx, dy] of neigh) {
        const x = cx + dx;
        const y = cy + dy;
        if (x < 0 || y < 0 || x >= g.w || y >= g.h) continue;
        const ni = y * g.w + x;
        if (!seen[ni] && isBorder(ni)) {
          next = ni;
          break;
        }
      }
      cur = next;
    }
    if (line.length >= 3) lines.push(chaikin(line, 2));
  }
  return lines;
}

function drawNATO(ctx: CanvasRenderingContext2D, type: UnitType, color: string, selected: boolean) {
  const w = 22;
  const h = 14;
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = selected ? "#e8e9eb" : "rgba(232,233,235,0.55)";
  ctx.lineWidth = selected ? 1.8 : 1;
  ctx.beginPath();
  ctx.roundRect(-w / 2, -h / 2, w, h, 1.5);
  ctx.fill();
  ctx.stroke();
  ctx.strokeStyle = "#e8e9eb";
  ctx.lineWidth = 1.15;
  ctx.beginPath();
  if (type === "infantry") {
    ctx.moveTo(-7, -5);
    ctx.lineTo(7, 5);
    ctx.moveTo(7, -5);
    ctx.lineTo(-7, 5);
  } else if (type === "armor") {
    ctx.ellipse(0, 0, 7, 4, 0, 0, Math.PI * 2);
  } else if (type === "mech") {
    ctx.moveTo(-7, -5);
    ctx.lineTo(7, 5);
    ctx.moveTo(7, -5);
    ctx.lineTo(-7, 5);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(0, 0, 7, 4, 0, 0, Math.PI * 2);
  } else {
    ctx.arc(0, 3, 1.4, 0, Math.PI * 2);
    ctx.moveTo(0, -5);
    ctx.lineTo(0, 1.4);
  }
  ctx.stroke();
  ctx.restore();
}

export function pickAt(
  world: World,
  cam: Camera,
  sx: number,
  sy: number,
  w: number,
  h: number,
): ViewPick {
  const p = screenToWorld(cam, sx, sy, w, h);
  let bestU: Unit | null = null;
  let bestD = 18 / cam.zoom;
  for (const u of world.units) {
    const d = Math.hypot(u.x - p.x, u.y - p.y);
    if (d < bestD) {
      bestD = d;
      bestU = u;
    }
  }
  if (bestU) return { kind: "unit", id: bestU.id, x: p.x, y: p.y };

  let bestC = Infinity;
  let cityId: string | undefined;
  for (const c of world.map.cities) {
    const d = Math.hypot(c.x - p.x, c.y - p.y);
    if (d < 16 && d < bestC) {
      bestC = d;
      cityId = c.id;
    }
  }
  if (cityId) return { kind: "city", id: cityId, x: p.x, y: p.y };

  let bestF: Front | null = null;
  let bestFd = 28;
  for (const f of world.fronts) {
    for (const a of f.anchors) {
      const d = Math.hypot(a.x - p.x, a.y - p.y);
      if (d < bestFd) {
        bestFd = d;
        bestF = f;
      }
    }
  }
  if (bestF) return { kind: "front", id: bestF.id, x: p.x, y: p.y };
  return { kind: "map", x: p.x, y: p.y };
}

export function renderWorld(
  ctx: CanvasRenderingContext2D,
  world: World,
  cam: Camera,
  w: number,
  h: number,
  selected: { unitId?: string; frontId?: string; cityId?: string },
  hover: { x: number; y: number } | null,
  strike: StrikeKind | null,
) {
  ctx.save();
  ctx.fillStyle = "#101210";
  ctx.fillRect(0, 0, w, h);
  ctx.translate(w / 2, h / 2);
  ctx.scale(cam.zoom, cam.zoom);
  ctx.translate(-cam.x, -cam.y);

  const g = world.grid;
  for (let i = 0; i < g.w * g.h; i++) {
    const cx = i % g.w;
    const cy = (i / g.w) | 0;
    const t = g.terrain[i]!;
    const x = cx * g.cellW;
    const y = cy * g.cellH;
    ctx.fillStyle = TERRAIN_FILL[t] ?? TERRAIN_FILL[1]!;
    ctx.fillRect(x, y, g.cellW + 0.6, g.cellH + 0.6);
    const n = hash2(cx, cy);
    if (t === TERRAIN_CODE.plains && n > 0.72) {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(x, y, g.cellW, g.cellH);
    }
    const owner = g.owner[i]!;
    if (owner && t !== TERRAIN_CODE.water) {
      const fac = ownerId(world, owner);
      const def = fac ? world.defs[fac] : null;
      if (def) {
        ctx.fillStyle = hexAlpha(def.fill, 0.32 + (g.pressure[i] ?? 0) * 0.12);
        ctx.fillRect(x, y, g.cellW + 0.6, g.cellH + 0.6);
      }
      if (!g.supply[i]) {
        ctx.fillStyle = "rgba(12,13,14,0.18)";
        ctx.fillRect(x, y, g.cellW, g.cellH);
      }
    }
  }

  ctx.lineWidth = 1.6 / cam.zoom;
  ctx.strokeStyle = "#4a4336";
  for (const road of world.map.roads) {
    strokePoly(ctx, road, false);
    ctx.stroke();
  }

  for (const r of world.map.rivers) {
    ctx.lineWidth = r.width / cam.zoom;
    ctx.strokeStyle = "#1e3640";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    strokePoly(ctx, r.pts, false);
    ctx.stroke();
  }

  const fronts = traceFront(world);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (const line of fronts) {
    if (line.length < 2) continue;
    ctx.beginPath();
    ctx.moveTo(line[0]!.x, line[0]!.y);
    for (let i = 1; i < line.length; i++) ctx.lineTo(line[i]!.x, line[i]!.y);
    ctx.strokeStyle = "rgba(12,13,14,0.7)";
    ctx.lineWidth = 6.5 / cam.zoom;
    ctx.stroke();
    ctx.strokeStyle = "#d8d6c8";
    ctx.lineWidth = 2.4 / cam.zoom;
    ctx.stroke();
    ctx.strokeStyle = "rgba(216,214,200,0.45)";
    ctx.lineWidth = 1 / cam.zoom;
    for (let i = 2; i < line.length; i += 3) {
      const a = line[i - 1]!;
      const b = line[i]!;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      ctx.beginPath();
      ctx.moveTo(mx, my);
      ctx.lineTo(mx + nx * (7 / cam.zoom), my + ny * (7 / cam.zoom));
      ctx.stroke();
    }
  }

  for (const f of world.fronts) {
    const active = selected.frontId === f.id;
    ctx.fillStyle = active ? "#e8e9eb" : hexAlpha(world.defs[f.faction]?.color ?? "#ccc", 0.9);
    for (const a of f.anchors) {
      ctx.beginPath();
      ctx.arc(a.x, a.y, (active ? 4.2 : 2.6) / cam.zoom, 0, Math.PI * 2);
      ctx.fill();
    }
    if (active && f.anchors.length >= 2) {
      ctx.strokeStyle = "rgba(232,233,235,0.55)";
      ctx.lineWidth = 1.4 / cam.zoom;
      ctx.setLineDash([6 / cam.zoom, 4 / cam.zoom]);
      ctx.beginPath();
      ctx.moveTo(f.anchors[0]!.x, f.anchors[0]!.y);
      for (let i = 1; i < f.anchors.length; i++) ctx.lineTo(f.anchors[i]!.x, f.anchors[i]!.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }

  for (const city of world.map.cities) {
    const st = world.cities.find((c) => c.id === city.id);
    const owner = st?.owner;
    const def = owner ? world.defs[owner] : null;
    const sel = selected.cityId === city.id;
    const r = city.victory >= 4 ? 6.5 : city.victory >= 2 ? 5.2 : 4.2;
    ctx.beginPath();
    ctx.arc(city.x, city.y, r, 0, Math.PI * 2);
    ctx.fillStyle = def ? def.fill : "#2a2c2e";
    ctx.fill();
    ctx.lineWidth = (sel ? 2.2 : 1.2) / cam.zoom;
    ctx.strokeStyle = sel ? "#e8e9eb" : def ? def.color : "#8b8e93";
    ctx.stroke();
    if (city.fort > 0) {
      ctx.beginPath();
      ctx.arc(city.x, city.y, r + 3.2, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(232,233,235,0.22)";
      ctx.lineWidth = 1 / cam.zoom;
      ctx.stroke();
    }
    if (st && st.siege > 0.4) {
      ctx.beginPath();
      ctx.arc(city.x, city.y, r + 5.5, -Math.PI / 2, -Math.PI / 2 + (st.siege / 10) * Math.PI * 2);
      ctx.strokeStyle = "#c45c4a";
      ctx.lineWidth = 1.6 / cam.zoom;
      ctx.stroke();
    }
    const showName = cam.zoom > 0.72 || city.victory >= 3 || sel;
    if (showName) {
      ctx.font = `${11 / cam.zoom}px "Barlow Condensed", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillStyle = "rgba(12,13,14,0.7)";
      ctx.fillText(city.name, city.x + 0.6 / cam.zoom, city.y + r + 3.2 / cam.zoom);
      ctx.fillStyle = "#e8e9eb";
      ctx.fillText(city.name, city.x, city.y + r + 2.4 / cam.zoom);
    }
  }

  const selUnit = world.units.find((u) => u.id === selected.unitId);
  if (selUnit && (selUnit.order === "move" || selUnit.order === "attack")) {
    ctx.strokeStyle = "rgba(197,201,208,0.7)";
    ctx.setLineDash([5 / cam.zoom, 4 / cam.zoom]);
    ctx.lineWidth = 1.3 / cam.zoom;
    ctx.beginPath();
    ctx.moveTo(selUnit.x, selUnit.y);
    ctx.lineTo(selUnit.tx, selUnit.ty);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  const sorted = [...world.units].sort((a, b) => a.y - b.y);
  for (const u of sorted) {
    ctx.save();
    ctx.translate(u.x, u.y);
    const s = 1 / cam.zoom;
    ctx.scale(s, s);
    const def = world.defs[u.faction]!;
    const mine = u.faction === world.player;
    const col = mine ? "#3d4a40" : "#4a332e";
    if (u.forming > 0) ctx.globalAlpha = 0.45;
    drawNATO(ctx, u.type, col, u.id === selected.unitId);
    ctx.globalAlpha = 1;
    ctx.fillStyle = def.color;
    ctx.fillRect(-11, 8, 22 * (u.strength / 100), 2);
    ctx.fillStyle = "rgba(232,233,235,0.16)";
    ctx.fillRect(-11, 8, 22, 2);
    if (!u.supplied) {
      ctx.fillStyle = "#c4a15a";
      ctx.fillRect(9, -9, 3, 3);
    }
    if (cam.zoom > 1.05 || u.id === selected.unitId) {
      ctx.font = "8px IBM Plex Sans, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillStyle = "#e8e9eb";
      ctx.fillText(u.name, 0, -10);
    }
    ctx.restore();
  }

  for (const s of world.strikes) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r * (1.1 - s.t * 0.3), 0, Math.PI * 2);
    ctx.strokeStyle = hexAlpha("#c45c4a", s.t);
    ctx.lineWidth = 2.2 / cam.zoom;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(s.x, s.y, 4 / cam.zoom, 0, Math.PI * 2);
    ctx.fillStyle = hexAlpha("#e8e9eb", s.t);
    ctx.fill();
  }

  if (strike && hover) {
    ctx.beginPath();
    ctx.arc(hover.x, hover.y, 36, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(196,92,74,0.7)";
    ctx.setLineDash([5, 4]);
    ctx.lineWidth = 1.4 / cam.zoom;
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.restore();

  ctx.save();
  ctx.fillStyle = "rgba(232,233,235,0.55)";
  ctx.font = "11px IBM Plex Sans, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("N", 16, h - 28);
  ctx.strokeStyle = "rgba(232,233,235,0.4)";
  ctx.beginPath();
  ctx.moveTo(18, h - 44);
  ctx.lineTo(18, h - 58);
  ctx.lineTo(14, h - 52);
  ctx.moveTo(18, h - 58);
  ctx.lineTo(22, h - 52);
  ctx.stroke();
  const km = 80;
  const px = km * cam.zoom;
  ctx.beginPath();
  ctx.moveTo(w - 24 - px, h - 22);
  ctx.lineTo(w - 24, h - 22);
  ctx.stroke();
  ctx.textAlign = "right";
  ctx.fillText("80 км", w - 24, h - 28);
  ctx.restore();
}

function ownerId(world: World, idx: number): string | null {
  for (const [id, n] of Object.entries(world.factionIndex)) if (n === idx) return id;
  return null;
}

function hexAlpha(hex: string, a: number): string {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r},${g},${b},${a})`;
}

export function fitCamera(world: World, w: number, h: number): Camera {
  const z = Math.min(w / world.map.width, h / world.map.height) * 0.98;
  return { x: world.map.width / 2, y: world.map.height / 2, zoom: Math.max(0.45, z) };
}
