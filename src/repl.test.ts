import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
{
input: "  hello  world  ",
expected: ["hello", "world"],
},
{
input: "Charmander Bulbasaur PIKACHU",
expected: ["charmander", "bulbasaur", "pikachu"],
},
{
input: "HELLO",
expected: ["hello"],
},
{
input: "   ",
expected: [],
},
{
input: "  hello   world   pikachu  ",
expected: ["hello", "world", "pikachu"],
},
])("cleanInput($input)", ({ input, expected }) => {
test(`Expected: ${expected}`, () => {
const actual = cleanInput(input);


expect(actual).toHaveLength(expected.length);

for (const i in expected) {
  expect(actual[i]).toBe(expected[i]);
}

});
});
