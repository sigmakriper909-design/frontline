import type { CityDef, MapDef } from "../types";

const CITIES: CityDef[] = [
  { id: "kyiv", name: "Киев", x: 428, y: 198, assets: ["hq", "factory", "infra", "airbase"], fort: 3, victory: 6, population: 28, capitalOf: "ua" },
  { id: "kharkiv", name: "Харьков", x: 742, y: 214, assets: ["factory", "depot", "airbase"], fort: 2, victory: 4, population: 14 },
  { id: "odesa", name: "Одесса", x: 378, y: 568, assets: ["port", "factory", "depot"], fort: 2, victory: 3, population: 10 },
  { id: "dnipro", name: "Днепр", x: 618, y: 398, assets: ["factory", "infra"], fort: 2, victory: 3, population: 10 },
  { id: "lviv", name: "Львов", x: 132, y: 262, assets: ["factory", "depot", "airbase"], fort: 1, victory: 2, population: 8 },
  { id: "donetsk", name: "Донецк", x: 808, y: 428, assets: ["factory", "infra"], fort: 2, victory: 3, population: 9 },
  { id: "luhansk", name: "Луганск", x: 888, y: 352, assets: ["factory"], fort: 1, victory: 2, population: 4 },
  { id: "kherson", name: "Херсон", x: 548, y: 542, assets: ["port", "infra"], fort: 1, victory: 3, population: 3 },
  { id: "zaporizhzhia", name: "Запорожье", x: 648, y: 468, assets: ["factory", "infra"], fort: 2, victory: 3, population: 7 },
  { id: "mariupol", name: "Мариуполь", x: 768, y: 528, assets: ["port", "factory"], fort: 2, victory: 3, population: 4 },
  { id: "mykolaiv", name: "Николаев", x: 488, y: 532, assets: ["port", "factory"], fort: 1, victory: 2, population: 5 },
  { id: "sevastopol", name: "Севастополь", x: 538, y: 678, assets: ["port", "hq", "airbase"], fort: 3, victory: 3, population: 4, capitalOf: "ru" },
  { id: "simferopol", name: "Симферополь", x: 578, y: 648, assets: ["infra", "airbase"], fort: 1, victory: 2, population: 3 },
  { id: "chernihiv", name: "Чернигов", x: 498, y: 118, assets: ["depot"], fort: 1, victory: 1, population: 3 },
  { id: "sumy", name: "Сумы", x: 638, y: 148, assets: ["depot"], fort: 1, victory: 1, population: 3 },
  { id: "poltava", name: "Полтава", x: 612, y: 298, assets: ["infra"], fort: 1, victory: 0, population: 3 },
  { id: "vinnytsia", name: "Винница", x: 298, y: 348, assets: ["depot", "airbase"], fort: 1, victory: 0, population: 4 },
  { id: "zhytomyr", name: "Житомир", x: 338, y: 228, assets: ["depot"], fort: 0, victory: 0, population: 3 },
  { id: "kryvyi", name: "Кривой Рог", x: 538, y: 458, assets: ["factory"], fort: 1, victory: 1, population: 6 },
  { id: "cherkasy", name: "Черкассы", x: 508, y: 328, assets: ["infra"], fort: 0, victory: 0, population: 3 },
  { id: "melitopol", name: "Мелитополь", x: 678, y: 538, assets: ["infra", "depot"], fort: 1, victory: 2, population: 2 },
  { id: "berdiansk", name: "Бердянск", x: 728, y: 562, assets: ["port"], fort: 0, victory: 1, population: 1 },
  { id: "enerhodar", name: "Энергодар", x: 598, y: 508, assets: ["infra", "factory"], fort: 1, victory: 2, population: 1 },
  { id: "kramatorsk", name: "Краматорск", x: 772, y: 368, assets: ["factory"], fort: 1, victory: 2, population: 2 },
  { id: "bakhmut", name: "Бахмут", x: 798, y: 388, assets: [], fort: 2, victory: 1, population: 1 },
  { id: "izium", name: "Изюм", x: 722, y: 308, assets: ["infra"], fort: 1, victory: 1, population: 1 },
  { id: "kupiansk", name: "Купянск", x: 792, y: 268, assets: ["depot"], fort: 0, victory: 1, population: 1 },
  { id: "pokrovsk", name: "Покровск", x: 748, y: 408, assets: ["depot"], fort: 1, victory: 1, population: 1 },
  { id: "uzhhorod", name: "Ужгород", x: 48, y: 368, assets: ["depot"], fort: 0, victory: 0, population: 1 },
  { id: "ivano", name: "Ивано-Франковск", x: 118, y: 368, assets: ["infra"], fort: 0, victory: 0, population: 2 },
  { id: "rivne", name: "Ровно", x: 218, y: 188, assets: ["depot"], fort: 0, victory: 0, population: 2 },
  { id: "lutsk", name: "Луцк", x: 168, y: 158, assets: [], fort: 0, victory: 0, population: 2 },
  { id: "chernivtsi", name: "Черновцы", x: 168, y: 428, assets: [], fort: 0, victory: 0, population: 2 },
  { id: "kropyv", name: "Кропивницкий", x: 468, y: 418, assets: ["infra"], fort: 0, victory: 0, population: 2 },
  { id: "khml", name: "Хмельницкий", x: 228, y: 308, assets: ["depot"], fort: 0, victory: 0, population: 2 },
  { id: "ternopil", name: "Тернополь", x: 178, y: 308, assets: [], fort: 0, victory: 0, population: 2 },
  { id: "belgorod", name: "Белгород", x: 812, y: 148, assets: ["depot", "hq"], fort: 1, victory: 0, population: 3 },
  { id: "kursk", name: "Курск", x: 702, y: 58, assets: ["depot"], fort: 0, victory: 0, population: 3 },
  { id: "rostov", name: "Ростов", x: 918, y: 498, assets: ["depot", "factory"], fort: 1, victory: 0, population: 8 },
  { id: "gomel", name: "Гомель", x: 538, y: 38, assets: ["depot"], fort: 0, victory: 0, population: 3 },
];

