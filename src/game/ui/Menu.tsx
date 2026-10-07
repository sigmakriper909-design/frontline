import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { readSave } from "../save";
import { SCENARIOS } from "../scenarios";
import { useGame } from "../store";

export function Menu() {
  const pickScenario = useGame((s) => s.pickScenario);
  const continueGame = useGame((s) => s.continueGame);
  const hasSave = useGame((s) => s.hasSave);

  useEffect(() => {
    useGame.setState({ hasSave: !!readSave() });
  }, []);

  return (
    <div className="relative flex min-h-dvh flex-col bg-bg px-5 pb-10 pt-[max(2.5rem,env(safe-area-inset-top))]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-px w-[140%] rotate-[-18deg] bg-border-strong" />
        <div className="absolute left-0 top-[42%] h-px w-full bg-border" />
        <div className="absolute bottom-32 right-[-20%] h-px w-[80%] rotate-[12deg] bg-danger/40" />
      </div>
      <header className="stagger-in relative mx-auto w-full max-w-lg">
        <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted">
          Оперативная карта
        </p>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-none tracking-tight text-fg sm:text-6xl">
          Линия
          <br />
          Фронта
        </h1>
        <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-muted">
          Реал-тайм стратегия. Плавная линия фронта, дивизии и удары поддержки. Сессия 20–40 минут.
        </p>
      </header>

      {hasSave ? (
        <div className="relative mx-auto mt-8 w-full max-w-lg">
          <Button
            variant="primary"
            size="lg"
            className="w-full font-display text-base tracking-wide"
            onClick={() => continueGame(window.innerWidth, window.innerHeight)}
          >
            Продолжить операцию
          </Button>
        </div>
      ) : null}

      <ul className="relative mx-auto mt-8 flex w-full max-w-lg flex-col gap-2">
        {SCENARIOS.map((sc) => (
          <li key={sc.id}>
            <button
              type="button"
              onClick={() => pickScenario(sc.id)}
              className="flex w-full items-stretch gap-3 rounded-lg bg-surface p-2 text-left shadow-border transition-[transform,background-color] duration-150 ease-out hover:bg-surface-2 active:scale-[0.99]"
            >
              <div className="flex w-16 shrink-0 flex-col justify-center rounded-md bg-bg px-2 py-3">
                <span className="font-display text-[0.65rem] uppercase tracking-wider text-subtle">старт</span>
                <span className="font-display text-sm font-semibold leading-tight text-accent">{sc.dateLabel}</span>
              </div>
              <div className="min-w-0 flex-1 py-2 pr-1">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-display text-lg font-semibold tracking-tight text-fg">{sc.name}</h2>
                  <ChevronRight className="size-4 shrink-0 text-subtle" />
                </div>
                <p className="mt-1 text-sm leading-snug text-muted">{sc.blurb}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
      <p className="relative mx-auto mt-auto w-full max-w-lg pt-8 text-xs leading-relaxed text-subtle">
        Симуляция. Обе стороны играбельны. Без политики вне карты.
      </p>
    </div>
  );
}
