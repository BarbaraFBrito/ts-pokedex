import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/).filter(Boolean);
}

export async function startREPL(state: State): Promise<void> {
  const { readline, commands } = state;

  readline.prompt();

  readline.on("line", async (input: string) => {
    const words = cleanInput(input);

    if (words.length === 0) {
      readline.prompt();
      return;
    }

    const commandName = words[0];
    const command = commands[commandName];
    const args = words.slice(1);

    if (!command) {
      console.log("Unknown command");
      readline.prompt();
      return;
    }

    try {
      await command.callback(state, ...args);
    } catch (error) {
      console.error("Error executing command:", error);
    }

    readline.prompt();
  });
}