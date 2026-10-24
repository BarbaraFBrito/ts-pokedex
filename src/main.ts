import { initState } from "./state.js";
import { startREPL } from "./repl.js";

async function main(): Promise<void> {
  const state = initState();
  await startREPL(state);
}

main().catch((error: unknown) => {
  console.error("Fatal error:", error);
  process.exitCode = 1;
});