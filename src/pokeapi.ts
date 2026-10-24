import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  private cache = new Cache(5 * 60 * 1000);

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;

    const cached = this.cache.get<ShallowLocations>(url);

    if (cached !== undefined) {
      return cached;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch locations: ${response.status}`);
    }

    const data: ShallowLocations = await response.json();

    this.cache.add(url, data);

    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

    const cached = this.cache.get<Location>(url);

    if (cached !== undefined) {
      return cached;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch location: ${response.status}`);
    }

    const data: Location = await response.json();

    this.cache.add(url, data);

    return data;
  }

  async fetchPokemon(name: string): Promise<Pokemon> {
  const url = `${PokeAPI.baseURL}/pokemon/${name}`;

  const cachedPokemon = this.cache.get<Pokemon>(url);
  if (cachedPokemon) {
    return cachedPokemon;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon: ${name}`);
  }

  const pokemon: Pokemon = await response.json();

  this.cache.add(url, pokemon);

  return pokemon;
}
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  id: number;
  name: string;
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  stats: {
  base_stat: number;
  stat: {
  name: string;
  };
  }[];
  types: {
  type: {
  name: string;
  };
  }[];
  };
  