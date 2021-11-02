import assert from "assert";
import { totalList } from "./totalList.js";

describe("totalList", () => {
  it("should return 15 when the function has [1, 2, 3, 4, 5] as argument ", () =>
    assert.equal(totalList([1, 2, 3, 4, 5]), 15));

  it("should return 21 when the function has [1, 2, 3, 4, 5, 6] as argument", () =>
    assert.equal(totalList([1, 2, 3, 4, 5, 6]), 21));

  it("should return 1 when the function has [1] as argument", () =>
    assert.equal(totalList([1]), 1));

  it("should return 854 when the function has [1, 3, 5, 123, 331, 391, 0] as argument", () =>
    assert.equal(totalList([1, 3, 5, 123, 331, 391, 0]), 854 ));
});