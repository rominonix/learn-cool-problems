import assert from "assert";
import { sum1toN } from "./sum1toN.js";

describe("sum1toN", () => {
  it("should return 6 when the function has [3] as argument ", () =>
    assert.equal(sum1toN([3]), 6));

  it("should return 10 when the function has [4] as argument", () =>
    assert.equal(sum1toN([4]), 10));

  it("should return 45 when the function has [9] as argument", () =>
    assert.equal(sum1toN([9]), 45));

  it("should return 3240 when the function has [80] as argument", () =>
    assert.equal(sum1toN([80]), 3240));

  it("should return 26796 when the function has [231] as argument", () =>
    assert.equal(sum1toN([231]), 26796));

  it("should return 8086231 when the function has [4021] as argument", () =>
    assert.equal(sum1toN([4021]), 8086231));
});
