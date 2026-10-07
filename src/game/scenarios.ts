import { AFGHAN_MAP, NORTH_AFG, SOUTH_AFG } from "./content/afghan";
import { GAZA_POLY, ISRAEL_CORE, LEBANON_POLY, LEVANT_MAP, WESTBANK } from "./content/levant";
import {
  CRIMEA,
  DONBAS_2022,
  DONBAS_2026,
  RU_STAGING,
  SOUTH_CORRIDOR_2026,
  UKRAINE_MAP,
} from "./content/ukraine";
import type { FactionDef, Scenario, UnitSeed } from "./types";

const RU: FactionDef = {
  id: "ru",
  name: "Россия",
  short: "ВС РФ",
  color: "#c9b8a0",
  fill: "#5a4038",
  supplyEdges: ["n", "e"],
};

const UA: FactionDef = {
  id: "ua",
  name: "Украина",
  short: "ВСУ",
  color: "#c5d0dc",
  fill: "#3a4a58",
  supplyEdges: ["w"],
};

const IL: FactionDef = {
  id: "il",
  name: "Израиль",
  short: "ЦАХАЛ",
  color: "#c5d0dc",
  fill: "#3a4a58",
  supplyEdges: ["w"],
};

const COAL: FactionDef = {
  id: "coal",
  name: "Коалиция",
  short: "КОАЛ",
  color: "#c9b8a0",
  fill: "#5a4038",
  supplyEdges: ["n", "e"],
};

const AFG: FactionDef = {
  id: "afg",
  name: "Сопротивление",
  short: "АФГ",
  color: "#c9b8a0",
  fill: "#4a4030",
  supplyEdges: ["s", "e"],
};

const UA_LAND = UKRAINE_MAP.land[0]!;

function u(
  faction: string,
  type: UnitSeed["type"],
  name: string,
  x: number,
  y: number,
  strength: number,
  elite = false,
): UnitSeed {
  return { faction, type, name, x, y, strength, elite };
}

