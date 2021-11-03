import assert from "assert";
import { splitEvery } from "./splitEvery.js";

describe("splitEvery", () => {
  it("should return [[1, 2], [3, 4], [5, 6], [7]] when the function has [1, 2, 3, 4, 5, 6, 7], 2 as arguments ", () =>
    assert.deepEqual(splitEvery([1, 2, 3, 4, 5, 6, 7], 2), [[1, 2], [3, 4], [5, 6], [7]]));

  it("should return [[1]] when the function has [1], 1 as arguments", () =>
    assert.deepEqual(splitEvery([1], 1), [[1]]));

  it("should return [[1, 2, 3], [4, 5, 6], [7]] when the function has [1, 2, 3, 4, 5, 6, 7], 3 as arguments", () =>
    assert.deepEqual(splitEvery([1, 2, 3, 4, 5, 6, 7], 3), [[1, 2, 3], [4, 5, 6], [7]]));
});