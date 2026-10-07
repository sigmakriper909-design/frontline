import { create } from "zustand";
import { SCENARIOS } from "./scenarios";
import { persist, snapshotHud, startRuntime, stopRuntime, tryRestore } from "./session";
import { clearSave, readSave } from "./save";
import type { HudSnap, Screen, StrikeKind } from "./types";

export interface SetupDraft {
  scenarioId: string;
  player: string;
  balance: number;
}

interface GameStore {
  screen: Screen;
  setup: SetupDraft;
  hud: HudSnap | null;
  selectedUnit: string | null;
  selectedFront: string | null;
  selectedCity: string | null;
  strike: StrikeKind | null;
  placingFront: boolean;
  speedIndex: number;
  panelOpen: boolean;
  briefing: boolean;
  hasSave: boolean;
  setScreen: (s: Screen) => void;
  pickScenario: (id: string) => void;
  setPlayer: (id: string) => void;
  setBalance: (n: number) => void;
  startGame: (w: number, h: number) => void;
  continueGame: (w: number, h: number) => boolean;
  abortToMenu: () => void;
  refreshHud: () => void;
  select: (kind: "unit" | "front" | "city" | "none", id?: string) => void;
  setStrike: (k: StrikeKind | null) => void;
  setPlacingFront: (v: boolean) => void;
  setSpeedIndex: (n: number) => void;
  setPanelOpen: (v: boolean) => void;
  setBriefing: (v: boolean) => void;
}

const first = SCENARIOS[0]!;

export const useGame = create<GameStore>((set, get) => ({
  screen: "menu",
  setup: { scenarioId: first.id, player: first.factions[0]!.id, balance: 0 },
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
      setup: { scenarioId: sc.id, player: sc.factions[0]!.id, balance: 0 },
      screen: "setup",
    });
  },
  setPlayer: (player) => set({ setup: { ...get().setup, player } }),
  setBalance: (balance) => set({ setup: { ...get().setup, balance } }),
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
      hasSave: true,
    });
  },
  continueGame: (w, h) => {
    const rt = tryRestore(w, h);
    if (!rt) return false;
    set({
      screen: "play",
      hud: snapshotHud(),
      briefing: false,
      speedIndex: 0,
      hasSave: true,
    });
    return true;
  },
  abortToMenu: () => {
    persist(true);
    stopRuntime();
    set({
      screen: "menu",
      hud: null,
      hasSave: !!readSave(),
    });
  },
  refreshHud: () => {
    const hud = snapshotHud();
    if (!hud) return;
    if (hud.outcome) {
      persist(true);
      set({ hud, screen: "end", speedIndex: 0 });
      return;
    }
    set({ hud });
  },
  select: (kind, id) => {
    if (kind === "none") {
      set({ selectedUnit: null, selectedFront: null, selectedCity: null, panelOpen: false });
      return;
    }
    set({
      selectedUnit: kind === "unit" ? id ?? null : null,
      selectedFront: kind === "front" ? id ?? null : null,
      selectedCity: kind === "city" ? id ?? null : null,
      panelOpen: true,
      placingFront: false,
    });
  },
  setStrike: (strike) => set({ strike, placingFront: false }),
  setPlacingFront: (placingFront) =>
    set({ placingFront, strike: null, selectedUnit: null, selectedFront: null }),
  setSpeedIndex: (speedIndex) => set({ speedIndex }),
  setPanelOpen: (panelOpen) => set({ panelOpen }),
  setBriefing: (briefing) => set({ briefing }),
}));

export function wipeSaveAndMenu() {
  clearSave();
  stopRuntime();
  useGame.setState({ screen: "menu", hasSave: false, hud: null });
}
