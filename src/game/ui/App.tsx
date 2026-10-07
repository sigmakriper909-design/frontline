import { useGame } from "../store";
import { End } from "./End";
import { Menu } from "./Menu";
import { Play } from "./Play";
import { Setup } from "./Setup";

export function App() {
  const screen = useGame((s) => s.screen);
  if (screen === "setup") return <Setup />;
  if (screen === "play") return <Play />;
  if (screen === "end") return <End />;
  return <Menu />;
}
