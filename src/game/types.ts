import type { Vec } from "./geom";

export type FactionId = string;
export type UnitType = "infantry" | "mech" | "armor" | "artillery";
export type Terrain = "water" | "plains" | "forest" | "urban" | "mountain" | "river";
export type FrontOrder = "attack" | "defend" | "hold";
export type UnitOrderKind = "idle" | "move" | "attack" | "front";
export type Asset = "factory" | "depot" | "infra" | "hq" | "port" | "airbase";
export type StrikeKind = "artillery" | "air" | "drone" | "missile";
export type Screen = "menu" | "setup" | "play" | "end";

export const TERRAIN_CODE: Record<Terrain, number> = {
  water: 0,
  plains: 1,
  forest: 2,
  urban: 3,
  mountain: 4,
  river: 5,
};

export const TERRAIN_FROM: Terrain[] = ["water", "plains", "forest", "urban", "mountain", "river"];

export interface CityDef {
  id: string;
  name: string;
  x: number;
  y: number;
  assets: Asset[];
  fort: number;
  victory: number;
  population: number;
  capitalOf?: FactionId;
}

export interface MapDef {
  width: number;
  height: number;
  land: number[][];
  water: number[][];
  rivers: { pts: number[]; width: number }[];
  roads: number[][];
  forests: number[][];
  mountains: number[][];
  cities: CityDef[];
}

export interface UnitSeed {
  faction: FactionId;
  type: UnitType;
  name: string;
  x: number;
  y: number;
  strength: number;
  elite?: boolean;
}

export interface FrontSeed {
  name: string;
  faction: FactionId;
  anchors: Vec[];
  order: FrontOrder;
}

export interface ScenarioEvent {
  id: string;
  hour: number;
  title: string;
  body: string;
  effect?: {
    faction?: FactionId;
    org?: number;
    manpower?: number;
    equipment?: number;
    missiles?: number;
  };
}

export interface Scenario {
  id: string;
  name: string;
  dateLabel: string;
  startHourStamp: string;
  blurb: string;
  briefing: string;
  map: MapDef;
  factions: FactionDef[];
  startOwner: { faction: FactionId; polys: number[][] }[];
  units: UnitSeed[];
  fronts: FrontSeed[];
  events: ScenarioEvent[];
  timeLimitHours: number;
  durationHint: string;
}

export interface FactionDef {
  id: FactionId;
  name: string;
  short: string;
  color: string;
  fill: string;
  supplyEdges: ("n" | "e" | "s" | "w")[];
}

export interface Unit {
  id: string;
  faction: FactionId;
  type: UnitType;
  name: string;
  x: number;
  y: number;
  strength: number;
  org: number;
  supplied: boolean;
  forming: number;
  elite: boolean;
  order: UnitOrderKind;
  tx: number;
  ty: number;
  frontId: string | null;
  lastCombat: number;
}

export interface Front {
  id: string;
  name: string;
  faction: FactionId;
  anchors: Vec[];
  order: FrontOrder;
  unitIds: string[];
  artillery: boolean;
  air: boolean;
  drones: boolean;
}

export interface FactionState {
  id: FactionId;
  manpower: number;
  equipment: number;
  artillery: number;
  air: number;
  airMax: number;
  drones: number;
  missiles: number;
  casualties: number;
  startPower: number;
}

export interface CityState {
  id: string;
  owner: FactionId | null;
  siege: number;
}

export interface StrikeFx {
  x: number;
  y: number;
  r: number;
  kind: StrikeKind;
  t: number;
}

export interface LogEntry {
  hour: number;
  text: string;
}

export interface Grid {
  w: number;
  h: number;
  cellW: number;
  cellH: number;
  owner: Uint8Array;
  terrain: Uint8Array;
  pressure: Float32Array;
  supply: Uint8Array;
}

export interface World {
  scenarioId: string;
  player: FactionId;
  enemy: FactionId;
  factionIndex: Record<FactionId, number>;
  factions: Record<FactionId, FactionState>;
  defs: Record<FactionId, FactionDef>;
  map: MapDef;
  grid: Grid;
  units: Unit[];
  fronts: Front[];
  cities: CityState[];
  hour: number;
  rng: () => number;
  strikes: StrikeFx[];
  logs: LogEntry[];
  eventsFired: Set<string>;
  outcome: { kind: "victory" | "defeat"; reason: string } | null;
  nextId: number;
  timeLimitHours: number;
  events: ScenarioEvent[];
  balance: number;
}

export interface HudSnap {
  hour: number;
  dateLabel: string;
  manpower: number;
  equipment: number;
  air: number;
  airMax: number;
  drones: number;
  missiles: number;
  artillery: number;
  playerPower: number;
  enemyPower: number;
  playerCities: number;
  enemyCities: number;
  victoryScore: number;
  log: LogEntry[];
  outcome: World["outcome"];
  eventBanner: { title: string; body: string } | null;
}

export const UNIT_LABEL: Record<UnitType, string> = {
  infantry: "Пехота",
  mech: "Механизированные",
  armor: "Танки",
  artillery: "Артиллерия",
};

export const ORDER_LABEL: Record<FrontOrder, string> = {
  attack: "Наступление",
  defend: "Оборона",
  hold: "Удержание",
};

export const ASSET_LABEL: Record<Asset, string> = {
  factory: "Завод",
  depot: "Склад",
  infra: "Узел",
  hq: "Штаб",
  port: "Порт",
  airbase: "Аэродром",
};

export const STRIKE_LABEL: Record<StrikeKind, string> = {
  artillery: "Артиллерия",
  air: "Авиаудар",
  drone: "Дроны",
  missile: "Ракеты",
};

export const SPEED_STEPS = [0, 1, 3, 8, 24] as const;
export const SPEED_LABEL = ["Пауза", "1×", "3×", "8×", "сутки"] as const;