export const SCENARIOS: Scenario[] = [
  {
    id: "ua2022",
    name: "Украина, февраль 2022",
    dateLabel: "24 февраля 2022",
    startHourStamp: "2022-02-24T04:00:00",
    blurb: "Многоосевое вторжение. Киев, Харьков, юг — три направления одновременно.",
    briefing:
      "Операция открывается с нескольких направлений: Беларусь, Белгород, Донбасс и Крым. Столица — главный политический приз, но снабжение северных колонн хрупкое. Города держатся укреплениями, а не линией на карте.",
    map: UKRAINE_MAP,
    factions: [RU, UA],
    startOwner: [
      { faction: "ua", polys: [UA_LAND] },
      { faction: "ru", polys: [...RU_STAGING, ...CRIMEA, ...DONBAS_2022] },
    ],
    units: [
      u("ru", "armor", "4 тд", 470, 42, 92),
      u("ru", "mech", "36 омсбр", 400, 48, 88),
      u("ru", "mech", "200 омсбр", 540, 40, 86),
      u("ru", "infantry", "76 дшд", 500, 55, 80, true),
      u("ru", "armor", "1 тп", 790, 150, 90),
      u("ru", "mech", "6 омсбр", 830, 190, 84),
      u("ru", "artillery", "120 абр", 860, 170, 78),
      u("ru", "armor", "150 мсд", 860, 380, 88),
      u("ru", "mech", "100 омсбр", 900, 340, 82),
      u("ru", "infantry", "1 АК", 840, 430, 80),
      u("ru", "armor", "58 А", 600, 660, 90),
      u("ru", "mech", "7 дшд", 560, 650, 84),
      u("ru", "mech", "19 мсд", 640, 640, 82),
      u("ru", "artillery", "8 А", 920, 480, 80),
      u("ua", "mech", "72 омбр", 430, 220, 78, true),
      u("ua", "infantry", "Киев", 428, 190, 74),
      u("ua", "armor", "1 отбр", 460, 250, 70),
      u("ua", "mech", "92 омбр", 720, 230, 76),
      u("ua", "infantry", "Харьков", 742, 200, 72),
      u("ua", "mech", "93 омбр", 760, 360, 80, true),
      u("ua", "infantry", "24 омбр", 790, 400, 74),
      u("ua", "mech", "28 омбр", 500, 500, 72),
      u("ua", "infantry", "Николаев", 488, 520, 68),
      u("ua", "mech", "59 омбр", 540, 520, 70),
      u("ua", "armor", "17 отбр", 600, 390, 68),
      u("ua", "infantry", "Одесса", 378, 555, 66),
      u("ua", "artillery", "26 абр", 500, 300, 70),
      u("ua", "mech", "80 одшбр", 250, 240, 64),
    ],
    fronts: [
      { name: "Северный", faction: "ru", anchors: [{ x: 360, y: 90 }, { x: 560, y: 80 }], order: "attack" },
      { name: "Харьковский", faction: "ru", anchors: [{ x: 760, y: 160 }, { x: 860, y: 230 }], order: "attack" },
      { name: "Донбасс", faction: "ru", anchors: [{ x: 800, y: 340 }, { x: 860, y: 460 }], order: "attack" },
      { name: "Крымский", faction: "ru", anchors: [{ x: 540, y: 600 }, { x: 680, y: 590 }], order: "attack" },
      { name: "Оборона Киева", faction: "ua", anchors: [{ x: 380, y: 160 }, { x: 500, y: 170 }], order: "defend" },
      { name: "Восток", faction: "ua", anchors: [{ x: 720, y: 280 }, { x: 780, y: 420 }], order: "defend" },
      { name: "Юг", faction: "ua", anchors: [{ x: 480, y: 520 }, { x: 620, y: 520 }], order: "hold" },
    ],
    events: [
      {
        id: "airfields",
        hour: 18,
        title: "Удары по аэродромам",
        body: "Первая волна ракет и авиации. Авиаресурс обеих сторон снижен, но удары продолжаются.",
      },
      {
        id: "north-stall",
        hour: 180,
        title: "Северные колонны выдыхаются",
        body: "Снабжение на белорусском направлении даёт сбой. Организация соединений севера падает.",
        effect: { faction: "ru", org: -12 },
      },
      {
        id: "regroup",
        hour: 720,
        title: "Перегруппировка",
        body: "Темп первых недель исчерпан. Стороны стягивают резервы и меняют акценты.",
        effect: { faction: "ru", manpower: 8, equipment: 10 },
      },
    ],
    timeLimitHours: 2160,
    durationHint: "до ~90 суток",
  },
  {
    id: "ua2026",
    name: "Украина, октябрь 2026",
    dateLabel: "октябрь 2026",
    startHourStamp: "2026-10-01T06:00:00",
    blurb: "Позиционная война. Укрепления, дроны, истощение. Каждый город — узел, а не флаг.",
    briefing:
      "Линия стабилизировалась: Донбасс, запорожское направление, левый берег Днепра, Крым. Обе армии измотаны. Решают склады, заводы и точечные удары, а не широкие стрелки на карте.",
    map: UKRAINE_MAP,
    factions: [RU, UA],
    startOwner: [
      { faction: "ua", polys: [UA_LAND] },
      { faction: "ru", polys: [...CRIMEA, ...SOUTH_CORRIDOR_2026, ...DONBAS_2026, RU_STAGING[1]!] },
    ],
    units: [
      u("ru", "mech", "8 А", 820, 360, 76),
      u("ru", "armor", "90 тд", 850, 400, 74),
      u("ru", "infantry", "1 АК", 800, 440, 72),
      u("ru", "mech", "51 А", 760, 480, 70),
      u("ru", "artillery", "Группа «Юг»", 700, 560, 78),
      u("ru", "mech", "18 А", 640, 580, 72),
      u("ru", "infantry", "Крым", 580, 650, 70),
      u("ru", "mech", "Купянск", 820, 250, 68),
      u("ru", "armor", "Изюм", 780, 300, 66),
      u("ru", "artillery", "Группа «Восток»", 900, 380, 74),
      u("ru", "infantry", "Мариуполь", 770, 530, 64),
      u("ua", "mech", "Харків", 730, 220, 74, true),
      u("ua", "infantry", "Купянск-З", 760, 250, 70),
      u("ua", "mech", "Краматорск", 750, 350, 76, true),
      u("ua", "infantry", "Покровск", 730, 400, 72),
      u("ua", "armor", "Запорожье", 640, 450, 70),
      u("ua", "mech", "Херсон", 530, 530, 72),
      u("ua", "infantry", "Николаев", 488, 520, 66),
      u("ua", "artillery", "ОТГ «Донецк»", 700, 360, 78),
      u("ua", "mech", "Днепр", 610, 390, 68),
      u("ua", "armor", "Резерв", 500, 300, 64),
      u("ua", "infantry", "Киев гарнизон", 428, 198, 60),
      u("ua", "mech", "Одесса", 378, 560, 62),
    ],
    fronts: [
      { name: "Купянск", faction: "ru", anchors: [{ x: 780, y: 240 }, { x: 840, y: 300 }], order: "attack" },
      { name: "Покровск", faction: "ru", anchors: [{ x: 760, y: 380 }, { x: 820, y: 440 }], order: "attack" },
      { name: "Запорожье", faction: "ru", anchors: [{ x: 640, y: 500 }, { x: 740, y: 530 }], order: "hold" },
      { name: "Херсон", faction: "ru", anchors: [{ x: 540, y: 560 }, { x: 640, y: 570 }], order: "defend" },
      { name: "Харьков", faction: "ua", anchors: [{ x: 720, y: 200 }, { x: 780, y: 260 }], order: "defend" },
      { name: "Донбасс", faction: "ua", anchors: [{ x: 720, y: 340 }, { x: 760, y: 430 }], order: "hold" },
      { name: "Юг", faction: "ua", anchors: [{ x: 520, y: 500 }, { x: 660, y: 490 }], order: "defend" },
    ],
    events: [
      {
        id: "drone-week",
        hour: 96,
        title: "Неделя дронов",
        body: "Массированные удары БПЛА по складам. Снабжение обеих сторон проседает.",
      },
      {
        id: "mud",
        hour: 480,
        title: "Распутица",
        body: "Грязь режет темп наступления. Бронетехника теряет подвижность вне дорог.",
      },
    ],
    timeLimitHours: 2160,
    durationHint: "до ~90 суток",
  },
  {
    id: "levant",
    name: "Левант",
    dateLabel: "оперативный сценарий",
    startHourStamp: "2024-10-08T06:00:00",
    blurb: "Израиль против коалиции севера и сектора. Авиация против плотности и ракет.",
    briefing:
      "Короткий театр: города — укреплённые районы, а не провинции. У Израиля преимущество в воздухе и ракетах, у коалиции — плотность в городе и удары с севера. Фронт — полоса, а не граница на бумаге.",
    map: LEVANT_MAP,
    factions: [IL, COAL],
    startOwner: [
      { faction: "il", polys: [...ISRAEL_CORE] },
      { faction: "coal", polys: [...GAZA_POLY, ...LEBANON_POLY, ...WESTBANK, [480, 80, 700, 80, 700, 500, 500, 500]] },
    ],
    units: [
      u("il", "armor", "162-я дивизия", 320, 400, 88, true),
      u("il", "mech", "36-я дивизия", 340, 330, 86, true),
      u("il", "infantry", "Газа-Север", 300, 500, 80),
      u("il", "infantry", "Газа-Юг", 300, 545, 78),
      u("il", "armor", "Север", 340, 260, 84),
      u("il", "artillery", "Огн. группа", 350, 430, 82),
      u("il", "mech", "Резерв", 330, 460, 76),
      u("il", "infantry", "Иерусалим", 368, 470, 74),
      u("coal", "infantry", "Газа I", 258, 528, 86, true),
      u("coal", "infantry", "Газа II", 250, 555, 82),
      u("coal", "infantry", "Хезболла-Юг", 330, 240, 84, true),
      u("coal", "mech", "Хезболла-Центр", 360, 200, 78),
      u("coal", "artillery", "Ракетная", 380, 220, 80),
      u("coal", "infantry", "Наблус", 385, 390, 70),
      u("coal", "infantry", "Рамалла", 372, 438, 68),
      u("coal", "mech", "Дамаск", 500, 300, 72),
      u("coal", "infantry", "Бейрут", 340, 168, 70),
    ],
    fronts: [
      { name: "Сектор", faction: "il", anchors: [{ x: 270, y: 500 }, { x: 290, y: 570 }], order: "attack" },
      { name: "Север", faction: "il", anchors: [{ x: 310, y: 250 }, { x: 380, y: 270 }], order: "defend" },
      { name: "Газа", faction: "coal", anchors: [{ x: 250, y: 510 }, { x: 270, y: 580 }], order: "hold" },
      { name: "Ливан", faction: "coal", anchors: [{ x: 320, y: 230 }, { x: 400, y: 250 }], order: "attack" },
    ],
    events: [
      {
        id: "rocket-salvo",
        hour: 12,
        title: "Ракетный удар",
        body: "Массированный обстрел тыловых узлов. Часть авиаресурса отвлечена на перехват.",
      },
      {
        id: "cease-pressure",
        hour: 360,
        title: "Внешнее давление",
        body: "Дипломатический фон ограничивает темп. Истощение растёт быстрее захватов.",
      },
    ],
    timeLimitHours: 1440,
    durationHint: "до ~60 суток",
  },
  {
    id: "afghan",
    name: "Афганистан (вымысел)",
    dateLabel: "условный год",
    startHourStamp: "2027-04-01T05:00:00",
    blurb: "Вымышленная операция. Северные равнины против гор. Снабжение важнее стрелок.",
    briefing:
      "Россия вводит войска с севера, чтобы закрепиться на востоке театра. Сопротивление держит горы и города-узлы. Это не провинции: контроль — это заводы, склады и перевалы. Снабжение через Термез — горловина всей операции.",
    map: AFGHAN_MAP,
    factions: [RU, AFG],
    startOwner: [
      { faction: "afg", polys: [...SOUTH_AFG, AFGHAN_MAP.land[0]!] },
      { faction: "ru", polys: NORTH_AFG },
    ],
    units: [
      u("ru", "mech", "201 бсс", 450, 60, 90),
      u("ru", "armor", "Группа «Север»", 500, 90, 88),
      u("ru", "infantry", "ВДВ", 470, 140, 84, true),
      u("ru", "mech", "Кундуз", 590, 130, 80),
      u("ru", "artillery", "Огн. группа", 430, 50, 82),
      u("ru", "armor", "Резерв Термез", 430, 40, 78),
      u("ru", "mech", "Герат-ось", 220, 180, 76),
      u("afg", "infantry", "Кабул", 620, 340, 86, true),
      u("afg", "infantry", "Панджшер", 680, 280, 80, true),
      u("afg", "mech", "Кандагар", 430, 560, 74),
      u("afg", "infantry", "Герат", 160, 340, 72),
      u("afg", "infantry", "Джелалабад", 760, 360, 78),
      u("afg", "artillery", "Горные", 540, 380, 70),
      u("afg", "infantry", "Газни", 560, 450, 68),
      u("afg", "infantry", "Гардез", 650, 430, 70),
      u("afg", "mech", "Юг", 300, 530, 64),
    ],
    fronts: [
      { name: "Мазар", faction: "ru", anchors: [{ x: 420, y: 160 }, { x: 560, y: 170 }], order: "attack" },
      { name: "Кундуз", faction: "ru", anchors: [{ x: 560, y: 150 }, { x: 680, y: 160 }], order: "attack" },
      { name: "Кабул", faction: "afg", anchors: [{ x: 540, y: 300 }, { x: 700, y: 300 }], order: "defend" },
      { name: "Запад", faction: "afg", anchors: [{ x: 180, y: 280 }, { x: 280, y: 360 }], order: "hold" },
    ],
    events: [
      {
        id: "pass",
        hour: 72,
        title: "Перевал закрыт",
        body: "Горная погода рвёт снабжение. Соединения вне дорог теряют организацию.",
      },
      {
        id: "guerrillas",
        hour: 240,
        title: "Новые отряды",
        body: "В горах появляются свежие группы сопротивления. Контроль дорог важнее городов.",
        effect: { faction: "afg", manpower: 12 },
      },
    ],
    timeLimitHours: 1920,
    durationHint: "до ~80 суток",
  },
];

export function scenarioById(id: string): Scenario | undefined {
  return SCENARIOS.find((s) => s.id === id);
}
