import assert from "assert";
import { morseCode } from "./morseCode.js";

describe("morseCode", () => {
  it("should return '.- -... -.-.' when the function has ['abc'] as argument ", () =>
    assert.equal(morseCode(['abc']), '.- -... -.-.'));

  it("should return '--.- ..- .. -.-. -.-' when the function has ['quick'] as argument", () =>
    assert.equal(morseCode(['quick']), '--.- ..- .. -.-. -.-'));

  it("should return '- .... .  --.- ..- .. -.-. -.-  -... .-. --- .-- -.  ..-. --- -..-' when the function has ['the quick brown fox'] as argument", () =>
    assert.equal(morseCode(['the quick brown fox']), '- .... .  --.- ..- .. -.-. -.-  -... .-. --- .-- -.  ..-. --- -..-'));

  it("should return '... ...- . .-.. - .  .. ...  -... . - - . .-.  - .... .- -.  .-. . .- -.-. -' when the function has ['svelte is better than react'] as argument", () =>
    assert.equal(morseCode(['svelte is better than react']), '... ...- . .-.. - .  .. ...  -... . - - . .-.  - .... .- -.  .-. . .- -.-. -'));
});
