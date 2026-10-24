import { afterEach, describe, expect, test } from "vitest";
import { Cache } from "./pokecache.js";

describe("Cache", () => {
  let cache: Cache | undefined;

  afterEach(() => {
    cache?.stopReapLoop();
    cache = undefined;
  });

  test("stores and retrieves a value", () => {
    cache = new Cache(1000);

    cache.add("pokemon", "pikachu");

    expect(cache.get<string>("pokemon")).toBe("pikachu");
  });

  test("returns undefined for a missing key", () => {
    cache = new Cache(1000);

    expect(cache.get<string>("missing")).toBeUndefined();
  });

  test("replaces an existing value", () => {
    cache = new Cache(1000);

    cache.add("pokemon", "pikachu");
    cache.add("pokemon", "raichu");

    expect(cache.get<string>("pokemon")).toBe("raichu");
  });

  test("removes expired entries", async () => {
    cache = new Cache(50);

    cache.add("pokemon", "pikachu");

    await new Promise((resolve) => setTimeout(resolve, 150));

    expect(cache.get<string>("pokemon")).toBeUndefined();
  });
});