export const UKRAINE_MAP: MapDef = {
  width: 1000,
  height: 720,
  land: [
    [
      40, 250, 70, 160, 140, 88, 250, 42, 380, 22, 520, 18, 650, 28, 760, 48, 860, 88, 940, 140, 985, 220, 995, 320, 980,
      410, 950, 490, 900, 545, 830, 575, 760, 585, 700, 595, 655, 615, 660, 670, 640, 710, 590, 708, 545, 670, 530, 625,
      500, 605, 430, 615, 350, 605, 270, 560, 200, 510, 140, 450, 90, 370, 55, 310,
    ],
    [250, 0, 720, 0, 740, 48, 250, 55],
    [920, 80, 1000, 70, 1000, 560, 900, 555, 930, 430, 960, 280],
  ],
  water: [
    [
      200, 620, 320, 640, 420, 655, 500, 650, 530, 640, 540, 720, 0, 720, 0, 600, 80, 580, 160, 590,
    ],
    [650, 590, 700, 600, 780, 590, 860, 570, 920, 575, 1000, 600, 1000, 720, 640, 720, 630, 650, 655, 615],
    [545, 655, 565, 690, 610, 700, 635, 675, 625, 640, 590, 630, 555, 640],
  ],
  rivers: [
    {
      width: 7,
      pts: [430, 20, 432, 90, 425, 160, 430, 210, 455, 270, 490, 330, 540, 370, 600, 400, 640, 450, 630, 500, 580, 535, 545, 575, 530, 620],
    },
    { width: 3, pts: [742, 214, 720, 260, 700, 310, 680, 360, 650, 400, 618, 398] },
    { width: 3, pts: [888, 352, 850, 380, 808, 428, 780, 480, 768, 528] },
  ],
  roads: [
    [132, 262, 218, 188, 338, 228, 428, 198, 498, 118, 638, 148, 742, 214, 812, 148],
    [428, 198, 508, 328, 618, 398, 648, 468, 548, 542, 488, 532, 378, 568],
    [742, 214, 722, 308, 772, 368, 808, 428, 768, 528],
    [132, 262, 178, 308, 298, 348, 468, 418, 538, 458, 648, 468],
    [538, 678, 578, 648, 548, 542, 678, 538, 768, 528, 918, 498],
    [428, 198, 612, 298, 742, 214],
    [40, 250, 132, 262, 168, 158],
  ],
  forests: [
    [260, 40, 520, 30, 560, 110, 480, 160, 300, 150, 230, 90],
    [80, 180, 200, 140, 250, 220, 140, 260, 70, 230],
  ],
  mountains: [
    [40, 300, 120, 280, 170, 360, 140, 430, 60, 400],
    [520, 640, 610, 630, 630, 690, 560, 700, 510, 670],
  ],
  cities: CITIES,
};

export const RU_STAGING = [
  [250, 0, 740, 0, 760, 70, 240, 78],
  [910, 90, 1000, 70, 1000, 560, 890, 545, 940, 300],
];

export const CRIMEA = [[520, 615, 655, 610, 650, 710, 530, 710, 510, 660]];

export const DONBAS_2022 = [[780, 300, 980, 260, 990, 470, 800, 510, 760, 400]];

export const SOUTH_CORRIDOR_2026 = [
  [530, 520, 800, 490, 860, 560, 700, 600, 540, 600, 520, 555],
];

export const DONBAS_2026 = [[730, 250, 990, 220, 995, 500, 760, 500, 710, 380, 740, 300]];
