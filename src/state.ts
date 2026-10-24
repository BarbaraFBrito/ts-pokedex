import { createInterface, type Interface } from "node:readline";
import { PokeAPI } from "./pokeapi.js";
import type { CLICommand } from "./command.js";
import { getCommands } from "./command.js";
import type { Pokemon } from "./pokeapi.js";

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
  pokedex: Record<string, Pokemon>;
};

export function initState(): State {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const commands = getCommands();
  const pokeAPI = new PokeAPI();

  return {
    readline,
    commands,
    pokeAPI,
    nextLocationsURL: null,
    prevLocationsURL: null,
    pokedex: {},
  };
}