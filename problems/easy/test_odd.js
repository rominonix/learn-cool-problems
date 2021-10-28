import assert from 'assert'
import {odd} from './odd.js'


describe("odd", () => {
  it("should return [1, 3, 5] when the function has [1, 2, 3, 4, 5] as argument ", () =>
    assert.deepEqual(odd([1, 2, 3, 4, 5]), [1, 3, 5]));

  it("should return [] when the function has [2, 4, 6] as argument", () =>
    assert.deepEqual(odd([2, 4, 6]), []));

  it("should return [9, 13, 17, 99] when the function has [9, 13, 17, 99] as argument", () =>
    assert.deepEqual(odd([9, 13, 17, 99]), [9, 13, 17, 99]));

  it("should return [5, 182391] when the function has [0, 2, 5, 182391, 283182372] as argument", () =>
    assert.deepEqual(odd([0, 2, 5, 182391, 283182372]), [5, 182391]));
});

