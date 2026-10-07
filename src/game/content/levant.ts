import type { CityDef, MapDef } from "../types";

const CITIES: CityDef[] = [
  { id: "telaviv", name: "Тель-Авив", x: 310, y: 430, assets: ["hq", "port", "factory", "airbase"], fort: 2, victory: 5, population: 12, capitalOf: "il" },
  { id: "jerusalem", name: "Иерусалим", x: 368, y: 470, assets: ["hq", "infra"], fort: 3, victory: 5, population: 8 },
  { id: "haifa", name: "Хайфа", x: 318, y: 300, assets: ["port", "factory", "airbase"], fort: 2, victory: 3, population: 6 },
  { id: "beersheba", name: "Беэр-Шева", x: 330, y: 560, assets: ["airbase", "depot"], fort: 1, victory: 2, population: 3 },
  { id: "ashkelon", name: "Ашкелон", x: 292, y: 500, assets: ["port"], fort: 1, victory: 1, population: 2 },
  { id: "ashdod", name: "Ашдод", x: 298, y: 470, assets: ["port"], fort: 1, victory: 1, population: 2 },
  { id: "nazereth", name: "Назарет", x: 360, y: 322, assets: ["infra"], fort: 1, victory: 1, population: 2 },
  { id: "gaza", name: "Газа", x: 258, y: 528, assets: ["infra", "depot"], fort: 3, victory: 4, population: 6, capitalOf: "coal" },
  { id: "rafah", name: "Рафах", x: 248, y: 575, assets: ["depot"], fort: 2, victory: 2, population: 2 },
  { id: "khan", name: "Хан-Юнис", x: 252, y: 552, assets: [], fort: 2, victory: 1, population: 2 },
  { id: "ramallah", name: "Рамалла", x: 372, y: 438, assets: ["infra"], fort: 1, victory: 2, population: 2 },
  { id: "nablus", name: "Наблус", x: 385, y: 390, assets: [], fort: 1, victory: 1, population: 2 },
  { id: "hebron", name: "Хеврон", x: 358, y: 520, assets: [], fort: 1, victory: 1, population: 2 },
  { id: "beirut", name: "Бейрут", x: 340, y: 168, assets: ["port", "hq", "factory"], fort: 2, victory: 4, population: 8 },
  { id: "tyre", name: "Тир", x: 322, y: 238, assets: ["port"], fort: 2, victory: 2, population: 2 },
  { id: "sidon", name: "Сайда", x: 332, y: 202, assets: ["port"], fort: 1, victory: 1, population: 2 },
  { id: "nabatieh", name: "Набатия", x: 368, y: 242, assets: ["depot"], fort: 2, victory: 2, population: 1 },
  { id: "baalbek", name: "Баальбек", x: 420, y: 168, assets: ["depot"], fort: 1, victory: 1, population: 1 },
  { id: "damascus", name: "Дамаск", x: 520, y: 300, assets: ["hq", "factory", "airbase"], fort: 2, victory: 3, population: 10 },
  { id: "golan", name: "Голаны", x: 430, y: 280, assets: ["infra"], fort: 3, victory: 2, population: 0 },
];

export const LEVANT_MAP: MapDef = {
  width: 1000,
  height: 720,
  land: [
    [
      220, 80, 280, 40, 420, 30, 560, 60, 640, 140, 680, 260, 700, 400, 660, 540, 580, 640, 460, 700, 300, 710, 180, 640,
      160, 520, 175, 400, 190, 260, 200, 150,
    ],
  ],
  water: [[0, 0, 240, 0, 250, 80, 210, 200, 185, 360, 170, 520, 190, 680, 0, 720]],
  rivers: [{ width: 3, pts: [430, 280, 400, 340, 380, 400, 370, 470, 350, 540, 330, 610] }],
  roads: [
    [340, 168, 332, 202, 322, 238, 318, 300, 310, 430, 298, 470, 292, 500, 258, 528],
    [310, 430, 368, 470, 358, 520, 330, 560],
    [318, 300, 360, 322, 430, 280, 520, 300],
    [368, 470, 372, 438, 385, 390, 360, 322],
    [340, 168, 420, 168, 520, 300],
  ],
  forests: [
    [300, 120, 400, 90, 430, 180, 360, 220, 300, 190],
    [380, 250, 470, 240, 490, 320, 420, 340],
  ],
  mountains: [
    [360, 60, 500, 50, 540, 160, 480, 230, 390, 180],
    [400, 260, 520, 250, 540, 360, 450, 380, 390, 320],
    [300, 540, 420, 530, 450, 640, 340, 670, 280, 610],
  ],
  cities: CITIES,
};

export const ISRAEL_CORE = [
  [250, 280, 360, 260, 400, 360, 390, 520, 330, 610, 250, 590, 230, 430, 240, 330],
];

export const GAZA_POLY = [[230, 500, 280, 500, 285, 590, 235, 600]];

export const LEBANON_POLY = [[250, 40, 480, 30, 500, 230, 320, 260, 250, 180]];

export const WESTBANK = [[350, 360, 420, 350, 430, 520, 350, 530]];
