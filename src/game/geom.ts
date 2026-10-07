export type Vec = { x: number; y: number };

export function dist(a: Vec, b: Vec): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function dist2(a: Vec, b: Vec): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

export function lerpVec(a: Vec, b: Vec, t: number): Vec {
  return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) };
}

export function pointInPoly(x: number, y: number, poly: number[]): boolean {
  let inside = false;
  const n = (poly.length / 2) | 0;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const xi = poly[i * 2]!;
    const yi = poly[i * 2 + 1]!;
    const xj = poly[j * 2]!;
    const yj = poly[j * 2 + 1]!;
    const hit = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi + 1e-9) + xi;
    if (hit) inside = !inside;
  }
  return inside;
}

export function distToSeg(px: number, py: number, ax: number, ay: number, bx: number, by: number): number {
  const vx = bx - ax;
  const vy = by - ay;
  const len2 = vx * vx + vy * vy;
  if (len2 < 1e-6) return Math.hypot(px - ax, py - ay);
  let t = ((px - ax) * vx + (py - ay) * vy) / len2;
  t = clamp(t, 0, 1);
  return Math.hypot(px - (ax + t * vx), py - (ay + t * vy));
}

export function distToPolyline(x: number, y: number, pts: number[]): number {
  let best = Infinity;
  for (let i = 0; i + 3 < pts.length; i += 2) {
    const d = distToSeg(x, y, pts[i]!, pts[i + 1]!, pts[i + 2]!, pts[i + 3]!);
    if (d < best) best = d;
  }
  return best;
}

export function closestOnPolyline(x: number, y: number, pts: number[]): Vec {
  let best = Infinity;
  let cx = pts[0] ?? x;
  let cy = pts[1] ?? y;
  for (let i = 0; i + 3 < pts.length; i += 2) {
    const ax = pts[i]!;
    const ay = pts[i + 1]!;
    const bx = pts[i + 2]!;
    const by = pts[i + 3]!;
    const vx = bx - ax;
    const vy = by - ay;
    const len2 = vx * vx + vy * vy || 1;
    const t = clamp(((x - ax) * vx + (y - ay) * vy) / len2, 0, 1);
    const px = ax + t * vx;
    const py = ay + t * vy;
    const d = Math.hypot(x - px, y - py);
    if (d < best) {
      best = d;
      cx = px;
      cy = py;
    }
  }
  return { x: cx, y: cy };
}

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hash2(x: number, y: number): number {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

export function chaikin(pts: Vec[], iters = 2): Vec[] {
  let cur = pts;
  for (let k = 0; k < iters; k++) {
    if (cur.length < 3) break;
    const next: Vec[] = [cur[0]!];
    for (let i = 0; i < cur.length - 1; i++) {
      const a = cur[i]!;
      const b = cur[i + 1]!;
      next.push({ x: a.x * 0.75 + b.x * 0.25, y: a.y * 0.75 + b.y * 0.25 });
      next.push({ x: a.x * 0.25 + b.x * 0.75, y: a.y * 0.25 + b.y * 0.75 });
    }
    next.push(cur[cur.length - 1]!);
    cur = next;
  }
  return cur;
}
