import assert from "assert";
import { digits } from "./digits.js";

describe("digits", () => {
  it("should return [2, 3, 4, 2] when the function has [2342] as argument ", () =>
    assert.deepEqual(digits([2342]), [2, 3, 4, 2]));

  it("should return [1, 2, 3, 4, 5, 6] when the function has [123456] as argument", () =>
    assert.deepEqual(digits([123456]), [1, 2, 3, 4, 5, 6]));

  it("should return [1] when the function has [1] as argument", () =>
    assert.deepEqual(digits([1]), [1]));

  it("should return [9, 8, 1, 0, 9, 2, 8, 3, 0, 9, 1, 2] when the function has [981092830912] as argument", () =>
    assert.deepEqual(digits([981092830912]), [9, 8, 1, 0, 9, 2, 8, 3, 0, 9, 1, 2]));
});
