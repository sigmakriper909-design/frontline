import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scenarioById } from "../scenarios";
import { useGame } from "../store";
import { cn } from "@/lib/utils";

const BALANCE = [
  { v: -2, label: "Тяжело" },
  { v: -1, label: "Сложнее" },
  { v: 0, label: "Как есть" },
  { v: 1, label: "Легче" },
  { v: 2, label: "Форы" },
];

export function Setup() {
  const setup = useGame((s) => s.setup);
  const setPlayer = useGame((s) => s.setPlayer);
  const setBalance = useGame((s) => s.setBalance);
  const setScreen = useGame((s) => s.setScreen);
  const startGame = useGame((s) => s.startGame);
  const sc = scenarioById(setup.scenarioId);
  if (!sc) return null;

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-5 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))]">
      <button
        type="button"
        onClick={() => setScreen("menu")}
        className="flex h-11 w-fit items-center gap-2 text-sm text-muted"
      >
        <ArrowLeft className="size-4" />
        Сценарии
      </button>
      <div className="stagger-in mt-2">
        <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted">
          {sc.dateLabel} · {sc.durationHint}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">{sc.name}</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">{sc.briefing}</p>
      </div>

      <h2 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.18em] text-subtle">Сторона</h2>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {sc.factions.map((f) => {
          const on = setup.player === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setPlayer(f.id)}
              className={cn(
                "rounded-md px-3 py-4 text-left shadow-border transition-colors duration-150",
                on ? "bg-accent text-accent-fg" : "bg-surface text-fg hover:bg-surface-2",
              )}
            >
              <div className="font-display text-lg font-semibold">{f.name}</div>
              <div className={cn("mt-1 text-xs", on ? "text-accent-fg/70" : "text-muted")}>{f.short}</div>
            </button>
          );
        })}
      </div>

      <h2 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.18em] text-subtle">
        Преимущество
      </h2>
      <p className="mt-1 text-xs text-muted">По умолчанию — близко к балансу сценария. Сдвиг меняет силы и производство.</p>
      <div className="mt-3 flex gap-1">
        {BALANCE.map((b) => {
          const on = setup.balance === b.v;
          return (
            <button
              key={b.v}
              type="button"
              onClick={() => setBalance(b.v)}
              className={cn(
                "h-16 flex-1 rounded-sm px-1 text-center text-xs leading-tight transition-colors duration-150",
                on ? "bg-accent text-accent-fg" : "bg-surface text-muted shadow-border",
              )}
            >
              <div className="font-display text-base font-semibold">{b.v === 0 ? "0" : b.v > 0 ? `+${b.v}` : b.v}</div>
              {b.label}
            </button>
          );
        })}
      </div>

      <Button
        variant="primary"
        size="lg"
        className="mt-auto w-full font-display text-base tracking-wide"
        onClick={() => startGame(window.innerWidth, window.innerHeight)}
      >
        К карте
      </Button>
    </div>
  );
}
