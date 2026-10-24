import type { State } from "./state.js";

export async function commandCatch(
  state: State,
  ...args: string[]
): Promise<void> {
  if (args.length === 0) {
    console.log("Usage: catch <pokemon>");
    return;
  }

  const pokemonName = args[0];

  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);

  const catchChance = 1 / (1 + pokemon.base_experience / 100);

  if (Math.random() < catchChance) {
    state.pokedex[pokemon.name] = pokemon;
    console.log(`${pokemon.name} was caught!`);
  } else {
    console.log(`${pokemon.name} escaped!`);
  }
}