import assert from "assert";
import { equalSum } from "./equalSum.js";

describe("equalSum", () => {
  it("should return [[1, 5],[2, 4]] when the function has [[1, 2, 3, 4, 5, 6], 6] as arguments ", () =>
    assert.deepEqual(equalSum([1, 2, 3, 4, 5, 6], 6), [[1, 5],[2, 4]]));

  it("should return [[4, 10],[5, 9],[6, 8]] when the function has [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14] as arguments", () =>
    assert.deepEqual(equalSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14), [[4, 10],[5, 9],[6, 8]]));

  it("should return [[2, 6],[3, 5]] when the function has [[1, 2, 3, 4, 5, 6], 8] as arguments", () =>
    assert.deepEqual(equalSum([1, 2, 3, 4, 5, 6], 8), [[2, 6],[3, 5]]));
});