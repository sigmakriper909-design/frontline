const KEY = "frontline.save.v1";
const SAVE_VERSION = 1;

export interface SaveBlob {
  version: number;
  screen: "play";
  scenarioId: string;
  player: string;
  balance: number;
  hour: number;
  world: unknown;
}

export function writeSave(blob: SaveBlob) {
  try {
    const prev = localStorage.getItem(KEY);
    if (prev) localStorage.setItem(KEY + ".bak", prev);
    localStorage.setItem(KEY, JSON.stringify(blob));
  } catch {
    /* private mode / quota */
  }
}

export function readSave(): SaveBlob | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SaveBlob;
    if (!parsed || parsed.version !== SAVE_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearSave() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}

export function serializeWorld(world: {
  scenarioId: string;
  player: string;
  enemy: string;
  hour: number;
  balance: number;
  nextId: number;
  units: unknown;
  fronts: unknown;
  cities: unknown;
  factions: unknown;
  logs: unknown;
  eventsFired: Set<string>;
  outcome: unknown;
  grid: {
    w: number;
    h: number;
    cellW: number;
    cellH: number;
    owner: Uint8Array;
    terrain: Uint8Array;
    pressure: Float32Array;
    supply: Uint8Array;
  };
}) {
  return {
    scenarioId: world.scenarioId,
    player: world.player,
    enemy: world.enemy,
    hour: world.hour,
    balance: world.balance,
    nextId: world.nextId,
    units: world.units,
    fronts: world.fronts,
    cities: world.cities,
    factions: world.factions,
    logs: world.logs,
    eventsFired: [...world.eventsFired],
    outcome: world.outcome,
    grid: {
      w: world.grid.w,
      h: world.grid.h,
      cellW: world.grid.cellW,
      cellH: world.grid.cellH,
      owner: Array.from(world.grid.owner),
      terrain: Array.from(world.grid.terrain),
      pressure: Array.from(world.grid.pressure),
      supply: Array.from(world.grid.supply),
    },
  };
}
