import assert from "assert";
import { even } from "./even.js";

describe("even", () => {
  it("should return [2, 4] when the function has [1, 2, 3, 4, 5] as argument", () =>
    assert.deepEqual(even([1, 2, 3, 4, 5]), [2, 4]));

  it("should return [2, 4, 6] when the function has [2, 4, 6] as argument", () =>
    assert.deepEqual(even([2, 4, 6]), [2, 4, 6]));

  it("should return [] when the function has [1, 5, 9] as argument", () =>
    assert.deepEqual(even([1, 5, 9]), []));

  it("should return [0, 2, 283182372] when the function has [0, 2, 5, 182391, 283182372] as argument", () =>
    assert.deepEqual(even([0, 2, 5, 182391, 283182372]), [0, 2, 283182372]));
});
