import { createFileRoute } from "@tanstack/react-router";
import { App } from "@/game/ui/App";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <App />;
}
