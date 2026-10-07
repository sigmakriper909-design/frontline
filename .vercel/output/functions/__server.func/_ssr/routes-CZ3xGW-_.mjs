import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, c as Pause, d as ChevronsUp, f as ChevronRight, i as Rocket, l as Factory, o as Play, p as ArrowLeft, r as Target, s as Plane, t as X, u as Crosshair } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CZ3xGW-_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AFGHAN_MAP = {
	width: 1e3,
	height: 720,
	land: [[
		40,
		80,
		200,
		30,
		420,
		10,
		650,
		20,
		840,
		50,
		960,
		120,
		990,
		240,
		970,
		380,
		900,
		500,
		780,
		600,
		620,
		680,
		420,
		700,
		240,
		660,
		80,
		560,
		20,
		400,
		15,
		240,
		30,
		140
	]],
	water: [],
	rivers: [{
		width: 4,
		pts: [
			430,
			10,
			470,
			80,
			520,
			140,
			600,
			180,
			680,
			220,
			760,
			280,
			820,
			340,
			900,
			400
		]
	}, {
		width: 3,
		pts: [
			160,
			340,
			240,
			360,
			320,
			400,
			400,
			470,
			430,
			560
		]
	}],
	roads: [
		[
			430,
			40,
			490,
			78,
			470,
			148,
			600,
			140,
			620,
			340,
			760,
			360
		],
		[
			160,
			340,
			500,
			320,
			620,
			340,
			560,
			450,
			430,
			560
		],
		[
			470,
			148,
			500,
			320,
			430,
			560,
			300,
			530,
			150,
			470,
			160,
			340
		],
		[
			620,
			340,
			650,
			430,
			560,
			450
		],
		[
			740,
			120,
			600,
			140
		]
	],
	forests: [[
		520,
		240,
		680,
		220,
		720,
		320,
		620,
		360,
		520,
		320
	]],
	mountains: [
		[
			180,
			180,
			520,
			120,
			700,
			160,
			820,
			260,
			760,
			360,
			520,
			380,
			300,
			340,
			180,
			260
		],
		[
			200,
			400,
			380,
			380,
			500,
			460,
			480,
			560,
			300,
			580,
			180,
			500
		],
		[
			640,
			380,
			860,
			340,
			920,
			460,
			800,
			560,
			640,
			520
		]
	],
	cities: [
		{
			id: "kabul",
			name: "Кабул",
			x: 620,
			y: 340,
			assets: [
				"hq",
				"factory",
				"airbase",
				"infra"
			],
			fort: 2,
			victory: 6,
			population: 12,
			capitalOf: "afg"
		},
		{
			id: "kandahar",
			name: "Кандагар",
			x: 430,
			y: 560,
			assets: [
				"airbase",
				"depot",
				"factory"
			],
			fort: 1,
			victory: 4,
			population: 6
		},
		{
			id: "herat",
			name: "Герат",
			x: 160,
			y: 340,
			assets: ["airbase", "depot"],
			fort: 1,
			victory: 3,
			population: 5
		},
		{
			id: "mazar",
			name: "Мазари-Шариф",
			x: 470,
			y: 148,
			assets: [
				"airbase",
				"depot",
				"hq"
			],
			fort: 1,
			victory: 4,
			population: 5,
			capitalOf: "ru"
		},
		{
			id: "jalalabad",
			name: "Джелалабад",
			x: 760,
			y: 360,
			assets: ["depot"],
			fort: 1,
			victory: 2,
			population: 3
		},
		{
			id: "kunduz",
			name: "Кундуз",
			x: 600,
			y: 140,
			assets: ["depot"],
			fort: 1,
			victory: 2,
			population: 3
		},
		{
			id: "ghazni",
			name: "Газни",
			x: 560,
			y: 450,
			assets: ["infra"],
			fort: 1,
			victory: 1,
			population: 2
		},
		{
			id: "bamiyan",
			name: "Бамиан",
			x: 500,
			y: 320,
			assets: [],
			fort: 0,
			victory: 0,
			population: 1
		},
		{
			id: "farah",
			name: "Фарах",
			x: 150,
			y: 470,
			assets: ["depot"],
			fort: 0,
			victory: 1,
			population: 1
		},
		{
			id: "lashkar",
			name: "Лашкаргах",
			x: 300,
			y: 530,
			assets: [],
			fort: 0,
			victory: 1,
			population: 1
		},
		{
			id: "faizabad",
			name: "Файзабад",
			x: 740,
			y: 120,
			assets: [],
			fort: 0,
			victory: 1,
			population: 1
		},
		{
			id: "gardez",
			name: "Гардез",
			x: 650,
			y: 430,
			assets: [],
			fort: 1,
			victory: 1,
			population: 1
		},
		{
			id: "termez",
			name: "Термез",
			x: 430,
			y: 40,
			assets: [
				"depot",
				"hq",
				"airbase"
			],
			fort: 1,
			victory: 0,
			population: 3
		},
		{
			id: "hairatan",
			name: "Хайратон",
			x: 490,
			y: 78,
			assets: ["depot", "infra"],
			fort: 0,
			victory: 0,
			population: 1
		}
	]
};
var NORTH_AFG = [[
	200,
	10,
	820,
	20,
	840,
	180,
	470,
	200,
	200,
	140
]];
var SOUTH_AFG = [[
	80,
	400,
	900,
	380,
	920,
	680,
	200,
	690,
	60,
	540
]];
var LEVANT_MAP = {
	width: 1e3,
	height: 720,
	land: [[
		220,
		80,
		280,
		40,
		420,
		30,
		560,
		60,
		640,
		140,
		680,
		260,
		700,
		400,
		660,
		540,
		580,
		640,
		460,
		700,
		300,
		710,
		180,
		640,
		160,
		520,
		175,
		400,
		190,
		260,
		200,
		150
	]],
	water: [[
		0,
		0,
		240,
		0,
		250,
		80,
		210,
		200,
		185,
		360,
		170,
		520,
		190,
		680,
		0,
		720
	]],
	rivers: [{
		width: 3,
		pts: [
			430,
			280,
			400,
			340,
			380,
			400,
			370,
			470,
			350,
			540,
			330,
			610
		]
	}],
	roads: [
		[
			340,
			168,
			332,
			202,
			322,
			238,
			318,
			300,
			310,
			430,
			298,
			470,
			292,
			500,
			258,
			528
		],
		[
			310,
			430,
			368,
			470,
			358,
			520,
			330,
			560
		],
		[
			318,
			300,
			360,
			322,
			430,
			280,
			520,
			300
		],
		[
			368,
			470,
			372,
			438,
			385,
			390,
			360,
			322
		],
		[
			340,
			168,
			420,
			168,
			520,
			300
		]
	],
	forests: [[
		300,
		120,
		400,
		90,
		430,
		180,
		360,
		220,
		300,
		190
	], [
		380,
		250,
		470,
		240,
		490,
		320,
		420,
		340
	]],
	mountains: [
		[
			360,
			60,
			500,
			50,
			540,
			160,
			480,
			230,
			390,
			180
		],
		[
			400,
			260,
			520,
			250,
			540,
			360,
			450,
			380,
			390,
			320
		],
		[
			300,
			540,
			420,
			530,
			450,
			640,
			340,
			670,
			280,
			610
		]
	],
	cities: [
		{
			id: "telaviv",
			name: "Тель-Авив",
			x: 310,
			y: 430,
			assets: [
				"hq",
				"port",
				"factory",
				"airbase"
			],
			fort: 2,
			victory: 5,
			population: 12,
			capitalOf: "il"
		},
		{
			id: "jerusalem",
			name: "Иерусалим",
			x: 368,
			y: 470,
			assets: ["hq", "infra"],
			fort: 3,
			victory: 5,
			population: 8
		},
		{
			id: "haifa",
			name: "Хайфа",
			x: 318,
			y: 300,
			assets: [
				"port",
				"factory",
				"airbase"
			],
			fort: 2,
			victory: 3,
			population: 6
		},
		{
			id: "beersheba",
			name: "Беэр-Шева",
			x: 330,
			y: 560,
			assets: ["airbase", "depot"],
			fort: 1,
			victory: 2,
			population: 3
		},
		{
			id: "ashkelon",
			name: "Ашкелон",
			x: 292,
			y: 500,
			assets: ["port"],
			fort: 1,
			victory: 1,
			population: 2
		},
		{
			id: "ashdod",
			name: "Ашдод",
			x: 298,
			y: 470,
			assets: ["port"],
			fort: 1,
			victory: 1,
			population: 2
		},
		{
			id: "nazereth",
			name: "Назарет",
			x: 360,
			y: 322,
			assets: ["infra"],
			fort: 1,
			victory: 1,
			population: 2
		},
		{
			id: "gaza",
			name: "Газа",
			x: 258,
			y: 528,
			assets: ["infra", "depot"],
			fort: 3,
			victory: 4,
			population: 6,
			capitalOf: "coal"
		},
		{
			id: "rafah",
			name: "Рафах",
			x: 248,
			y: 575,
			assets: ["depot"],
			fort: 2,
			victory: 2,
			population: 2
		},
		{
			id: "khan",
			name: "Хан-Юнис",
			x: 252,
			y: 552,
			assets: [],
			fort: 2,
			victory: 1,
			population: 2
		},
		{
			id: "ramallah",
			name: "Рамалла",
			x: 372,
			y: 438,
			assets: ["infra"],
			fort: 1,
			victory: 2,
			population: 2
		},
		{
			id: "nablus",
			name: "Наблус",
			x: 385,
			y: 390,
			assets: [],
			fort: 1,
			victory: 1,
			population: 2
		},
		{
			id: "hebron",
			name: "Хеврон",
			x: 358,
			y: 520,
			assets: [],
			fort: 1,
			victory: 1,
			population: 2
		},
		{
			id: "beirut",
			name: "Бейрут",
			x: 340,
			y: 168,
			assets: [
				"port",
				"hq",
				"factory"
			],
			fort: 2,
			victory: 4,
			population: 8
		},
		{
			id: "tyre",
			name: "Тир",
			x: 322,
			y: 238,
			assets: ["port"],
			fort: 2,
			victory: 2,
			population: 2
		},
		{
			id: "sidon",
			name: "Сайда",
			x: 332,
			y: 202,
			assets: ["port"],
			fort: 1,
			victory: 1,
			population: 2
		},
		{
			id: "nabatieh",
			name: "Набатия",
			x: 368,
			y: 242,
			assets: ["depot"],
			fort: 2,
			victory: 2,
			population: 1
		},
		{
			id: "baalbek",
			name: "Баальбек",
			x: 420,
			y: 168,
			assets: ["depot"],
			fort: 1,
			victory: 1,
			population: 1
		},
		{
			id: "damascus",
			name: "Дамаск",
			x: 520,
			y: 300,
			assets: [
				"hq",
				"factory",
				"airbase"
			],
			fort: 2,
			victory: 3,
			population: 10
		},
		{
			id: "golan",
			name: "Голаны",
			x: 430,
			y: 280,
			assets: ["infra"],
			fort: 3,
			victory: 2,
			population: 0
		}
	]
};
var ISRAEL_CORE = [[
	250,
	280,
	360,
	260,
	400,
	360,
	390,
	520,
	330,
	610,
	250,
	590,
	230,
	430,
	240,
	330
]];
var GAZA_POLY = [[
	230,
	500,
	280,
	500,
	285,
	590,
	235,
	600
]];
var LEBANON_POLY = [[
	250,
	40,
	480,
	30,
	500,
	230,
	320,
	260,
	250,
	180
]];
var WESTBANK = [[
	350,
	360,
	420,
	350,
	430,
	520,
	350,
	530
]];
var UKRAINE_MAP = {
	width: 1e3,
	height: 720,
	land: [
		[
			40,
			250,
			70,
			160,
			140,
			88,
			250,
			42,
			380,
			22,
			520,
			18,
			650,
			28,
			760,
			48,
			860,
			88,
			940,
			140,
			985,
			220,
			995,
			320,
			980,
			410,
			950,
			490,
			900,
			545,
			830,
			575,
			760,
			585,
			700,
			595,
			655,
			615,
			660,
			670,
			640,
			710,
			590,
			708,
			545,
			670,
			530,
			625,
			500,
			605,
			430,
			615,
			350,
			605,
			270,
			560,
			200,
			510,
			140,
			450,
			90,
			370,
			55,
			310
		],
		[
			250,
			0,
			720,
			0,
			740,
			48,
			250,
			55
		],
		[
			920,
			80,
			1e3,
			70,
			1e3,
			560,
			900,
			555,
			930,
			430,
			960,
			280
		]
	],
	water: [
		[
			200,
			620,
			320,
			640,
			420,
			655,
			500,
			650,
			530,
			640,
			540,
			720,
			0,
			720,
			0,
			600,
			80,
			580,
			160,
			590
		],
		[
			650,
			590,
			700,
			600,
			780,
			590,
			860,
			570,
			920,
			575,
			1e3,
			600,
			1e3,
			720,
			640,
			720,
			630,
			650,
			655,
			615
		],
		[
			545,
			655,
			565,
			690,
			610,
			700,
			635,
			675,
			625,
			640,
			590,
			630,
			555,
			640
		]
	],
	rivers: [
		{
			width: 7,
			pts: [
				430,
				20,
				432,
				90,
				425,
				160,
				430,
				210,
				455,
				270,
				490,
				330,
				540,
				370,
				600,
				400,
				640,
				450,
				630,
				500,
				580,
				535,
				545,
				575,
				530,
				620
			]
		},
		{
			width: 3,
			pts: [
				742,
				214,
				720,
				260,
				700,
				310,
				680,
				360,
				650,
				400,
				618,
				398
			]
		},
		{
			width: 3,
			pts: [
				888,
				352,
				850,
				380,
				808,
				428,
				780,
				480,
				768,
				528
			]
		}
	],
	roads: [
		[
			132,
			262,
			218,
			188,
			338,
			228,
			428,
			198,
			498,
			118,
			638,
			148,
			742,
			214,
			812,
			148
		],
		[
			428,
			198,
			508,
			328,
			618,
			398,
			648,
			468,
			548,
			542,
			488,
			532,
			378,
			568
		],
		[
			742,
			214,
			722,
			308,
			772,
			368,
			808,
			428,
			768,
			528
		],
		[
			132,
			262,
			178,
			308,
			298,
			348,
			468,
			418,
			538,
			458,
			648,
			468
		],
		[
			538,
			678,
			578,
			648,
			548,
			542,
			678,
			538,
			768,
			528,
			918,
			498
		],
		[
			428,
			198,
			612,
			298,
			742,
			214
		],
		[
			40,
			250,
			132,
			262,
			168,
			158
		]
	],
	forests: [[
		260,
		40,
		520,
		30,
		560,
		110,
		480,
		160,
		300,
		150,
		230,
		90
	], [
		80,
		180,
		200,
		140,
		250,
		220,
		140,
		260,
		70,
		230
	]],
	mountains: [[
		40,
		300,
		120,
		280,
		170,
		360,
		140,
		430,
		60,
		400
	], [
		520,
		640,
		610,
		630,
		630,
		690,
		560,
		700,
		510,
		670
	]],
	cities: [
		{
			id: "kyiv",
			name: "Киев",
			x: 428,
			y: 198,
			assets: [
				"hq",
				"factory",
				"infra",
				"airbase"
			],
			fort: 3,
			victory: 6,
			population: 28,
			capitalOf: "ua"
		},
		{
			id: "kharkiv",
			name: "Харьков",
			x: 742,
			y: 214,
			assets: [
				"factory",
				"depot",
				"airbase"
			],
			fort: 2,
			victory: 4,
			population: 14
		},
		{
			id: "odesa",
			name: "Одесса",
			x: 378,
			y: 568,
			assets: [
				"port",
				"factory",
				"depot"
			],
			fort: 2,
			victory: 3,
			population: 10
		},
		{
			id: "dnipro",
			name: "Днепр",
			x: 618,
			y: 398,
			assets: ["factory", "infra"],
			fort: 2,
			victory: 3,
			population: 10
		},
		{
			id: "lviv",
			name: "Львов",
			x: 132,
			y: 262,
			assets: [
				"factory",
				"depot",
				"airbase"
			],
			fort: 1,
			victory: 2,
			population: 8
		},
		{
			id: "donetsk",
			name: "Донецк",
			x: 808,
			y: 428,
			assets: ["factory", "infra"],
			fort: 2,
			victory: 3,
			population: 9
		},
		{
			id: "luhansk",
			name: "Луганск",
			x: 888,
			y: 352,
			assets: ["factory"],
			fort: 1,
			victory: 2,
			population: 4
		},
		{
			id: "kherson",
			name: "Херсон",
			x: 548,
			y: 542,
			assets: ["port", "infra"],
			fort: 1,
			victory: 3,
			population: 3
		},
		{
			id: "zaporizhzhia",
			name: "Запорожье",
			x: 648,
			y: 468,
			assets: ["factory", "infra"],
			fort: 2,
			victory: 3,
			population: 7
		},
		{
			id: "mariupol",
			name: "Мариуполь",
			x: 768,
			y: 528,
			assets: ["port", "factory"],
			fort: 2,
			victory: 3,
			population: 4
		},
		{
			id: "mykolaiv",
			name: "Николаев",
			x: 488,
			y: 532,
			assets: ["port", "factory"],
			fort: 1,
			victory: 2,
			population: 5
		},
		{
			id: "sevastopol",
			name: "Севастополь",
			x: 538,
			y: 678,
			assets: [
				"port",
				"hq",
				"airbase"
			],
			fort: 3,
			victory: 3,
			population: 4,
			capitalOf: "ru"
		},
		{
			id: "simferopol",
			name: "Симферополь",
			x: 578,
			y: 648,
			assets: ["infra", "airbase"],
			fort: 1,
			victory: 2,
			population: 3
		},
		{
			id: "chernihiv",
			name: "Чернигов",
			x: 498,
			y: 118,
			assets: ["depot"],
			fort: 1,
			victory: 1,
			population: 3
		},
		{
			id: "sumy",
			name: "Сумы",
			x: 638,
			y: 148,
			assets: ["depot"],
			fort: 1,
			victory: 1,
			population: 3
		},
		{
			id: "poltava",
			name: "Полтава",
			x: 612,
			y: 298,
			assets: ["infra"],
			fort: 1,
			victory: 0,
			population: 3
		},
		{
			id: "vinnytsia",
			name: "Винница",
			x: 298,
			y: 348,
			assets: ["depot", "airbase"],
			fort: 1,
			victory: 0,
			population: 4
		},
		{
			id: "zhytomyr",
			name: "Житомир",
			x: 338,
			y: 228,
			assets: ["depot"],
			fort: 0,
			victory: 0,
			population: 3
		},
		{
			id: "kryvyi",
			name: "Кривой Рог",
			x: 538,
			y: 458,
			assets: ["factory"],
			fort: 1,
			victory: 1,
			population: 6
		},
		{
			id: "cherkasy",
			name: "Черкассы",
			x: 508,
			y: 328,
			assets: ["infra"],
			fort: 0,
			victory: 0,
			population: 3
		},
		{
			id: "melitopol",
			name: "Мелитополь",
			x: 678,
			y: 538,
			assets: ["infra", "depot"],
			fort: 1,
			victory: 2,
			population: 2
		},
		{
			id: "berdiansk",
			name: "Бердянск",
			x: 728,
			y: 562,
			assets: ["port"],
			fort: 0,
			victory: 1,
			population: 1
		},
		{
			id: "enerhodar",
			name: "Энергодар",
			x: 598,
			y: 508,
			assets: ["infra", "factory"],
			fort: 1,
			victory: 2,
			population: 1
		},
		{
			id: "kramatorsk",
			name: "Краматорск",
			x: 772,
			y: 368,
			assets: ["factory"],
			fort: 1,
			victory: 2,
			population: 2
		},
		{
			id: "bakhmut",
			name: "Бахмут",
			x: 798,
			y: 388,
			assets: [],
			fort: 2,
			victory: 1,
			population: 1
		},
		{
			id: "izium",
			name: "Изюм",
			x: 722,
			y: 308,
			assets: ["infra"],
			fort: 1,
			victory: 1,
			population: 1
		},
		{
			id: "kupiansk",
			name: "Купянск",
			x: 792,
			y: 268,
			assets: ["depot"],
			fort: 0,
			victory: 1,
			population: 1
		},
		{
			id: "pokrovsk",
			name: "Покровск",
			x: 748,
			y: 408,
			assets: ["depot"],
			fort: 1,
			victory: 1,
			population: 1
		},
		{
			id: "uzhhorod",
			name: "Ужгород",
			x: 48,
			y: 368,
			assets: ["depot"],
			fort: 0,
			victory: 0,
			population: 1
		},
		{
			id: "ivano",
			name: "Ивано-Франковск",
			x: 118,
			y: 368,
			assets: ["infra"],
			fort: 0,
			victory: 0,
			population: 2
		},
		{
			id: "rivne",
			name: "Ровно",
			x: 218,
			y: 188,
			assets: ["depot"],
			fort: 0,
			victory: 0,
			population: 2
		},
		{
			id: "lutsk",
			name: "Луцк",
			x: 168,
			y: 158,
			assets: [],
			fort: 0,
			victory: 0,
			population: 2
		},
		{
			id: "chernivtsi",
			name: "Черновцы",
			x: 168,
			y: 428,
			assets: [],
			fort: 0,
			victory: 0,
			population: 2
		},
		{
			id: "kropyv",
			name: "Кропивницкий",
			x: 468,
			y: 418,
			assets: ["infra"],
			fort: 0,
			victory: 0,
			population: 2
		},
		{
			id: "khml",
			name: "Хмельницкий",
			x: 228,
			y: 308,
			assets: ["depot"],
			fort: 0,
			victory: 0,
			population: 2
		},
		{
			id: "ternopil",
			name: "Тернополь",
			x: 178,
			y: 308,
			assets: [],
			fort: 0,
			victory: 0,
			population: 2
		},
		{
			id: "belgorod",
			name: "Белгород",
			x: 812,
			y: 148,
			assets: ["depot", "hq"],
			fort: 1,
			victory: 0,
			population: 3
		},
		{
			id: "kursk",
			name: "Курск",
			x: 702,
			y: 58,
			assets: ["depot"],
			fort: 0,
			victory: 0,
			population: 3
		},
		{
			id: "rostov",
			name: "Ростов",
			x: 918,
			y: 498,
			assets: ["depot", "factory"],
			fort: 1,
			victory: 0,
			population: 8
		},
		{
			id: "gomel",
			name: "Гомель",
			x: 538,
			y: 38,
			assets: ["depot"],
			fort: 0,
			victory: 0,
			population: 3
		}
	]
};
var RU_STAGING = [[
	250,
	0,
	740,
	0,
	760,
	70,
	240,
	78
], [
	910,
	90,
	1e3,
	70,
	1e3,
	560,
	890,
	545,
	940,
	300
]];
var CRIMEA = [[
	520,
	615,
	655,
	610,
	650,
	710,
	530,
	710,
	510,
	660
]];
var DONBAS_2022 = [[
	780,
	300,
	980,
	260,
	990,
	470,
	800,
	510,
	760,
	400
]];
var SOUTH_CORRIDOR_2026 = [[
	530,
	520,
	800,
	490,
	860,
	560,
	700,
	600,
	540,
	600,
	520,
	555
]];
var DONBAS_2026 = [[
	730,
	250,
	990,
	220,
	995,
	500,
	760,
	500,
	710,
	380,
	740,
	300
]];
var RU = {
	id: "ru",
	name: "Россия",
	short: "ВС РФ",
	color: "#c9b8a0",
	fill: "#5a4038",
	supplyEdges: ["n", "e"]
};
var UA = {
	id: "ua",
	name: "Украина",
	short: "ВСУ",
	color: "#c5d0dc",
	fill: "#3a4a58",
	supplyEdges: ["w"]
};
var IL = {
	id: "il",
	name: "Израиль",
	short: "ЦАХАЛ",
	color: "#c5d0dc",
	fill: "#3a4a58",
	supplyEdges: ["w"]
};
var COAL = {
	id: "coal",
	name: "Коалиция",
	short: "КОАЛ",
	color: "#c9b8a0",
	fill: "#5a4038",
	supplyEdges: ["n", "e"]
};
var AFG = {
	id: "afg",
	name: "Сопротивление",
	short: "АФГ",
	color: "#c9b8a0",
	fill: "#4a4030",
	supplyEdges: ["s", "e"]
};
var UA_LAND = UKRAINE_MAP.land[0];
function u(faction, type, name, x, y, strength, elite = false) {
	return {
		faction,
		type,
		name,
		x,
		y,
		strength,
		elite
	};
}
var SCENARIOS = [
	{
		id: "ua2022",
		name: "Украина, февраль 2022",
		dateLabel: "24 февраля 2022",
		startHourStamp: "2022-02-24T04:00:00",
		blurb: "Многоосевое вторжение. Киев, Харьков, юг — три направления одновременно.",
		briefing: "Операция открывается с нескольких направлений: Беларусь, Белгород, Донбасс и Крым. Столица — главный политический приз, но снабжение северных колонн хрупкое. Города держатся укреплениями, а не линией на карте.",
		map: UKRAINE_MAP,
		factions: [RU, UA],
		startOwner: [{
			faction: "ua",
			polys: [UA_LAND]
		}, {
			faction: "ru",
			polys: [
				...RU_STAGING,
				...CRIMEA,
				...DONBAS_2022
			]
		}],
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
			u("ua", "mech", "80 одшбр", 250, 240, 64)
		],
		fronts: [
			{
				name: "Северный",
				faction: "ru",
				anchors: [{
					x: 360,
					y: 90
				}, {
					x: 560,
					y: 80
				}],
				order: "attack"
			},
			{
				name: "Харьковский",
				faction: "ru",
				anchors: [{
					x: 760,
					y: 160
				}, {
					x: 860,
					y: 230
				}],
				order: "attack"
			},
			{
				name: "Донбасс",
				faction: "ru",
				anchors: [{
					x: 800,
					y: 340
				}, {
					x: 860,
					y: 460
				}],
				order: "attack"
			},
			{
				name: "Крымский",
				faction: "ru",
				anchors: [{
					x: 540,
					y: 600
				}, {
					x: 680,
					y: 590
				}],
				order: "attack"
			},
			{
				name: "Оборона Киева",
				faction: "ua",
				anchors: [{
					x: 380,
					y: 160
				}, {
					x: 500,
					y: 170
				}],
				order: "defend"
			},
			{
				name: "Восток",
				faction: "ua",
				anchors: [{
					x: 720,
					y: 280
				}, {
					x: 780,
					y: 420
				}],
				order: "defend"
			},
			{
				name: "Юг",
				faction: "ua",
				anchors: [{
					x: 480,
					y: 520
				}, {
					x: 620,
					y: 520
				}],
				order: "hold"
			}
		],
		events: [
			{
				id: "airfields",
				hour: 18,
				title: "Удары по аэродромам",
				body: "Первая волна ракет и авиации. Авиаресурс обеих сторон снижен, но удары продолжаются."
			},
			{
				id: "north-stall",
				hour: 180,
				title: "Северные колонны выдыхаются",
				body: "Снабжение на белорусском направлении даёт сбой. Организация соединений севера падает.",
				effect: {
					faction: "ru",
					org: -12
				}
			},
			{
				id: "regroup",
				hour: 720,
				title: "Перегруппировка",
				body: "Темп первых недель исчерпан. Стороны стягивают резервы и меняют акценты.",
				effect: {
					faction: "ru",
					manpower: 8,
					equipment: 10
				}
			}
		],
		timeLimitHours: 2160,
		durationHint: "до ~90 суток"
	},
	{
		id: "ua2026",
		name: "Украина, октябрь 2026",
		dateLabel: "октябрь 2026",
		startHourStamp: "2026-10-01T06:00:00",
		blurb: "Позиционная война. Укрепления, дроны, истощение. Каждый город — узел, а не флаг.",
		briefing: "Линия стабилизировалась: Донбасс, запорожское направление, левый берег Днепра, Крым. Обе армии измотаны. Решают склады, заводы и точечные удары, а не широкие стрелки на карте.",
		map: UKRAINE_MAP,
		factions: [RU, UA],
		startOwner: [{
			faction: "ua",
			polys: [UA_LAND]
		}, {
			faction: "ru",
			polys: [
				...CRIMEA,
				...SOUTH_CORRIDOR_2026,
				...DONBAS_2026,
				RU_STAGING[1]
			]
		}],
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
			u("ua", "mech", "Одесса", 378, 560, 62)
		],
		fronts: [
			{
				name: "Купянск",
				faction: "ru",
				anchors: [{
					x: 780,
					y: 240
				}, {
					x: 840,
					y: 300
				}],
				order: "attack"
			},
			{
				name: "Покровск",
				faction: "ru",
				anchors: [{
					x: 760,
					y: 380
				}, {
					x: 820,
					y: 440
				}],
				order: "attack"
			},
			{
				name: "Запорожье",
				faction: "ru",
				anchors: [{
					x: 640,
					y: 500
				}, {
					x: 740,
					y: 530
				}],
				order: "hold"
			},
			{
				name: "Херсон",
				faction: "ru",
				anchors: [{
					x: 540,
					y: 560
				}, {
					x: 640,
					y: 570
				}],
				order: "defend"
			},
			{
				name: "Харьков",
				faction: "ua",
				anchors: [{
					x: 720,
					y: 200
				}, {
					x: 780,
					y: 260
				}],
				order: "defend"
			},
			{
				name: "Донбасс",
				faction: "ua",
				anchors: [{
					x: 720,
					y: 340
				}, {
					x: 760,
					y: 430
				}],
				order: "hold"
			},
			{
				name: "Юг",
				faction: "ua",
				anchors: [{
					x: 520,
					y: 500
				}, {
					x: 660,
					y: 490
				}],
				order: "defend"
			}
		],
		events: [{
			id: "drone-week",
			hour: 96,
			title: "Неделя дронов",
			body: "Массированные удары БПЛА по складам. Снабжение обеих сторон проседает."
		}, {
			id: "mud",
			hour: 480,
			title: "Распутица",
			body: "Грязь режет темп наступления. Бронетехника теряет подвижность вне дорог."
		}],
		timeLimitHours: 2160,
		durationHint: "до ~90 суток"
	},
	{
		id: "levant",
		name: "Левант",
		dateLabel: "оперативный сценарий",
		startHourStamp: "2024-10-08T06:00:00",
		blurb: "Израиль против коалиции севера и сектора. Авиация против плотности и ракет.",
		briefing: "Короткий театр: города — укреплённые районы, а не провинции. У Израиля преимущество в воздухе и ракетах, у коалиции — плотность в городе и удары с севера. Фронт — полоса, а не граница на бумаге.",
		map: LEVANT_MAP,
		factions: [IL, COAL],
		startOwner: [{
			faction: "il",
			polys: [...ISRAEL_CORE]
		}, {
			faction: "coal",
			polys: [
				...GAZA_POLY,
				...LEBANON_POLY,
				...WESTBANK,
				[
					480,
					80,
					700,
					80,
					700,
					500,
					500,
					500
				]
			]
		}],
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
			u("coal", "infantry", "Бейрут", 340, 168, 70)
		],
		fronts: [
			{
				name: "Сектор",
				faction: "il",
				anchors: [{
					x: 270,
					y: 500
				}, {
					x: 290,
					y: 570
				}],
				order: "attack"
			},
			{
				name: "Север",
				faction: "il",
				anchors: [{
					x: 310,
					y: 250
				}, {
					x: 380,
					y: 270
				}],
				order: "defend"
			},
			{
				name: "Газа",
				faction: "coal",
				anchors: [{
					x: 250,
					y: 510
				}, {
					x: 270,
					y: 580
				}],
				order: "hold"
			},
			{
				name: "Ливан",
				faction: "coal",
				anchors: [{
					x: 320,
					y: 230
				}, {
					x: 400,
					y: 250
				}],
				order: "attack"
			}
		],
		events: [{
			id: "rocket-salvo",
			hour: 12,
			title: "Ракетный удар",
			body: "Массированный обстрел тыловых узлов. Часть авиаресурса отвлечена на перехват."
		}, {
			id: "cease-pressure",
			hour: 360,
			title: "Внешнее давление",
			body: "Дипломатический фон ограничивает темп. Истощение растёт быстрее захватов."
		}],
		timeLimitHours: 1440,
		durationHint: "до ~60 суток"
	},
	{
		id: "afghan",
		name: "Афганистан (вымысел)",
		dateLabel: "условный год",
		startHourStamp: "2027-04-01T05:00:00",
		blurb: "Вымышленная операция. Северные равнины против гор. Снабжение важнее стрелок.",
		briefing: "Россия вводит войска с севера, чтобы закрепиться на востоке театра. Сопротивление держит горы и города-узлы. Это не провинции: контроль — это заводы, склады и перевалы. Снабжение через Термез — горловина всей операции.",
		map: AFGHAN_MAP,
		factions: [RU, AFG],
		startOwner: [{
			faction: "afg",
			polys: [...SOUTH_AFG, AFGHAN_MAP.land[0]]
		}, {
			faction: "ru",
			polys: NORTH_AFG
		}],
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
			u("afg", "mech", "Юг", 300, 530, 64)
		],
		fronts: [
			{
				name: "Мазар",
				faction: "ru",
				anchors: [{
					x: 420,
					y: 160
				}, {
					x: 560,
					y: 170
				}],
				order: "attack"
			},
			{
				name: "Кундуз",
				faction: "ru",
				anchors: [{
					x: 560,
					y: 150
				}, {
					x: 680,
					y: 160
				}],
				order: "attack"
			},
			{
				name: "Кабул",
				faction: "afg",
				anchors: [{
					x: 540,
					y: 300
				}, {
					x: 700,
					y: 300
				}],
				order: "defend"
			},
			{
				name: "Запад",
				faction: "afg",
				anchors: [{
					x: 180,
					y: 280
				}, {
					x: 280,
					y: 360
				}],
				order: "hold"
			}
		],
		events: [{
			id: "pass",
			hour: 72,
			title: "Перевал закрыт",
			body: "Горная погода рвёт снабжение. Соединения вне дорог теряют организацию."
		}, {
			id: "guerrillas",
			hour: 240,
			title: "Новые отряды",
			body: "В горах появляются свежие группы сопротивления. Контроль дорог важнее городов.",
			effect: {
				faction: "afg",
				manpower: 12
			}
		}],
		timeLimitHours: 1920,
		durationHint: "до ~80 суток"
	}
];
function scenarioById(id) {
	return SCENARIOS.find((s) => s.id === id);
}
function dist(a, b) {
	return Math.hypot(a.x - b.x, a.y - b.y);
}
function dist2(a, b) {
	const dx = a.x - b.x;
	const dy = a.y - b.y;
	return dx * dx + dy * dy;
}
function clamp(v, lo, hi) {
	return Math.max(lo, Math.min(hi, v));
}
function pointInPoly(x, y, poly) {
	let inside = false;
	const n = poly.length / 2 | 0;
	for (let i = 0, j = n - 1; i < n; j = i++) {
		const xi = poly[i * 2];
		const yi = poly[i * 2 + 1];
		const xj = poly[j * 2];
		const yj = poly[j * 2 + 1];
		if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi + 1e-9) + xi) inside = !inside;
	}
	return inside;
}
function distToSeg(px, py, ax, ay, bx, by) {
	const vx = bx - ax;
	const vy = by - ay;
	const len2 = vx * vx + vy * vy;
	if (len2 < 1e-6) return Math.hypot(px - ax, py - ay);
	let t = ((px - ax) * vx + (py - ay) * vy) / len2;
	t = clamp(t, 0, 1);
	return Math.hypot(px - (ax + t * vx), py - (ay + t * vy));
}
function distToPolyline(x, y, pts) {
	let best = Infinity;
	for (let i = 0; i + 3 < pts.length; i += 2) {
		const d = distToSeg(x, y, pts[i], pts[i + 1], pts[i + 2], pts[i + 3]);
		if (d < best) best = d;
	}
	return best;
}
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function hash2(x, y) {
	const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
	return n - Math.floor(n);
}
function chaikin(pts, iters = 2) {
	let cur = pts;
	for (let k = 0; k < iters; k++) {
		if (cur.length < 3) break;
		const next = [cur[0]];
		for (let i = 0; i < cur.length - 1; i++) {
			const a = cur[i];
			const b = cur[i + 1];
			next.push({
				x: a.x * .75 + b.x * .25,
				y: a.y * .75 + b.y * .25
			});
			next.push({
				x: a.x * .25 + b.x * .75,
				y: a.y * .25 + b.y * .75
			});
		}
		next.push(cur[cur.length - 1]);
		cur = next;
	}
	return cur;
}
var TERRAIN_CODE = {
	water: 0,
	plains: 1,
	forest: 2,
	urban: 3,
	mountain: 4,
	river: 5
};
var UNIT_LABEL = {
	infantry: "Пехота",
	mech: "Механизированные",
	armor: "Танки",
	artillery: "Артиллерия"
};
var ORDER_LABEL = {
	attack: "Наступление",
	defend: "Оборона",
	hold: "Удержание"
};
var STRIKE_LABEL = {
	artillery: "Артиллерия",
	air: "Авиаудар",
	drone: "Дроны",
	missile: "Ракеты"
};
var SPEED_STEPS = [
	0,
	1,
	3,
	8,
	24
];
var SPEED_LABEL = [
	"Пауза",
	"1×",
	"3×",
	"8×",
	"сутки"
];
var MOVE = {
	infantry: 7,
	mech: 13,
	armor: 15,
	artillery: 9
};
var BASE_POWER = {
	infantry: 1,
	mech: 1.15,
	armor: 1.35,
	artillery: .7
};
var FORM_COST = {
	infantry: {
		man: 8,
		eq: 6,
		hours: 16
	},
	mech: {
		man: 10,
		eq: 14,
		hours: 22
	},
	armor: {
		man: 8,
		eq: 22,
		hours: 28
	},
	artillery: {
		man: 6,
		eq: 16,
		hours: 20
	}
};
function fid(world, id) {
	return world.factionIndex[id] ?? 0;
}
function cellIndex(grid, x, y) {
	const cx = clamp(x / grid.cellW | 0, 0, grid.w - 1);
	return clamp(y / grid.cellH | 0, 0, grid.h - 1) * grid.w + cx;
}
function cellCenter(grid, i) {
	const cx = i % grid.w;
	const cy = i / grid.w | 0;
	return {
		x: (cx + .5) * grid.cellW,
		y: (cy + .5) * grid.cellH
	};
}
function paintPoly(grid, poly, owner, onlyLand) {
	for (let i = 0; i < grid.w * grid.h; i++) {
		if (onlyLand && grid.terrain[i] === TERRAIN_CODE.water) continue;
		const p = cellCenter(grid, i);
		if (pointInPoly(p.x, p.y, poly)) {
			if (owner === 0) {
				grid.terrain[i] = TERRAIN_CODE.water;
				grid.owner[i] = 0;
			} else {
				grid.owner[i] = owner;
				grid.pressure[i] = .72;
			}
		}
	}
}
function terrainAt(map, x, y) {
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
function buildGrid(scenario) {
	const map = scenario.map;
	const grid = {
		w: 50,
		h: 36,
		cellW: map.width / 50,
		cellH: map.height / 36,
		owner: /* @__PURE__ */ new Uint8Array(1800),
		terrain: /* @__PURE__ */ new Uint8Array(1800),
		pressure: /* @__PURE__ */ new Float32Array(1800),
		supply: /* @__PURE__ */ new Uint8Array(1800)
	};
	for (let i = 0; i < 1800; i++) {
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
	const home = idx[scenario.startOwner[0]?.faction ?? scenario.factions[0].id] ?? 1;
	for (let i = 0; i < 1800; i++) if (grid.terrain[i] === TERRAIN_CODE.water) grid.owner[i] = 0;
	else if (grid.owner[i] === 0) grid.owner[i] = home;
	return grid;
}
function makeId(world, prefix) {
	world.nextId += 1;
	return `${prefix}${world.nextId}`;
}
function createWorld(scenario, player, balance, seed = 1) {
	const factionIndex = {};
	scenario.factions.forEach((f, i) => {
		factionIndex[f.id] = i + 1;
	});
	const enemy = scenario.factions.find((f) => f.id !== player)?.id ?? scenario.factions[1].id;
	const playerMult = 1 + balance * .18;
	const enemyMult = 1 - balance * .14;
	const world = {
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
		cities: scenario.map.cities.map((c) => ({
			id: c.id,
			owner: null,
			siege: 0
		})),
		hour: 0,
		rng: mulberry32(seed + Math.abs(balance) * 9),
		strikes: [],
		logs: [],
		eventsFired: /* @__PURE__ */ new Set(),
		outcome: null,
		nextId: 1,
		timeLimitHours: scenario.timeLimitHours,
		events: scenario.events,
		balance
	};
	for (const f of scenario.factions) {
		const m = f.id === player ? playerMult : enemyMult;
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
			startPower: 0
		};
	}
	for (const s of scenario.units) {
		const m = s.faction === player ? playerMult : enemyMult;
		const unit = {
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
			lastCombat: -999
		};
		world.units.push(unit);
	}
	for (const fr of scenario.fronts) {
		const front = {
			id: makeId(world, "f"),
			name: fr.name,
			faction: fr.faction,
			anchors: fr.anchors.map((a) => ({ ...a })),
			order: fr.order,
			unitIds: [],
			artillery: fr.faction !== player,
			air: false,
			drones: scenario.id === "ua2026" && fr.faction !== player
		};
		world.fronts.push(front);
	}
	autoAssignUnits(world);
	captureCitiesFromGrid(world);
	rebuildSupply(world);
	for (const f of scenario.factions) world.factions[f.id].startPower = forcePower(world, f.id);
	log(world, "Операция начата. Линия фронта живая — назначайте силы на участки.");
	return world;
}
function autoAssignUnits(world) {
	for (const u of world.units) {
		let best = null;
		let bestD = 140;
		for (const f of world.fronts) {
			if (f.faction !== u.faction) continue;
			for (let i = 0; i < f.anchors.length; i++) {
				const d = dist(u, f.anchors[i]);
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
function log(world, text) {
	world.logs.unshift({
		hour: world.hour,
		text
	});
	if (world.logs.length > 24) world.logs.length = 24;
}
function captureCitiesFromGrid(world) {
	for (const city of world.map.cities) {
		const i = cellIndex(world.grid, city.x, city.y);
		const o = world.grid.owner[i] ?? 0;
		const st = world.cities.find((c) => c.id === city.id);
		st.owner = o === 0 ? null : ownerId$1(world, o);
	}
}
function ownerId$1(world, idx) {
	for (const [id, n] of Object.entries(world.factionIndex)) if (n === idx) return id;
	return null;
}
function forcePower(world, faction) {
	let s = 0;
	for (const u of world.units) {
		if (u.faction !== faction || u.forming > 0) continue;
		s += unitPower(u);
	}
	return s;
}
function unitPower(u) {
	const supply = u.supplied ? 1 : .52;
	const org = .55 + u.org / 220;
	const elite = u.elite ? 1.12 : 1;
	return u.strength / 100 * BASE_POWER[u.type] * supply * org * elite;
}
function rebuildSupply(world) {
	const g = world.grid;
	g.supply.fill(0);
	const q = [];
	const push = (i, owner) => {
		if (g.terrain[i] === TERRAIN_CODE.water) return;
		if (g.owner[i] !== owner) return;
		if (g.supply[i] === owner) return;
		g.supply[i] = owner;
		q.push(i);
	};
	for (const [id, idx] of Object.entries(world.factionIndex)) {
		const def = world.defs[id];
		for (const edge of def.supplyEdges) {
			if (edge === "n") for (let x = 0; x < g.w; x++) push(x, idx);
			if (edge === "s") for (let x = 0; x < g.w; x++) push((g.h - 1) * g.w + x, idx);
			if (edge === "w") for (let y = 0; y < g.h; y++) push(y * g.w, idx);
			if (edge === "e") for (let y = 0; y < g.h; y++) push(y * g.w + (g.w - 1), idx);
		}
		for (const city of world.map.cities) {
			if (world.cities.find((c) => c.id === city.id)?.owner !== id) continue;
			if (!city.assets.includes("depot") && !city.assets.includes("port") && !city.assets.includes("hq")) continue;
			push(cellIndex(g, city.x, city.y), idx);
		}
	}
	const dirs = [
		1,
		-1,
		g.w,
		-g.w
	];
	while (q.length) {
		const i = q.pop();
		const owner = g.supply[i];
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
function nearSupply(world, u, want) {
	const g = world.grid;
	const i = cellIndex(g, u.x, u.y);
	const cx = i % g.w;
	const cy = i / g.w | 0;
	for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
		const x = cx + dx;
		const y = cy + dy;
		if (x < 0 || y < 0 || x >= g.w || y >= g.h) continue;
		if (g.supply[y * g.w + x] === want) return true;
	}
	return false;
}
function terrainMod(t, type, attacking) {
	if (t === TERRAIN_CODE.urban) return type === "infantry" ? 1.25 : type === "armor" ? .72 : .95;
	if (t === TERRAIN_CODE.forest) return type === "infantry" ? 1.15 : type === "armor" ? .8 : 1;
	if (t === TERRAIN_CODE.mountain) return attacking ? .7 : type === "infantry" ? 1.35 : .9;
	if (t === TERRAIN_CODE.river) return attacking ? .62 : 1.2;
	if (t === TERRAIN_CODE.plains) return type === "armor" ? 1.2 : 1;
	return 1;
}
function cityFortAt(world, x, y, defender) {
	let f = 0;
	for (const c of world.map.cities) {
		if (world.cities.find((s) => s.id === c.id)?.owner !== defender) continue;
		if (Math.hypot(c.x - x, c.y - y) < 22) f = Math.max(f, c.fort);
	}
	return f;
}
function supportBonus(world, faction, x, y) {
	let b = 1;
	for (const f of world.fronts) {
		if (f.faction !== faction) continue;
		if (!nearAnchors(f, x, y, 90)) continue;
		if (f.artillery) b += .16;
		if (f.air) b += .12;
		if (f.drones) b += .1;
	}
	return b;
}
function nearAnchors(f, x, y, r) {
	const pts = [];
	for (const a of f.anchors) pts.push(a.x, a.y);
	if (pts.length < 4) return f.anchors.some((a) => Math.hypot(a.x - x, a.y - y) < r);
	return distToPolyline(x, y, pts) < r;
}
function influence(world, i, faction, attacking) {
	const p = cellCenter(world.grid, i);
	const t = world.grid.terrain[i];
	let s = 0;
	for (const u of world.units) {
		if (u.faction !== faction || u.forming > 0) continue;
		const d2 = dist2(u, p);
		if (d2 > 2704) continue;
		const fall = Math.exp(-d2 / 1487.2);
		s += unitPower(u) * fall * terrainMod(t, u.type, attacking);
	}
	const fort = cityFortAt(world, p.x, p.y, faction);
	if (!attacking) s *= 1 + fort * .22;
	s *= supportBonus(world, faction, p.x, p.y);
	return s;
}
function stepFront(world) {
	const g = world.grid;
	const fA = world.player;
	const fB = world.enemy;
	const iA = fid(world, fA);
	const iB = fid(world, fB);
	const nextOwner = new Uint8Array(g.owner);
	const nextP = new Float32Array(g.pressure);
	for (let i = 0; i < g.w * g.h; i++) {
		if (g.terrain[i] === TERRAIN_CODE.water) continue;
		const owner = g.owner[i];
		if (owner === 0) continue;
		let border = false;
		const cx = i % g.w;
		const cy = i / g.w | 0;
		for (let dy = -1; dy <= 1 && !border; dy++) for (let dx = -1; dx <= 1; dx++) {
			const x = cx + dx;
			const y = cy + dy;
			if (x < 0 || y < 0 || x >= g.w || y >= g.h) continue;
			const o = g.owner[y * g.w + x];
			if (o !== 0 && o !== owner) border = true;
		}
		if (!border && world.rng() > .04) {
			nextP[i] = clamp((g.pressure[i] ?? .6) + .01, .2, 1);
			continue;
		}
		const pA = influence(world, i, fA, owner !== iA);
		const pB = influence(world, i, fB, owner !== iB);
		const sum = pA + pB + .35;
		const lean = (pA - pB) / sum;
		let pressure = g.pressure[i] ?? .6;
		if (owner === iA) pressure += lean * .085;
		else pressure -= lean * .085;
		if (pressure < 0) {
			nextOwner[i] = owner === iA ? iB : iA;
			nextP[i] = .35;
		} else nextP[i] = clamp(pressure, 0, 1);
	}
	g.owner.set(nextOwner);
	g.pressure.set(nextP);
}
function stepCombat(world) {
	for (const u of world.units) {
		if (u.forming > 0) continue;
		let enemyP = 0;
		for (const v of world.units) {
			if (v.faction === u.faction || v.forming > 0) continue;
			const d2 = dist2(u, v);
			if (d2 > 2116) continue;
			enemyP += unitPower(v) * Math.exp(-d2 / 1400);
		}
		if (enemyP < .08) {
			if (u.supplied) u.org = clamp(u.org + .35, 20, 100);
			u.strength = clamp(u.strength + (u.supplied ? .04 : 0), 8, 100);
			continue;
		}
		u.lastCombat = world.hour;
		const own = unitPower(u) * supportBonus(world, u.faction, u.x, u.y);
		const i = cellIndex(world.grid, u.x, u.y);
		const t = world.grid.terrain[i];
		const def = terrainMod(t, u.type, false);
		const fort = cityFortAt(world, u.x, u.y, u.faction);
		const dmg = enemyP / (own * def * (1 + fort * .15) + .4) * (.55 + world.rng() * .35) * .55;
		u.strength = clamp(u.strength - dmg, 0, 100);
		u.org = clamp(u.org - dmg * .9, 8, 100);
		const fac = world.factions[u.faction];
		fac.casualties += dmg * .2;
	}
	world.units = world.units.filter((u) => {
		if (u.forming > 0) return true;
		if (u.strength > 12) return true;
		log(world, `${u.name} выведена из строя.`);
		return false;
	});
	for (const f of world.fronts) f.unitIds = f.unitIds.filter((id) => world.units.some((u) => u.id === id));
}
function frontTarget(world, u) {
	const f = world.fronts.find((fr) => fr.id === u.frontId);
	if (!f) return {
		x: u.x,
		y: u.y
	};
	let nearest = f.anchors[0];
	let best = Infinity;
	for (const a of f.anchors) {
		const d = dist(u, a);
		if (d < best) {
			best = d;
			nearest = a;
		}
	}
	const nrm = borderNormal(world, cellIndex(world.grid, nearest.x, nearest.y), fid(world, u.faction));
	const push = f.order === "attack" ? 28 : f.order === "defend" ? 6 : 0;
	return {
		x: nearest.x + nrm.x * push,
		y: nearest.y + nrm.y * push
	};
}
function borderNormal(world, i, owner) {
	const g = world.grid;
	const cx = i % g.w;
	const cy = i / g.w | 0;
	let nx = 0;
	let ny = 0;
	for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
		const x = cx + dx;
		const y = cy + dy;
		if (x < 0 || y < 0 || x >= g.w || y >= g.h) continue;
		const o = g.owner[y * g.w + x];
		if (o === 0) continue;
		if (o !== owner) {
			nx += dx;
			ny += dy;
		}
	}
	const len = Math.hypot(nx, ny) || 1;
	return {
		x: nx / len,
		y: ny / len
	};
}
function stepMove(world) {
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
		} else if (u.order === "idle") continue;
		const d = Math.hypot(tx - u.x, ty - u.y);
		if (d < 4) {
			if (u.order === "move" || u.order === "attack") u.order = u.frontId ? "front" : "idle";
			continue;
		}
		const inCombat = world.hour - u.lastCombat < 3;
		let spd = MOVE[u.type] * (u.supplied ? 1 : .55) * (inCombat ? .42 : 1);
		const i = cellIndex(world.grid, u.x, u.y);
		const t = world.grid.terrain[i];
		if (t === TERRAIN_CODE.mountain) spd *= .55;
		if (t === TERRAIN_CODE.river) spd *= .6;
		if (t === TERRAIN_CODE.forest) spd *= .8;
		if (t === TERRAIN_CODE.urban) spd *= .75;
		const step = Math.min(d, spd);
		let nx = u.x + (tx - u.x) / d * step;
		let ny = u.y + (ty - u.y) / d * step;
		const ni = cellIndex(world.grid, nx, ny);
		if (world.grid.terrain[ni] === TERRAIN_CODE.water) {
			nx = u.x + (world.rng() - .5) * spd;
			ny = u.y + (world.rng() - .5) * spd;
		}
		u.x = clamp(nx, 8, world.map.width - 8);
		u.y = clamp(ny, 8, world.map.height - 8);
	}
}
function stepCities(world) {
	for (const city of world.map.cities) {
		const st = world.cities.find((c) => c.id === city.id);
		const i = cellIndex(world.grid, city.x, city.y);
		const gridOwner = ownerId$1(world, world.grid.owner[i] ?? 0);
		if (!gridOwner) continue;
		if (st.owner === gridOwner) {
			st.siege = Math.max(0, st.siege - .2);
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
function stepEconomy(world) {
	const prod = {};
	for (const id of Object.keys(world.factions)) prod[id] = {
		man: .12,
		eq: .08,
		air: 0
	};
	for (const city of world.map.cities) {
		const st = world.cities.find((c) => c.id === city.id);
		if (!st?.owner) continue;
		const p = prod[st.owner];
		p.man += city.population * .018;
		if (city.assets.includes("factory")) p.eq += .22;
		if (city.assets.includes("infra")) p.man += .04;
		if (city.assets.includes("airbase")) p.air += .035;
		if (city.assets.includes("port")) p.eq += .08;
	}
	for (const [id, p] of Object.entries(prod)) {
		const f = world.factions[id];
		f.manpower = clamp(f.manpower + p.man, 0, 120);
		f.equipment = clamp(f.equipment + p.eq, 0, 120);
		f.air = clamp(f.air + p.air, 0, f.airMax);
		if (world.hour % 48 === 0) f.missiles = clamp(f.missiles + .35, 0, 8);
		if (world.hour % 24 === 0) f.drones = clamp(f.drones + .4, 0, 10);
		if (world.hour % 12 === 0) f.artillery = clamp(f.artillery + .15, 0, 8);
	}
}
function stepEvents(world) {
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
function checkVictory(world) {
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
	const pStart = world.factions[world.player].startPower || 1;
	const eStart = world.factions[world.enemy].startPower || 1;
	if (pCapSt && pCapSt.owner === world.enemy && world.hour > 48) {
		world.outcome = {
			kind: "defeat",
			reason: `Потеряна столица — ${pCap?.name}.`
		};
		return;
	}
	if (eCapSt && eCapSt.owner === world.player && pScore >= total * .45) {
		world.outcome = {
			kind: "victory",
			reason: `Взята столица противника — ${eCap?.name}.`
		};
		return;
	}
	if (pScore >= total * .72 && pPow > ePow * .7) {
		world.outcome = {
			kind: "victory",
			reason: "Ключевые узлы под контролем."
		};
		return;
	}
	if (ePow < eStart * .22 && pScore > eScore) {
		world.outcome = {
			kind: "victory",
			reason: "Силы противника истощены."
		};
		return;
	}
	if (pPow < pStart * .2 && eScore >= pScore) {
		world.outcome = {
			kind: "defeat",
			reason: "Собственные силы разбиты."
		};
		return;
	}
	if (world.hour >= world.timeLimitHours) {
		const win = pScore > eScore || pScore === eScore && pPow >= ePow;
		world.outcome = {
			kind: win ? "victory" : "defeat",
			reason: win ? "К сроку удержаны ключевые цели." : "Срок операции истёк без решающего результата."
		};
	}
}
function stepAi(world) {
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
		const ratio = own / (foe + .4);
		if (ratio > 1.25) f.order = "attack";
		else if (ratio < .8) f.order = "defend";
		else f.order = "hold";
		f.artillery = world.factions[fac].artillery >= 1;
		f.drones = world.factions[fac].drones >= 1;
	}
	const unassigned = world.units.filter((u) => u.faction === fac && !u.frontId && u.forming <= 0);
	const fronts = world.fronts.filter((f) => f.faction === fac);
	for (const u of unassigned) {
		const weakest = fronts.slice().sort((a, b) => a.unitIds.length - b.unitIds.length)[0];
		if (!weakest) break;
		assignUnitToFront(world, u.id, weakest.id);
	}
	if (world.rng() < .45) {
		const kinds = [
			"artillery",
			"air",
			"drone",
			"missile"
		];
		const kind = kinds[world.rng() * kinds.length | 0];
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
		if (best > .8) fireStrike(world, fac, kind, tx, ty);
	}
	tryFormUnit(world, fac);
}
function localPower(world, faction, x, y) {
	let s = 0;
	for (const u of world.units) {
		if (u.faction !== faction || u.forming > 0) continue;
		const d2 = (u.x - x) ** 2 + (u.y - y) ** 2;
		if (d2 < 4900) s += unitPower(u) * Math.exp(-d2 / 2500);
	}
	return s;
}
function assignUnitToFront(world, unitId, frontId) {
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
	} else u.order = "idle";
}
function orderMove(world, unitId, x, y, attack) {
	const u = world.units.find((n) => n.id === unitId);
	if (!u || u.faction !== world.player) return;
	u.tx = x;
	u.ty = y;
	u.order = attack ? "attack" : "move";
}
function setFrontOrder(world, frontId, order) {
	const f = world.fronts.find((n) => n.id === frontId);
	if (!f || f.faction !== world.player) return;
	f.order = order;
}
function createFront(world, name, anchors) {
	if (anchors.length < 1) return null;
	const f = {
		id: makeId(world, "f"),
		name,
		faction: world.player,
		anchors,
		order: "hold",
		unitIds: [],
		artillery: false,
		air: false,
		drones: false
	};
	world.fronts.push(f);
	log(world, `Создан фронт «${name}».`);
	return f;
}
function toggleFrontSupport(world, frontId, kind) {
	const f = world.fronts.find((n) => n.id === frontId);
	if (!f || f.faction !== world.player) return;
	f[kind] = !f[kind];
}
function fireStrike(world, faction, kind, x, y) {
	const f = world.factions[faction];
	if (!f) return false;
	const c = {
		artillery: {
			key: "artillery",
			need: .8,
			r: 36,
			dmg: 7
		},
		air: {
			key: "air",
			need: 1,
			r: 42,
			dmg: 11
		},
		drone: {
			key: "drones",
			need: 1,
			r: 28,
			dmg: 6
		},
		missile: {
			key: "missiles",
			need: 1,
			r: 48,
			dmg: 18
		}
	}[kind];
	const pool = f[c.key];
	if (typeof pool !== "number" || pool < c.need) return false;
	f[c.key] = pool - c.need;
	world.strikes.push({
		x,
		y,
		r: c.r,
		kind,
		t: 1
	});
	for (const u of world.units) {
		if (u.faction === faction) continue;
		const d = Math.hypot(u.x - x, u.y - y);
		if (d > c.r) continue;
		const fall = 1 - d / c.r;
		u.strength = clamp(u.strength - c.dmg * fall, 5, 100);
		u.org = clamp(u.org - c.dmg * .8 * fall, 8, 100);
	}
	const city = world.map.cities.find((ct) => Math.hypot(ct.x - x, ct.y - y) < 18);
	if (city) {
		const st = world.cities.find((s) => s.id === city.id);
		if (st && st.owner && st.owner !== faction) st.siege += kind === "missile" ? 3 : 1.2;
	}
	if (faction === world.player) log(world, `${kindLabel(kind)} по координатам ${x | 0},${y | 0}.`);
	return true;
}
function kindLabel(k) {
	if (k === "air") return "Авиаудар";
	if (k === "drone") return "Удар дронов";
	if (k === "missile") return "Ракетный удар";
	return "Артналёт";
}
function tryFormUnit(world, faction, type = "infantry", cityId) {
	const f = world.factions[faction];
	const cost = FORM_COST[type];
	if (f.manpower < cost.man || f.equipment < cost.eq) return false;
	let city = cityId ? world.map.cities.find((c) => c.id === cityId) : void 0;
	if (!city) city = world.map.cities.find((c) => {
		return world.cities.find((s) => s.id === c.id)?.owner === faction && c.assets.includes("factory");
	});
	if (!city) return false;
	if (world.cities.find((s) => s.id === city.id)?.owner !== faction) return false;
	f.manpower -= cost.man;
	f.equipment -= cost.eq;
	const names = {
		infantry: "Пех. бр.",
		mech: "Мех. бр.",
		armor: "Танк. бр.",
		artillery: "Арт. бр."
	};
	world.units.push({
		id: makeId(world, "u"),
		faction,
		type,
		name: `${names[type]} ${city.name}`,
		x: city.x + (world.rng() - .5) * 12,
		y: city.y + (world.rng() - .5) * 12,
		strength: 62,
		org: 58,
		supplied: true,
		forming: cost.hours,
		elite: false,
		order: "idle",
		tx: city.x,
		ty: city.y,
		frontId: null,
		lastCombat: -999
	});
	if (faction === world.player) log(world, `Формируется ${names[type]} в ${city.name}.`);
	return true;
}
function stepWorld(world, hours) {
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
			s.t -= .12;
			return s.t > 0;
		});
	}
}
function dateLabel(world, startIso) {
	const t = Date.parse(startIso) + world.hour * 3600 * 1e3;
	const d = new Date(t);
	const dd = String(d.getUTCDate()).padStart(2, "0");
	const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
	const hh = String(d.getUTCHours()).padStart(2, "0");
	return `${dd}.${mm}.${d.getUTCFullYear()}  ${hh}:00`;
}
function victoryScore(world) {
	const key = world.map.cities.filter((c) => c.victory > 0);
	let p = 0;
	let t = 0;
	for (const c of key) {
		t += c.victory;
		if (world.cities.find((s) => s.id === c.id)?.owner === world.player) p += c.victory;
	}
	return t === 0 ? 0 : p / t;
}
var TERRAIN_FILL = {
	0: "#152026",
	1: "#2a3228",
	2: "#223026",
	3: "#35352f",
	4: "#3a372f",
	5: "#1c2c32"
};
function screenToWorld(cam, sx, sy, w, h) {
	return {
		x: (sx - w / 2) / cam.zoom + cam.x,
		y: (sy - h / 2) / cam.zoom + cam.y
	};
}
function strokePoly(ctx, pts, close = true) {
	ctx.beginPath();
	ctx.moveTo(pts[0], pts[1]);
	for (let i = 2; i < pts.length; i += 2) ctx.lineTo(pts[i], pts[i + 1]);
	if (close) ctx.closePath();
}
function traceFront(world) {
	const g = world.grid;
	const seen = new Uint8Array(g.w * g.h);
	const lines = [];
	const neigh = [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1]
	];
	const isBorder = (i) => {
		if (g.terrain[i] === TERRAIN_CODE.water || g.owner[i] === 0) return false;
		const cx = i % g.w;
		const cy = i / g.w | 0;
		for (const [dx, dy] of neigh) {
			const x = cx + dx;
			const y = cy + dy;
			if (x < 0 || y < 0 || x >= g.w || y >= g.h) continue;
			const o = g.owner[y * g.w + x];
			if (o !== 0 && o !== g.owner[i]) return true;
		}
		return false;
	};
	for (let i = 0; i < g.w * g.h; i++) {
		if (seen[i] || !isBorder(i)) continue;
		const line = [];
		let cur = i;
		let guard = 0;
		while (cur >= 0 && guard++ < 400) {
			if (seen[cur]) break;
			seen[cur] = 1;
			line.push(cellCenter(g, cur));
			const cx = cur % g.w;
			const cy = cur / g.w | 0;
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
function drawNATO(ctx, type, color, selected) {
	const w = 22;
	const h = 14;
	ctx.save();
	ctx.fillStyle = color;
	ctx.strokeStyle = selected ? "#e8e9eb" : "rgba(232,233,235,0.55)";
	ctx.lineWidth = selected ? 1.8 : 1;
	ctx.beginPath();
	ctx.roundRect(-11, -7, w, h, 1.5);
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
	} else if (type === "armor") ctx.ellipse(0, 0, 7, 4, 0, 0, Math.PI * 2);
	else if (type === "mech") {
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
function pickAt(world, cam, sx, sy, w, h) {
	const p = screenToWorld(cam, sx, sy, w, h);
	let bestU = null;
	let bestD = 18 / cam.zoom;
	for (const u of world.units) {
		const d = Math.hypot(u.x - p.x, u.y - p.y);
		if (d < bestD) {
			bestD = d;
			bestU = u;
		}
	}
	if (bestU) return {
		kind: "unit",
		id: bestU.id,
		x: p.x,
		y: p.y
	};
	let bestC = Infinity;
	let cityId;
	for (const c of world.map.cities) {
		const d = Math.hypot(c.x - p.x, c.y - p.y);
		if (d < 16 && d < bestC) {
			bestC = d;
			cityId = c.id;
		}
	}
	if (cityId) return {
		kind: "city",
		id: cityId,
		x: p.x,
		y: p.y
	};
	let bestF = null;
	let bestFd = 28;
	for (const f of world.fronts) for (const a of f.anchors) {
		const d = Math.hypot(a.x - p.x, a.y - p.y);
		if (d < bestFd) {
			bestFd = d;
			bestF = f;
		}
	}
	if (bestF) return {
		kind: "front",
		id: bestF.id,
		x: p.x,
		y: p.y
	};
	return {
		kind: "map",
		x: p.x,
		y: p.y
	};
}
function renderWorld(ctx, world, cam, w, h, selected, hover, strike) {
	ctx.save();
	ctx.fillStyle = "#101210";
	ctx.fillRect(0, 0, w, h);
	ctx.translate(w / 2, h / 2);
	ctx.scale(cam.zoom, cam.zoom);
	ctx.translate(-cam.x, -cam.y);
	const g = world.grid;
	for (let i = 0; i < g.w * g.h; i++) {
		const cx = i % g.w;
		const cy = i / g.w | 0;
		const t = g.terrain[i];
		const x = cx * g.cellW;
		const y = cy * g.cellH;
		ctx.fillStyle = TERRAIN_FILL[t] ?? TERRAIN_FILL[1];
		ctx.fillRect(x, y, g.cellW + .6, g.cellH + .6);
		const n = hash2(cx, cy);
		if (t === TERRAIN_CODE.plains && n > .72) {
			ctx.fillStyle = "rgba(0,0,0,0.08)";
			ctx.fillRect(x, y, g.cellW, g.cellH);
		}
		const owner = g.owner[i];
		if (owner && t !== TERRAIN_CODE.water) {
			const fac = ownerId(world, owner);
			const def = fac ? world.defs[fac] : null;
			if (def) {
				ctx.fillStyle = hexAlpha(def.fill, .32 + (g.pressure[i] ?? 0) * .12);
				ctx.fillRect(x, y, g.cellW + .6, g.cellH + .6);
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
		ctx.moveTo(line[0].x, line[0].y);
		for (let i = 1; i < line.length; i++) ctx.lineTo(line[i].x, line[i].y);
		ctx.strokeStyle = "rgba(12,13,14,0.7)";
		ctx.lineWidth = 6.5 / cam.zoom;
		ctx.stroke();
		ctx.strokeStyle = "#d8d6c8";
		ctx.lineWidth = 2.4 / cam.zoom;
		ctx.stroke();
		ctx.strokeStyle = "rgba(216,214,200,0.45)";
		ctx.lineWidth = 1 / cam.zoom;
		for (let i = 2; i < line.length; i += 3) {
			const a = line[i - 1];
			const b = line[i];
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
		ctx.fillStyle = active ? "#e8e9eb" : hexAlpha(world.defs[f.faction]?.color ?? "#ccc", .9);
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
			ctx.moveTo(f.anchors[0].x, f.anchors[0].y);
			for (let i = 1; i < f.anchors.length; i++) ctx.lineTo(f.anchors[i].x, f.anchors[i].y);
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
		if (st && st.siege > .4) {
			ctx.beginPath();
			ctx.arc(city.x, city.y, r + 5.5, -Math.PI / 2, -Math.PI / 2 + st.siege / 10 * Math.PI * 2);
			ctx.strokeStyle = "#c45c4a";
			ctx.lineWidth = 1.6 / cam.zoom;
			ctx.stroke();
		}
		if (cam.zoom > .72 || city.victory >= 3 || sel) {
			ctx.font = `${11 / cam.zoom}px "Barlow Condensed", sans-serif`;
			ctx.textAlign = "center";
			ctx.textBaseline = "top";
			ctx.fillStyle = "rgba(12,13,14,0.7)";
			ctx.fillText(city.name, city.x + .6 / cam.zoom, city.y + r + 3.2 / cam.zoom);
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
		const def = world.defs[u.faction];
		const col = u.faction === world.player ? "#3d4a40" : "#4a332e";
		if (u.forming > 0) ctx.globalAlpha = .45;
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
		ctx.arc(s.x, s.y, s.r * (1.1 - s.t * .3), 0, Math.PI * 2);
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
	const px = 80 * cam.zoom;
	ctx.beginPath();
	ctx.moveTo(w - 24 - px, h - 22);
	ctx.lineTo(w - 24, h - 22);
	ctx.stroke();
	ctx.textAlign = "right";
	ctx.fillText("80 км", w - 24, h - 28);
	ctx.restore();
}
function ownerId(world, idx) {
	for (const [id, n] of Object.entries(world.factionIndex)) if (n === idx) return id;
	return null;
}
function hexAlpha(hex, a) {
	const h = hex.replace("#", "");
	const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
	return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`;
}
function fitCamera(world, w, h) {
	const z = Math.min(w / world.map.width, h / world.map.height) * .98;
	return {
		x: world.map.width / 2,
		y: world.map.height / 2,
		zoom: Math.max(.45, z)
	};
}
var KEY = "frontline.save.v1";
var SAVE_VERSION = 1;
function writeSave(blob) {
	try {
		const prev = localStorage.getItem(KEY);
		if (prev) localStorage.setItem(KEY + ".bak", prev);
		localStorage.setItem(KEY, JSON.stringify(blob));
	} catch {}
}
function readSave() {
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (!parsed || parsed.version !== SAVE_VERSION) return null;
		return parsed;
	} catch {
		return null;
	}
}
function clearSave() {
	try {
		localStorage.removeItem(KEY);
	} catch {}
}
function serializeWorld(world) {
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
			supply: Array.from(world.grid.supply)
		}
	};
}
var runtime = null;
var lastSave = 0;
function getRuntime() {
	return runtime;
}
function startRuntime(scenarioId, player, balance, w, h) {
	const sc = scenarioById(scenarioId);
	if (!sc) throw new Error("unknown scenario");
	const world = createWorld(sc, player, balance, (Date.now() & 65535) + 1);
	runtime = {
		world,
		camera: fitCamera(world, Math.max(320, w), Math.max(480, h)),
		startIso: sc.startHourStamp,
		scenarioName: sc.name
	};
	persist();
	return runtime;
}
function stopRuntime() {
	runtime = null;
}
function snapshotHud() {
	const rt = runtime;
	if (!rt) return null;
	const w = rt.world;
	const f = w.factions[w.player];
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
		eventBanner: ev ? {
			title: ev.title,
			body: ev.body
		} : null
	};
}
function persist(force = false) {
	const rt = runtime;
	if (!rt) return;
	const now = performance.now();
	if (!force && now - lastSave < 4e3) return;
	lastSave = now;
	writeSave({
		version: 1,
		screen: "play",
		scenarioId: rt.world.scenarioId,
		player: rt.world.player,
		balance: rt.world.balance,
		hour: rt.world.hour,
		world: serializeWorld(rt.world)
	});
}
function tryRestore(w, h) {
	const blob = readSave();
	if (!blob) return null;
	const sc = scenarioById(blob.scenarioId);
	if (!sc) return null;
	try {
		const data = blob.world;
		const world = createWorld(sc, blob.player, blob.balance, 1);
		world.hour = data.hour;
		world.nextId = data.nextId;
		world.units = data.units;
		world.fronts = data.fronts;
		world.cities = data.cities;
		world.factions = data.factions;
		world.logs = data.logs;
		world.eventsFired = new Set(data.eventsFired);
		world.outcome = data.outcome;
		world.rng = mulberry32(data.hour + 17 | 0);
		const g = data.grid;
		world.grid.owner = Uint8Array.from(g.owner);
		world.grid.terrain = Uint8Array.from(g.terrain);
		world.grid.pressure = Float32Array.from(g.pressure);
		world.grid.supply = Uint8Array.from(g.supply);
		runtime = {
			world,
			camera: fitCamera(world, Math.max(320, w), Math.max(480, h)),
			startIso: sc.startHourStamp,
			scenarioName: sc.name
		};
		return runtime;
	} catch {
		return null;
	}
}
var first = SCENARIOS[0];
var useGame = create((set, get) => ({
	screen: "menu",
	setup: {
		scenarioId: first.id,
		player: first.factions[0].id,
		balance: 0
	},
	hud: null,
	selectedUnit: null,
	selectedFront: null,
	selectedCity: null,
	strike: null,
	placingFront: false,
	speedIndex: 0,
	panelOpen: false,
	briefing: true,
	hasSave: false,
	setScreen: (screen) => set({ screen }),
	pickScenario: (scenarioId) => {
		const sc = SCENARIOS.find((s) => s.id === scenarioId) ?? first;
		set({
			setup: {
				scenarioId: sc.id,
				player: sc.factions[0].id,
				balance: 0
			},
			screen: "setup"
		});
	},
	setPlayer: (player) => set({ setup: {
		...get().setup,
		player
	} }),
	setBalance: (balance) => set({ setup: {
		...get().setup,
		balance
	} }),
	startGame: (w, h) => {
		const { setup } = get();
		startRuntime(setup.scenarioId, setup.player, setup.balance, w, h);
		set({
			screen: "play",
			hud: snapshotHud(),
			selectedUnit: null,
			selectedFront: null,
			selectedCity: null,
			strike: null,
			placingFront: false,
			speedIndex: 0,
			panelOpen: false,
			briefing: true,
			hasSave: true
		});
	},
	continueGame: (w, h) => {
		if (!tryRestore(w, h)) return false;
		set({
			screen: "play",
			hud: snapshotHud(),
			briefing: false,
			speedIndex: 0,
			hasSave: true
		});
		return true;
	},
	abortToMenu: () => {
		persist(true);
		stopRuntime();
		set({
			screen: "menu",
			hud: null,
			hasSave: !!readSave()
		});
	},
	refreshHud: () => {
		const hud = snapshotHud();
		if (!hud) return;
		if (hud.outcome) {
			persist(true);
			set({
				hud,
				screen: "end",
				speedIndex: 0
			});
			return;
		}
		set({ hud });
	},
	select: (kind, id) => {
		if (kind === "none") {
			set({
				selectedUnit: null,
				selectedFront: null,
				selectedCity: null,
				panelOpen: false
			});
			return;
		}
		set({
			selectedUnit: kind === "unit" ? id ?? null : null,
			selectedFront: kind === "front" ? id ?? null : null,
			selectedCity: kind === "city" ? id ?? null : null,
			panelOpen: true,
			placingFront: false
		});
	},
	setStrike: (strike) => set({
		strike,
		placingFront: false
	}),
	setPlacingFront: (placingFront) => set({
		placingFront,
		strike: null,
		selectedUnit: null,
		selectedFront: null
	}),
	setSpeedIndex: (speedIndex) => set({ speedIndex }),
	setPanelOpen: (panelOpen) => set({ panelOpen }),
	setBriefing: (briefing) => set({ briefing })
}));
function wipeSaveAndMenu() {
	clearSave();
	stopRuntime();
	useGame.setState({
		screen: "menu",
		hasSave: false,
		hud: null
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-40 disabled:pointer-events-none select-none", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:opacity-90",
			secondary: "bg-surface-2 text-fg shadow-border hover:bg-surface",
			ghost: "bg-transparent text-fg hover:bg-surface-2",
			danger: "bg-danger text-fg hover:opacity-90"
		},
		size: {
			md: "h-11 px-4 text-sm rounded-sm",
			sm: "h-9 px-3 text-sm rounded-xs",
			lg: "h-12 px-5 text-base rounded-md",
			icon: "size-11 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "secondary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function End() {
	const hud = useGame((s) => s.hud);
	const pickScenario = useGame((s) => s.pickScenario);
	const rt = getRuntime();
	const win = hud?.outcome?.kind === "victory";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col items-center justify-center bg-bg px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-[0.7rem] uppercase tracking-[0.26em] text-muted",
				children: hud?.dateLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl font-semibold tracking-tight",
				children: win ? "Победа" : "Поражение"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-[36ch] text-sm leading-relaxed text-muted",
				children: hud?.outcome?.reason
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 grid w-full max-w-sm grid-cols-2 gap-2 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md bg-surface px-4 py-3 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[0.65rem] uppercase tracking-wider text-subtle",
						children: "Узлы"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "font-display text-2xl font-semibold tabular-nums",
						children: [Math.round((hud?.victoryScore ?? 0) * 100), "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md bg-surface px-4 py-3 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[0.65rem] uppercase tracking-wider text-subtle",
						children: "Силы"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "font-display text-2xl font-semibold tabular-nums",
						children: [
							hud?.playerPower.toFixed(0),
							"/",
							hud?.enemyPower.toFixed(0)
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex w-full max-w-sm flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "primary",
					size: "lg",
					className: "w-full font-display",
					onClick: () => pickScenario(rt?.world.scenarioId ?? "ua2022"),
					children: "Ещё раз"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					size: "lg",
					className: "w-full font-display",
					onClick: () => wipeSaveAndMenu(),
					children: "К сценариям"
				})]
			})
		]
	});
}
function Menu() {
	const pickScenario = useGame((s) => s.pickScenario);
	const continueGame = useGame((s) => s.continueGame);
	const hasSave = useGame((s) => s.hasSave);
	(0, import_react.useEffect)(() => {
		useGame.setState({ hasSave: !!readSave() });
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-dvh flex-col bg-bg px-5 pb-10 pt-[max(2.5rem,env(safe-area-inset-top))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 top-24 h-px w-[140%] rotate-[-18deg] bg-border-strong" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-[42%] h-px w-full bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-32 right-[-20%] h-px w-[80%] rotate-[12deg] bg-danger/40" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "stagger-in relative mx-auto w-full max-w-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted",
						children: "Оперативная карта"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 font-display text-5xl font-semibold leading-none tracking-tight text-fg sm:text-6xl",
						children: [
							"Линия",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Фронта"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-[34ch] text-sm leading-relaxed text-muted",
						children: "Реал-тайм стратегия. Плавная линия фронта, дивизии и удары поддержки. Сессия 20–40 минут."
					})
				]
			}),
			hasSave ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto mt-8 w-full max-w-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "primary",
					size: "lg",
					className: "w-full font-display text-base tracking-wide",
					onClick: () => continueGame(window.innerWidth, window.innerHeight),
					children: "Продолжить операцию"
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "relative mx-auto mt-8 flex w-full max-w-lg flex-col gap-2",
				children: SCENARIOS.map((sc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => pickScenario(sc.id),
					className: "flex w-full items-stretch gap-3 rounded-lg bg-surface p-2 text-left shadow-border transition-[transform,background-color] duration-150 ease-out hover:bg-surface-2 active:scale-[0.99]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-16 shrink-0 flex-col justify-center rounded-md bg-bg px-2 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[0.65rem] uppercase tracking-wider text-subtle",
							children: "старт"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-semibold leading-tight text-accent",
							children: sc.dateLabel
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 py-2 pr-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-semibold tracking-tight text-fg",
								children: sc.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 shrink-0 text-subtle" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-snug text-muted",
							children: sc.blurb
						})]
					})]
				}) }, sc.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mx-auto mt-auto w-full max-w-lg pt-8 text-xs leading-relaxed text-subtle",
				children: "Симуляция. Обе стороны играбельны. Без политики вне карты."
			})
		]
	});
}
function Play$1() {
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const hud = useGame((s) => s.hud);
	const speedIndex = useGame((s) => s.speedIndex);
	const setSpeedIndex = useGame((s) => s.setSpeedIndex);
	const selectedUnit = useGame((s) => s.selectedUnit);
	const selectedFront = useGame((s) => s.selectedFront);
	const selectedCity = useGame((s) => s.selectedCity);
	const strike = useGame((s) => s.strike);
	const placingFront = useGame((s) => s.placingFront);
	const panelOpen = useGame((s) => s.panelOpen);
	const briefing = useGame((s) => s.briefing);
	const refreshHud = useGame((s) => s.refreshHud);
	const select = useGame((s) => s.select);
	const setStrike = useGame((s) => s.setStrike);
	const setPlacingFront = useGame((s) => s.setPlacingFront);
	const setPanelOpen = useGame((s) => s.setPanelOpen);
	const setBriefing = useGame((s) => s.setBriefing);
	const abortToMenu = useGame((s) => s.abortToMenu);
	const scenario = scenarioById(useGame((s) => s.setup).scenarioId) ?? scenarioById(getRuntime()?.world.scenarioId ?? "") ?? null;
	const hover = (0, import_react.useRef)(null);
	const frontDraft = (0, import_react.useRef)([]);
	const speedRef = (0, import_react.useRef)(speedIndex);
	speedRef.current = speedIndex;
	(0, import_react.useEffect)(() => {
		if (!getRuntime()) useGame.getState().setScreen("menu");
	}, []);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		if (!getRuntime()) return;
		let raf = 0;
		let last = performance.now();
		let acc = 0;
		const pointers = /* @__PURE__ */ new Map();
		let pan = null;
		let pinch = null;
		let moved = 0;
		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const r = wrap.getBoundingClientRect();
			canvas.width = Math.max(1, r.width * dpr);
			canvas.height = Math.max(1, r.height * dpr);
			canvas.style.width = `${r.width}px`;
			canvas.style.height = `${r.height}px`;
		};
		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(wrap);
		const draw = () => {
			const ctx = canvas.getContext("2d");
			const run = getRuntime();
			if (!ctx || !run) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const w = canvas.width / dpr;
			const h = canvas.height / dpr;
			const st = useGame.getState();
			renderWorld(ctx, run.world, run.camera, w, h, {
				unitId: st.selectedUnit ?? void 0,
				frontId: st.selectedFront ?? void 0,
				cityId: st.selectedCity ?? void 0
			}, hover.current, st.strike);
		};
		let lastHud = 0;
		const loop = (now) => {
			const dt = Math.min(.1, (now - last) / 1e3);
			last = now;
			const run = getRuntime();
			const sp = SPEED_STEPS[speedRef.current] ?? 0;
			if (run && sp > 0 && !run.world.outcome && !useGame.getState().briefing) {
				acc += dt * sp;
				let steps = 0;
				while (acc >= 1 && steps < 24) {
					stepWorld(run.world, 1);
					acc -= 1;
					steps += 1;
				}
				if (steps && (now - lastHud > 200 || run.world.outcome)) {
					lastHud = now;
					persist();
					refreshHud();
				}
			}
			run?.world.strikes.forEach((s) => {
				s.t -= dt * .9;
			});
			draw();
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		const pos = (e) => {
			const r = canvas.getBoundingClientRect();
			return {
				x: e.clientX - r.left,
				y: e.clientY - r.top
			};
		};
		const onDown = (e) => {
			canvas.setPointerCapture(e.pointerId);
			const p = pos(e);
			pointers.set(e.pointerId, p);
			moved = 0;
			if (pointers.size === 1) {
				const run = getRuntime();
				pan = {
					x: p.x,
					y: p.y,
					cx: run.camera.x,
					cy: run.camera.y
				};
				pinch = null;
			} else if (pointers.size === 2) {
				const [a, b] = [...pointers.values()];
				pinch = {
					dist: Math.hypot(a.x - b.x, a.y - b.y),
					zoom: getRuntime().camera.zoom
				};
				pan = null;
			}
		};
		const onMove = (e) => {
			if (!pointers.has(e.pointerId)) {
				const run = getRuntime();
				if (!run) return;
				const p = pos(e);
				const dpr = Math.min(window.devicePixelRatio || 1, 2);
				hover.current = screenToWorld(run.camera, p.x, p.y, canvas.width / dpr, canvas.height / dpr);
				return;
			}
			const p = pos(e);
			const prev = pointers.get(e.pointerId);
			moved += Math.hypot(p.x - prev.x, p.y - prev.y);
			pointers.set(e.pointerId, p);
			const run = getRuntime();
			if (!run) return;
			if (pointers.size === 2 && pinch) {
				const [a, b] = [...pointers.values()];
				const d = Math.hypot(a.x - b.x, a.y - b.y);
				run.camera.zoom = Math.max(.4, Math.min(3.2, pinch.zoom * (d / (pinch.dist || 1))));
			} else if (pan && pointers.size === 1) {
				const dx = (p.x - pan.x) / run.camera.zoom;
				const dy = (p.y - pan.y) / run.camera.zoom;
				run.camera.x = pan.cx - dx;
				run.camera.y = pan.cy - dy;
			}
		};
		const onUp = (e) => {
			const p = pos(e);
			pointers.delete(e.pointerId);
			if (pointers.size === 0 && moved < 10) {
				const run = getRuntime();
				if (!run) return;
				const dpr = Math.min(window.devicePixelRatio || 1, 2);
				const w = canvas.width / dpr;
				const h = canvas.height / dpr;
				const hit = pickAt(run.world, run.camera, p.x, p.y, w, h);
				const st = useGame.getState();
				if (st.strike) {
					fireStrike(run.world, run.world.player, st.strike, hit.x, hit.y);
					st.setStrike(null);
					refreshHud();
					return;
				}
				if (st.placingFront) {
					frontDraft.current.push({
						x: hit.x,
						y: hit.y
					});
					if (frontDraft.current.length >= 2) {
						const n = run.world.fronts.filter((f) => f.faction === run.world.player).length + 1;
						const f = createFront(run.world, `Участок ${n}`, frontDraft.current.slice());
						frontDraft.current = [];
						st.setPlacingFront(false);
						if (f) st.select("front", f.id);
						refreshHud();
					}
					return;
				}
				if (st.selectedUnit && hit.kind === "map") {
					const u = run.world.units.find((x) => x.id === st.selectedUnit);
					if (u && u.faction === run.world.player) {
						orderMove(run.world, u.id, hit.x, hit.y, false);
						return;
					}
				}
				if (hit.kind === "unit") st.select("unit", hit.id);
				else if (hit.kind === "city") st.select("city", hit.id);
				else if (hit.kind === "front") st.select("front", hit.id);
				else st.select("none");
			}
			if (pointers.size === 0) {
				pan = null;
				pinch = null;
			}
		};
		const onWheel = (e) => {
			e.preventDefault();
			const run = getRuntime();
			if (!run) return;
			const factor = e.deltaY > 0 ? .92 : 1.08;
			run.camera.zoom = Math.max(.4, Math.min(3.2, run.camera.zoom * factor));
		};
		const keys = /* @__PURE__ */ new Set();
		const onKey = (e) => {
			if (e.code === "Space") {
				e.preventDefault();
				const cur = useGame.getState().speedIndex;
				useGame.getState().setSpeedIndex(cur === 0 ? 1 : 0);
			}
			if (e.code === "Escape") useGame.getState().select("none");
			if (e.code === "Digit1") useGame.getState().setSpeedIndex(1);
			if (e.code === "Digit2") useGame.getState().setSpeedIndex(2);
			if (e.code === "Digit3") useGame.getState().setSpeedIndex(3);
			if (e.code === "Digit4") useGame.getState().setSpeedIndex(4);
			keys.add(e.code);
		};
		const onKeyUp = (e) => keys.delete(e.code);
		const panKeys = () => {
			const run = getRuntime();
			if (!run) return;
			const step = 9 / run.camera.zoom;
			if (keys.has("KeyA") || keys.has("ArrowLeft")) run.camera.x -= step;
			if (keys.has("KeyD") || keys.has("ArrowRight")) run.camera.x += step;
			if (keys.has("KeyW") || keys.has("ArrowUp")) run.camera.y -= step;
			if (keys.has("KeyS") || keys.has("ArrowDown")) run.camera.y += step;
		};
		const keyTimer = window.setInterval(panKeys, 16);
		canvas.addEventListener("pointerdown", onDown);
		canvas.addEventListener("pointermove", onMove);
		canvas.addEventListener("pointerup", onUp);
		canvas.addEventListener("pointercancel", onUp);
		canvas.addEventListener("wheel", onWheel, { passive: false });
		window.addEventListener("keydown", onKey);
		window.addEventListener("keyup", onKeyUp);
		window.addEventListener("blur", () => keys.clear());
		const onHide = () => {
			if (document.visibilityState === "hidden") persist(true);
		};
		document.addEventListener("visibilitychange", onHide);
		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
			clearInterval(keyTimer);
			canvas.removeEventListener("pointerdown", onDown);
			canvas.removeEventListener("pointermove", onMove);
			canvas.removeEventListener("pointerup", onUp);
			canvas.removeEventListener("pointercancel", onUp);
			canvas.removeEventListener("wheel", onWheel);
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("keyup", onKeyUp);
			document.removeEventListener("visibilitychange", onHide);
		};
	}, [refreshHud]);
	const world = getRuntime()?.world;
	const unit = world?.units.find((u) => u.id === selectedUnit);
	const front = world?.fronts.find((f) => f.id === selectedFront);
	const city = world?.map.cities.find((c) => c.id === selectedCity);
	const citySt = city ? world?.cities.find((c) => c.id === city.id) : null;
	const me = world?.player;
	const fac = me && world ? world.factions[me] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-dvh overflow-hidden bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: wrapRef,
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					className: "h-full w-full touch-none"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-2 p-3 pt-[max(0.75rem,env(safe-area-inset-top))]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: abortToMenu,
						className: "pointer-events-auto h-11 rounded-sm bg-surface/90 px-3 text-sm text-fg shadow-border",
						children: "Меню"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto rounded-sm bg-surface/90 px-3 py-2 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-semibold tabular-nums leading-none",
							children: hud?.dateLabel ?? "—"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-[0.65rem] uppercase tracking-wider text-muted",
							children: [
								"узлы ",
								hud ? Math.round(hud.victoryScore * 100) : 0,
								"% · силы ",
								hud?.playerPower.toFixed(0),
								" / ",
								hud?.enemyPower.toFixed(0)
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-auto flex rounded-sm bg-surface/90 p-1 shadow-border",
						children: SPEED_STEPS.map((sp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSpeedIndex(i),
							className: cn("flex h-9 min-w-9 items-center justify-center rounded-xs px-2 font-display text-xs font-semibold", speedIndex === i ? "bg-accent text-accent-fg" : "text-muted"),
							children: i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-3.5" }) : i === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 ml-px" }) : SPEED_LABEL[i]
						}, sp))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-[5.5rem] z-10 flex justify-center px-3",
				children: hud?.eventBanner ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto max-w-md rounded-md bg-surface/95 px-4 py-3 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-sm font-semibold",
						children: hud.eventBanner.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-relaxed text-muted",
						children: hud.eventBanner.body
					})]
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 z-10 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex gap-1 overflow-x-auto",
						children: [[
							["artillery", Target],
							["air", Plane],
							["drone", Crosshair],
							["missile", Rocket]
						].map(([k, Icon]) => {
							const n = k === "artillery" ? fac?.artillery : k === "air" ? fac?.air : k === "drone" ? fac?.drones : fac?.missiles;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setStrike(strike === k ? null : k),
								className: cn("flex h-11 shrink-0 items-center gap-1.5 rounded-sm px-3 text-xs shadow-border", strike === k ? "bg-danger text-fg" : "bg-surface/90 text-fg"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }),
									STRIKE_LABEL[k],
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-muted",
										children: n !== void 0 ? n.toFixed(0) : 0
									})
								]
							}, k);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								frontDraft.current = [];
								setPlacingFront(!placingFront);
							},
							className: cn("flex h-11 shrink-0 items-center gap-1.5 rounded-sm px-3 text-xs shadow-border", placingFront ? "bg-accent text-accent-fg" : "bg-surface/90 text-fg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), "Фронт"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-lg bg-surface/95 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPanelOpen(!panelOpen),
								className: "flex h-10 w-full items-center justify-center text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUp, { className: cn("size-4 transition-transform duration-200", panelOpen && "rotate-180") })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("px-4 pb-4", panelOpen ? "block" : "hidden"),
								children: unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitSheet, {
									unitId: unit.id,
									onClose: () => select("none")
								}) : front ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FrontSheet, {
									frontId: front.id,
									onClose: () => select("none")
								}) : city ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CitySheet, {
									cityId: city.id,
									owner: citySt?.owner ?? null,
									siege: citySt?.siege ?? 0,
									onClose: () => select("none")
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {})
							}),
							!panelOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between px-4 pb-3 text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Л/С ",
									hud?.manpower.toFixed(0),
									" · техника ",
									hud?.equipment.toFixed(0)
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: placingFront ? "Две точки на карте" : strike ? "Цель на карте" : "Карта · щипок · пауза" })]
							}) : null
						]
					})]
				})
			}),
			briefing && scenario ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-20 flex items-end justify-center bg-bg/70 p-4 sm:items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-xl bg-surface p-5 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[0.7rem] uppercase tracking-[0.22em] text-muted",
							children: "Задача"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl font-semibold",
							children: scenario.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: scenario.briefing
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-1.5 text-sm text-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Тап по дивизии, затем по карте — марш." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Фронт: назначьте силы и приказ участка." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Удары — не автомат. Цели выбираете вы." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "primary",
							size: "lg",
							className: "mt-5 w-full font-display",
							onClick: () => setBriefing(false),
							children: "К карте"
						})
					]
				})
			}) : null
		]
	});
}
function Overview() {
	const rt = getRuntime();
	const select = useGame((s) => s.select);
	if (!rt) return null;
	const mine = rt.world.fronts.filter((f) => f.faction === rt.world.player);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-semibold",
				children: "Участки фронта"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs text-muted",
				children: ["своих соединений ", rt.world.units.filter((u) => u.faction === rt.world.player).length]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-col gap-1.5",
			children: mine.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => select("front", f.id),
				className: "flex h-12 items-center justify-between rounded-sm bg-bg px-3 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display font-semibold",
					children: f.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted",
					children: [
						ORDER_LABEL[f.order],
						" · ",
						f.unitIds.length
					]
				})]
			}, f.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogList, {})
	] });
}
function LogList() {
	const log = useGame((s) => s.hud?.log) ?? [];
	if (!log.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-1 border-t border-border pt-3 text-xs text-muted",
		children: log.slice(0, 4).map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: e.text }, `${e.hour}-${i}`))
	});
}
function UnitSheet({ unitId, onClose }) {
	const rt = getRuntime();
	const u = rt?.world.units.find((x) => x.id === unitId);
	const refreshHud = useGame((s) => s.refreshHud);
	if (!rt || !u) return null;
	const mine = u.faction === rt.world.player;
	const fronts = rt.world.fronts.filter((f) => f.faction === u.faction);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
			title: u.name,
			onClose,
			sub: `${UNIT_LABEL[u.type]}${u.elite ? " · ударные" : ""}`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid grid-cols-3 gap-2 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					k: "Сила",
					v: `${u.strength | 0}%`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					k: "Орг.",
					v: `${u.org | 0}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					k: "Снабж.",
					v: u.supplied ? "есть" : "нет",
					warn: !u.supplied
				})
			]
		}),
		mine ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Назначить на участок"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						onClick: () => {
							assignUnitToFront(rt.world, u.id, null);
							refreshHud();
						},
						children: "Резерв"
					}), fronts.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: u.frontId === f.id,
						onClick: () => {
							assignUnitToFront(rt.world, u.id, f.id);
							refreshHud();
						},
						children: f.name
					}, f.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-muted",
					children: "Тап по карте — марш. Удерживайте паузу для точных приказов."
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-xs text-muted",
			children: "Разведка: соединение противника."
		})
	] });
}
function FrontSheet({ frontId, onClose }) {
	const rt = getRuntime();
	const f = rt?.world.fronts.find((x) => x.id === frontId);
	const refreshHud = useGame((s) => s.refreshHud);
	const select = useGame((s) => s.select);
	if (!rt || !f) return null;
	const mine = f.faction === rt.world.player;
	const units = rt.world.units.filter((u) => f.unitIds.includes(u.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
			title: f.name,
			onClose,
			sub: `${units.length} соед. · ${ORDER_LABEL[f.order]}`
		}),
		mine ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex gap-1",
			children: [
				"attack",
				"defend",
				"hold"
			].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
				active: f.order === o,
				onClick: () => {
					setFrontOrder(rt.world, f.id, o);
					refreshHud();
				},
				children: ORDER_LABEL[o]
			}, o))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: f.artillery,
					onClick: () => {
						toggleFrontSupport(rt.world, f.id, "artillery");
						refreshHud();
					},
					children: "Артподдержка"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: f.air,
					onClick: () => {
						toggleFrontSupport(rt.world, f.id, "air");
						refreshHud();
					},
					children: "Авиация"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: f.drones,
					onClick: () => {
						toggleFrontSupport(rt.world, f.id, "drones");
						refreshHud();
					},
					children: "Дроны"
				})
			]
		})] }) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-col gap-1",
			children: units.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => select("unit", u.id),
				className: "flex h-10 items-center justify-between rounded-sm bg-bg px-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: u.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums text-muted",
					children: [u.strength | 0, "%"]
				})]
			}, u.id))
		})
	] });
}
function CitySheet({ cityId, owner, siege, onClose }) {
	const rt = getRuntime();
	const city = rt?.world.map.cities.find((c) => c.id === cityId);
	const refreshHud = useGame((s) => s.refreshHud);
	if (!rt || !city) return null;
	const mine = owner === rt.world.player;
	const ownerName = owner ? rt.world.defs[owner]?.name : "нейтральный";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
			title: city.name,
			onClose,
			sub: `${ownerName}${city.victory ? ` · вес ${city.victory}` : ""}`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-wrap gap-1",
			children: [
				city.assets.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-xs bg-bg px-2 py-1 text-xs text-muted",
					children: a === "factory" ? "Завод" : a === "depot" ? "Склад" : a === "hq" ? "Штаб" : a === "port" ? "Порт" : a === "airbase" ? "Аэродром" : "Узел"
				}, a)),
				city.fort > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-xs bg-bg px-2 py-1 text-xs text-muted",
					children: ["Укрепления ", city.fort]
				}) : null,
				siege > .5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-xs bg-bg px-2 py-1 text-xs text-danger",
					children: "Бои за город"
				}) : null
			]
		}),
		mine && city.assets.includes("factory") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-1.5 text-xs text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Factory, { className: "size-3.5" }), " Сформировать часть"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-wrap gap-1",
				children: [
					"infantry",
					"mech",
					"armor",
					"artillery"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					onClick: () => {
						tryFormUnit(rt.world, rt.world.player, t, city.id);
						refreshHud();
					},
					children: UNIT_LABEL[t]
				}, t))
			})]
		}) : null
	] });
}
function Row({ title, sub, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-xl font-semibold leading-tight",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-xs text-muted",
			children: sub
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onClose,
			className: "flex size-10 items-center justify-center rounded-sm bg-bg text-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
		})]
	});
}
function Stat({ k, v, warn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-sm bg-bg px-2 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[0.65rem] uppercase tracking-wider text-subtle",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("font-display text-lg font-semibold tabular-nums", warn && "text-warn"),
			children: v
		})]
	});
}
function Chip({ children, onClick, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-9 rounded-sm px-3 text-xs", active ? "bg-accent text-accent-fg" : "bg-bg text-fg"),
		children
	});
}
var BALANCE = [
	{
		v: -2,
		label: "Тяжело"
	},
	{
		v: -1,
		label: "Сложнее"
	},
	{
		v: 0,
		label: "Как есть"
	},
	{
		v: 1,
		label: "Легче"
	},
	{
		v: 2,
		label: "Форы"
	}
];
function Setup() {
	const setup = useGame((s) => s.setup);
	const setPlayer = useGame((s) => s.setPlayer);
	const setBalance = useGame((s) => s.setBalance);
	const setScreen = useGame((s) => s.setScreen);
	const startGame = useGame((s) => s.startGame);
	const sc = scenarioById(setup.scenarioId);
	if (!sc) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-lg flex-col px-5 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setScreen("menu"),
				className: "flex h-11 w-fit items-center gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Сценарии"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in mt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted",
						children: [
							sc.dateLabel,
							" · ",
							sc.durationHint
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-semibold tracking-tight",
						children: sc.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: sc.briefing
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 font-display text-sm font-semibold uppercase tracking-[0.18em] text-subtle",
				children: "Сторона"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: sc.factions.map((f) => {
					const on = setup.player === f.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPlayer(f.id),
						className: cn("rounded-md px-3 py-4 text-left shadow-border transition-colors duration-150", on ? "bg-accent text-accent-fg" : "bg-surface text-fg hover:bg-surface-2"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-semibold",
							children: f.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("mt-1 text-xs", on ? "text-accent-fg/70" : "text-muted"),
							children: f.short
						})]
					}, f.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 font-display text-sm font-semibold uppercase tracking-[0.18em] text-subtle",
				children: "Преимущество"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: "По умолчанию — близко к балансу сценария. Сдвиг меняет силы и производство."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex gap-1",
				children: BALANCE.map((b) => {
					const on = setup.balance === b.v;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setBalance(b.v),
						className: cn("h-16 flex-1 rounded-sm px-1 text-center text-xs leading-tight transition-colors duration-150", on ? "bg-accent text-accent-fg" : "bg-surface text-muted shadow-border"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-base font-semibold",
							children: b.v === 0 ? "0" : b.v > 0 ? `+${b.v}` : b.v
						}), b.label]
					}, b.v);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				size: "lg",
				className: "mt-auto w-full font-display text-base tracking-wide",
				onClick: () => startGame(window.innerWidth, window.innerHeight),
				children: "К карте"
			})
		]
	});
}
function App() {
	const screen = useGame((s) => s.screen);
	if (screen === "setup") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Setup, {});
	if (screen === "play") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play$1, {});
	if (screen === "end") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(End, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {});
}
//#endregion
export { Home as component };
