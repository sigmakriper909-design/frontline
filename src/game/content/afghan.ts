import type { CityDef, MapDef } from "../types";

const CITIES: CityDef[] = [
  { id: "kabul", name: "Кабул", x: 620, y: 340, assets: ["hq", "factory", "airbase", "infra"], fort: 2, victory: 6, population: 12, capitalOf: "afg" },
  { id: "kandahar", name: "Кандагар", x: 430, y: 560, assets: ["airbase", "depot", "factory"], fort: 1, victory: 4, population: 6 },
  { id: "herat", name: "Герат", x: 160, y: 340, assets: ["airbase", "depot"], fort: 1, victory: 3, population: 5 },
  { id: "mazar", name: "Мазари-Шариф", x: 470, y: 148, assets: ["airbase", "depot", "hq"], fort: 1, victory: 4, population: 5, capitalOf: "ru" },
  { id: "jalalabad", name: "Джелалабад", x: 760, y: 360, assets: ["depot"], fort: 1, victory: 2, population: 3 },
  { id: "kunduz", name: "Кундуз", x: 600, y: 140, assets: ["depot"], fort: 1, victory: 2, population: 3 },
  { id: "ghazni", name: "Газни", x: 560, y: 450, assets: ["infra"], fort: 1, victory: 1, population: 2 },
  { id: "bamiyan", name: "Бамиан", x: 500, y: 320, assets: [], fort: 0, victory: 0, population: 1 },
  { id: "farah", name: "Фарах", x: 150, y: 470, assets: ["depot"], fort: 0, victory: 1, population: 1 },
  { id: "lashkar", name: "Лашкаргах", x: 300, y: 530, assets: [], fort: 0, victory: 1, population: 1 },
  { id: "faizabad", name: "Файзабад", x: 740, y: 120, assets: [], fort: 0, victory: 1, population: 1 },
  { id: "gardez", name: "Гардез", x: 650, y: 430, assets: [], fort: 1, victory: 1, population: 1 },
  { id: "termez", name: "Термез", x: 430, y: 40, assets: ["depot", "hq", "airbase"], fort: 1, victory: 0, population: 3 },
  { id: "hairatan", name: "Хайратон", x: 490, y: 78, assets: ["depot", "infra"], fort: 0, victory: 0, population: 1 },
];

export const AFGHAN_MAP: MapDef = {
  width: 1000,
  height: 720,
  land: [
    [
      40, 80, 200, 30, 420, 10, 650, 20, 840, 50, 960, 120, 990, 240, 970, 380, 900, 500, 780, 600, 620, 680, 420, 700,
      240, 660, 80, 560, 20, 400, 15, 240, 30, 140,
    ],
  ],
  water: [],
  rivers: [
    { width: 4, pts: [430, 10, 470, 80, 520, 140, 600, 180, 680, 220, 760, 280, 820, 340, 900, 400] },
    { width: 3, pts: [160, 340, 240, 360, 320, 400, 400, 470, 430, 560] },
  ],
  roads: [
    [430, 40, 490, 78, 470, 148, 600, 140, 620, 340, 760, 360],
    [160, 340, 500, 320, 620, 340, 560, 450, 430, 560],
    [470, 148, 500, 320, 430, 560, 300, 530, 150, 470, 160, 340],
    [620, 340, 650, 430, 560, 450],
    [740, 120, 600, 140],
  ],
  forests: [[520, 240, 680, 220, 720, 320, 620, 360, 520, 320]],
  mountains: [
    [180, 180, 520, 120, 700, 160, 820, 260, 760, 360, 520, 380, 300, 340, 180, 260],
    [200, 400, 380, 380, 500, 460, 480, 560, 300, 580, 180, 500],
    [640, 380, 860, 340, 920, 460, 800, 560, 640, 520],
  ],
  cities: CITIES,
};

export const NORTH_AFG = [[200, 10, 820, 20, 840, 180, 470, 200, 200, 140]];
export const SOUTH_AFG = [[80, 400, 900, 380, 920, 680, 200, 690, 60, 540]];
