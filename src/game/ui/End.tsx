import { Button } from "@/components/ui/button";
import { useGame, wipeSaveAndMenu } from "../store";
import { getRuntime } from "../session";

export function End() {
  const hud = useGame((s) => s.hud);
  const pickScenario = useGame((s) => s.pickScenario);
  const rt = getRuntime();
  const win = hud?.outcome?.kind === "victory";

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-bg px-6 text-center">
      <p className="font-display text-[0.7rem] uppercase tracking-[0.26em] text-muted">
        {hud?.dateLabel}
      </p>
      <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight">
        {win ? "Победа" : "Поражение"}
      </h1>
      <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-muted">{hud?.outcome?.reason}</p>
      <dl className="mt-8 grid w-full max-w-sm grid-cols-2 gap-2 text-left">
        <div className="rounded-md bg-surface px-4 py-3 shadow-border">
          <dt className="text-[0.65rem] uppercase tracking-wider text-subtle">Узлы</dt>
          <dd className="font-display text-2xl font-semibold tabular-nums">{Math.round((hud?.victoryScore ?? 0) * 100)}%</dd>
        </div>
        <div className="rounded-md bg-surface px-4 py-3 shadow-border">
          <dt className="text-[0.65rem] uppercase tracking-wider text-subtle">Силы</dt>
          <dd className="font-display text-2xl font-semibold tabular-nums">
            {hud?.playerPower.toFixed(0)}/{hud?.enemyPower.toFixed(0)}
          </dd>
        </div>
      </dl>
      <div className="mt-8 flex w-full max-w-sm flex-col gap-2">
        <Button
          variant="primary"
          size="lg"
          className="w-full font-display"
          onClick={() => pickScenario(rt?.world.scenarioId ?? "ua2022")}
        >
          Ещё раз
        </Button>
        <Button variant="secondary" size="lg" className="w-full font-display" onClick={() => wipeSaveAndMenu()}>
          К сценариям
        </Button>
      </div>
    </div>
  );
}
