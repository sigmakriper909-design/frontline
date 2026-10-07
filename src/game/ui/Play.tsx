import {
  ChevronsUp,
  Crosshair,
  Factory,
  Pause,
  Play as PlayIcon,
  Plane,
  Plus,
  Rocket,
  Target,
  X,
} from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pickAt, renderWorld, screenToWorld } from "../render";
import { getRuntime, persist } from "../session";
import {
  assignUnitToFront,
  createFront,
  fireStrike,
  orderMove,
  setFrontOrder,
  stepWorld,
  toggleFrontSupport,
  tryFormUnit,
} from "../sim";
import { useGame } from "../store";
import { ORDER_LABEL, SPEED_LABEL, SPEED_STEPS, STRIKE_LABEL, UNIT_LABEL, type FrontOrder, type StrikeKind, type UnitType } from "../types";
import { scenarioById } from "../scenarios";

export function Play() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
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
  const setup = useGame((s) => s.setup);
  const scenario = scenarioById(setup.scenarioId) ?? scenarioById(getRuntime()?.world.scenarioId ?? "") ?? null;
  const hover = useRef<{ x: number; y: number } | null>(null);
  const frontDraft = useRef<{ x: number; y: number }[]>([]);
  const speedRef = useRef(speedIndex);
  speedRef.current = speedIndex;

  useEffect(() => {
    if (!getRuntime()) useGame.getState().setScreen("menu");
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const rt = getRuntime();
    if (!rt) return;

    let raf = 0;
    let last = performance.now();
    let acc = 0;
    const pointers = new Map<number, { x: number; y: number }>();
    let pan: { x: number; y: number; cx: number; cy: number } | null = null;
    let pinch: { dist: number; zoom: number } | null = null;
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
      renderWorld(
        ctx,
        run.world,
        run.camera,
        w,
        h,
        { unitId: st.selectedUnit ?? undefined, frontId: st.selectedFront ?? undefined, cityId: st.selectedCity ?? undefined },
        hover.current,
        st.strike,
      );
    };

    let lastHud = 0;
    const loop = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
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
        s.t -= dt * 0.9;
      });
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const pos = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };

    const onDown = (e: PointerEvent) => {
      canvas.setPointerCapture(e.pointerId);
      const p = pos(e);
      pointers.set(e.pointerId, p);
      moved = 0;
      if (pointers.size === 1) {
        const run = getRuntime()!;
        pan = { x: p.x, y: p.y, cx: run.camera.x, cy: run.camera.y };
        pinch = null;
      } else if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinch = { dist: Math.hypot(a!.x - b!.x, a!.y - b!.y), zoom: getRuntime()!.camera.zoom };
        pan = null;
      }
    };
    const onMove = (e: PointerEvent) => {
      if (!pointers.has(e.pointerId)) {
        const run = getRuntime();
        if (!run) return;
        const p = pos(e);
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        hover.current = screenToWorld(run.camera, p.x, p.y, canvas.width / dpr, canvas.height / dpr);
        return;
      }
      const p = pos(e);
      const prev = pointers.get(e.pointerId)!;
      moved += Math.hypot(p.x - prev.x, p.y - prev.y);
      pointers.set(e.pointerId, p);
      const run = getRuntime();
      if (!run) return;
      if (pointers.size === 2 && pinch) {
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a!.x - b!.x, a!.y - b!.y);
        run.camera.zoom = Math.max(0.4, Math.min(3.2, pinch.zoom * (d / (pinch.dist || 1))));
      } else if (pan && pointers.size === 1) {
        const dx = (p.x - pan.x) / run.camera.zoom;
        const dy = (p.y - pan.y) / run.camera.zoom;
        run.camera.x = pan.cx - dx;
        run.camera.y = pan.cy - dy;
      }
    };
    const onUp = (e: PointerEvent) => {
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
          frontDraft.current.push({ x: hit.x, y: hit.y });
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

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const run = getRuntime();
      if (!run) return;
      const factor = e.deltaY > 0 ? 0.92 : 1.08;
      run.camera.zoom = Math.max(0.4, Math.min(3.2, run.camera.zoom * factor));
    };

    const keys = new Set<string>();
    const onKey = (e: KeyboardEvent) => {
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
    const onKeyUp = (e: KeyboardEvent) => keys.delete(e.code);
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

  const rt = getRuntime();
  const world = rt?.world;
  const unit = world?.units.find((u) => u.id === selectedUnit);
  const front = world?.fronts.find((f) => f.id === selectedFront);
  const city = world?.map.cities.find((c) => c.id === selectedCity);
  const citySt = city ? world?.cities.find((c) => c.id === city.id) : null;
  const me = world?.player;
  const fac = me && world ? world.factions[me] : null;

  return (
    <div className="relative h-dvh overflow-hidden bg-bg">
      <div ref={wrapRef} className="absolute inset-0">
        <canvas ref={canvasRef} className="h-full w-full touch-none" />
      </div>

      <header className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-2 p-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <button
          type="button"
          onClick={abortToMenu}
          className="pointer-events-auto h-11 rounded-sm bg-surface/90 px-3 text-sm text-fg shadow-border"
        >
          Меню
        </button>
        <div className="pointer-events-auto rounded-sm bg-surface/90 px-3 py-2 shadow-border">
          <div className="font-display text-lg font-semibold tabular-nums leading-none">{hud?.dateLabel ?? "—"}</div>
          <div className="mt-1 text-[0.65rem] uppercase tracking-wider text-muted">
            узлы {hud ? Math.round(hud.victoryScore * 100) : 0}% · силы {hud?.playerPower.toFixed(0)} / {hud?.enemyPower.toFixed(0)}
          </div>
        </div>
        <div className="pointer-events-auto flex rounded-sm bg-surface/90 p-1 shadow-border">
          {SPEED_STEPS.map((sp, i) => (
            <button
              key={sp}
              type="button"
              onClick={() => setSpeedIndex(i)}
              className={cn(
                "flex h-9 min-w-9 items-center justify-center rounded-xs px-2 font-display text-xs font-semibold",
                speedIndex === i ? "bg-accent text-accent-fg" : "text-muted",
              )}
            >
              {i === 0 ? <Pause className="size-3.5" /> : i === 1 ? <PlayIcon className="size-3.5 ml-px" /> : SPEED_LABEL[i]}
            </button>
          ))}
        </div>
      </header>

      <div className="pointer-events-none absolute inset-x-0 top-[5.5rem] z-10 flex justify-center px-3">
        {hud?.eventBanner ? (
          <div className="pointer-events-auto max-w-md rounded-md bg-surface/95 px-4 py-3 shadow-border">
            <div className="font-display text-sm font-semibold">{hud.eventBanner.title}</div>
            <p className="mt-1 text-xs leading-relaxed text-muted">{hud.eventBanner.body}</p>
          </div>
        ) : null}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto max-w-lg">
          <div className="mb-2 flex gap-1 overflow-x-auto">
            {(
              [
                ["artillery", Target],
                ["air", Plane],
                ["drone", Crosshair],
                ["missile", Rocket],
              ] as const
            ).map(([k, Icon]) => {
              const n =
                k === "artillery"
                  ? fac?.artillery
                  : k === "air"
                    ? fac?.air
                    : k === "drone"
                      ? fac?.drones
                      : fac?.missiles;
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setStrike(strike === k ? null : (k as StrikeKind))}
                  className={cn(
                    "flex h-11 shrink-0 items-center gap-1.5 rounded-sm px-3 text-xs shadow-border",
                    strike === k ? "bg-danger text-fg" : "bg-surface/90 text-fg",
                  )}
                >
                  <Icon className="size-3.5" />
                  {STRIKE_LABEL[k]}
                  <span className="tabular-nums text-muted">{n !== undefined ? n.toFixed(0) : 0}</span>
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => {
                frontDraft.current = [];
                setPlacingFront(!placingFront);
              }}
              className={cn(
                "flex h-11 shrink-0 items-center gap-1.5 rounded-sm px-3 text-xs shadow-border",
                placingFront ? "bg-accent text-accent-fg" : "bg-surface/90 text-fg",
              )}
            >
              <Plus className="size-3.5" />
              Фронт
            </button>
          </div>

          <div className="overflow-hidden rounded-lg bg-surface/95 shadow-border">
            <button
              type="button"
              onClick={() => setPanelOpen(!panelOpen)}
              className="flex h-10 w-full items-center justify-center text-muted"
            >
              <ChevronsUp className={cn("size-4 transition-transform duration-200", panelOpen && "rotate-180")} />
            </button>
            <div className={cn("px-4 pb-4", panelOpen ? "block" : "hidden")}>
              {unit ? (
                <UnitSheet
                  unitId={unit.id}
                  onClose={() => select("none")}
                />
              ) : front ? (
                <FrontSheet frontId={front.id} onClose={() => select("none")} />
              ) : city ? (
                <CitySheet
                  cityId={city.id}
                  owner={citySt?.owner ?? null}
                  siege={citySt?.siege ?? 0}
                  onClose={() => select("none")}
                />
              ) : (
                <Overview />
              )}
            </div>
            {!panelOpen ? (
              <div className="flex justify-between px-4 pb-3 text-xs text-muted">
                <span>Л/С {hud?.manpower.toFixed(0)} · техника {hud?.equipment.toFixed(0)}</span>
                <span>{placingFront ? "Две точки на карте" : strike ? "Цель на карте" : "Карта · щипок · пауза"}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {briefing && scenario ? (
        <div className="absolute inset-0 z-20 flex items-end justify-center bg-bg/70 p-4 sm:items-center">
          <div className="w-full max-w-md rounded-xl bg-surface p-5 shadow-border">
            <p className="font-display text-[0.7rem] uppercase tracking-[0.22em] text-muted">Задача</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">{scenario.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{scenario.briefing}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-fg">
              <li>Тап по дивизии, затем по карте — марш.</li>
              <li>Фронт: назначьте силы и приказ участка.</li>
              <li>Удары — не автомат. Цели выбираете вы.</li>
            </ul>
            <Button variant="primary" size="lg" className="mt-5 w-full font-display" onClick={() => setBriefing(false)}>
              К карте
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Overview() {
  const rt = getRuntime();
  const select = useGame((s) => s.select);
  if (!rt) return null;
  const mine = rt.world.fronts.filter((f) => f.faction === rt.world.player);
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-lg font-semibold">Участки фронта</h3>
        <span className="text-xs text-muted">своих соединений {rt.world.units.filter((u) => u.faction === rt.world.player).length}</span>
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        {mine.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => select("front", f.id)}
            className="flex h-12 items-center justify-between rounded-sm bg-bg px-3 text-left"
          >
            <span className="font-display font-semibold">{f.name}</span>
            <span className="text-xs text-muted">
              {ORDER_LABEL[f.order]} · {f.unitIds.length}
            </span>
          </button>
        ))}
      </div>
      <LogList />
    </div>
  );
}

function LogList() {
  const log = useGame((s) => s.hud?.log) ?? [];
  if (!log.length) return null;
  return (
    <ul className="mt-4 space-y-1 border-t border-border pt-3 text-xs text-muted">
      {log.slice(0, 4).map((e, i) => (
        <li key={`${e.hour}-${i}`}>{e.text}</li>
      ))}
    </ul>
  );
}

function UnitSheet({ unitId, onClose }: { unitId: string; onClose: () => void }) {
  const rt = getRuntime();
  const u = rt?.world.units.find((x) => x.id === unitId);
  const refreshHud = useGame((s) => s.refreshHud);
  if (!rt || !u) return null;
  const mine = u.faction === rt.world.player;
  const fronts = rt.world.fronts.filter((f) => f.faction === u.faction);
  return (
    <div>
      <Row title={u.name} onClose={onClose} sub={`${UNIT_LABEL[u.type]}${u.elite ? " · ударные" : ""}`} />
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <Stat k="Сила" v={`${u.strength | 0}%`} />
        <Stat k="Орг." v={`${u.org | 0}`} />
        <Stat k="Снабж." v={u.supplied ? "есть" : "нет"} warn={!u.supplied} />
      </div>
      {mine ? (
        <div className="mt-4">
          <p className="text-xs text-muted">Назначить на участок</p>
          <div className="mt-2 flex flex-wrap gap-1">
            <Chip onClick={() => { assignUnitToFront(rt.world, u.id, null); refreshHud(); }}>Резерв</Chip>
            {fronts.map((f) => (
              <Chip key={f.id} active={u.frontId === f.id} onClick={() => { assignUnitToFront(rt.world, u.id, f.id); refreshHud(); }}>
                {f.name}
              </Chip>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">Тап по карте — марш. Удерживайте паузу для точных приказов.</p>
        </div>
      ) : (
        <p className="mt-3 text-xs text-muted">Разведка: соединение противника.</p>
      )}
    </div>
  );
}

function FrontSheet({ frontId, onClose }: { frontId: string; onClose: () => void }) {
  const rt = getRuntime();
  const f = rt?.world.fronts.find((x) => x.id === frontId);
  const refreshHud = useGame((s) => s.refreshHud);
  const select = useGame((s) => s.select);
  if (!rt || !f) return null;
  const mine = f.faction === rt.world.player;
  const units = rt.world.units.filter((u) => f.unitIds.includes(u.id));
  return (
    <div>
      <Row title={f.name} onClose={onClose} sub={`${units.length} соед. · ${ORDER_LABEL[f.order]}`} />
      {mine ? (
        <>
          <div className="mt-3 flex gap-1">
            {(["attack", "defend", "hold"] as FrontOrder[]).map((o) => (
              <Chip key={o} active={f.order === o} onClick={() => { setFrontOrder(rt.world, f.id, o); refreshHud(); }}>
                {ORDER_LABEL[o]}
              </Chip>
            ))}
          </div>
          <div className="mt-3 flex gap-1">
            <Chip active={f.artillery} onClick={() => { toggleFrontSupport(rt.world, f.id, "artillery"); refreshHud(); }}>
              Артподдержка
            </Chip>
            <Chip active={f.air} onClick={() => { toggleFrontSupport(rt.world, f.id, "air"); refreshHud(); }}>
              Авиация
            </Chip>
            <Chip active={f.drones} onClick={() => { toggleFrontSupport(rt.world, f.id, "drones"); refreshHud(); }}>
              Дроны
            </Chip>
          </div>
        </>
      ) : null}
      <div className="mt-3 flex flex-col gap-1">
        {units.map((u) => (
          <button key={u.id} type="button" onClick={() => select("unit", u.id)} className="flex h-10 items-center justify-between rounded-sm bg-bg px-3 text-sm">
            <span>{u.name}</span>
            <span className="tabular-nums text-muted">{u.strength | 0}%</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function CitySheet({
  cityId,
  owner,
  siege,
  onClose,
}: {
  cityId: string;
  owner: string | null;
  siege: number;
  onClose: () => void;
}) {
  const rt = getRuntime();
  const city = rt?.world.map.cities.find((c) => c.id === cityId);
  const refreshHud = useGame((s) => s.refreshHud);
  if (!rt || !city) return null;
  const mine = owner === rt.world.player;
  const ownerName = owner ? rt.world.defs[owner]?.name : "нейтральный";
  const types: UnitType[] = ["infantry", "mech", "armor", "artillery"];
  return (
    <div>
      <Row title={city.name} onClose={onClose} sub={`${ownerName}${city.victory ? ` · вес ${city.victory}` : ""}`} />
      <div className="mt-3 flex flex-wrap gap-1">
        {city.assets.map((a) => (
          <span key={a} className="rounded-xs bg-bg px-2 py-1 text-xs text-muted">
            {a === "factory" ? "Завод" : a === "depot" ? "Склад" : a === "hq" ? "Штаб" : a === "port" ? "Порт" : a === "airbase" ? "Аэродром" : "Узел"}
          </span>
        ))}
        {city.fort > 0 ? <span className="rounded-xs bg-bg px-2 py-1 text-xs text-muted">Укрепления {city.fort}</span> : null}
        {siege > 0.5 ? <span className="rounded-xs bg-bg px-2 py-1 text-xs text-danger">Бои за город</span> : null}
      </div>
      {mine && city.assets.includes("factory") ? (
        <div className="mt-4">
          <p className="flex items-center gap-1.5 text-xs text-muted">
            <Factory className="size-3.5" /> Сформировать часть
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {types.map((t) => (
              <Chip
                key={t}
                onClick={() => {
                  tryFormUnit(rt.world, rt.world.player, t, city.id);
                  refreshHud();
                }}
              >
                {UNIT_LABEL[t]}
              </Chip>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Row({ title, sub, onClose }: { title: string; sub: string; onClose: () => void }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="font-display text-xl font-semibold leading-tight">{title}</h3>
        <p className="mt-0.5 text-xs text-muted">{sub}</p>
      </div>
      <button type="button" onClick={onClose} className="flex size-10 items-center justify-center rounded-sm bg-bg text-muted">
        <X className="size-4" />
      </button>
    </div>
  );
}

function Stat({ k, v, warn }: { k: string; v: string; warn?: boolean }) {
  return (
    <div className="rounded-sm bg-bg px-2 py-2">
      <div className="text-[0.65rem] uppercase tracking-wider text-subtle">{k}</div>
      <div className={cn("font-display text-lg font-semibold tabular-nums", warn && "text-warn")}>{v}</div>
    </div>
  );
}

function Chip({ children, onClick, active }: { children: ReactNode; onClick: () => void; active?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-9 rounded-sm px-3 text-xs",
        active ? "bg-accent text-accent-fg" : "bg-bg text-fg",
      )}
    >
      {children}
    </button>
  );
}


