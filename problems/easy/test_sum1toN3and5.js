import assert from 'assert'
import { sum1toN3and5 } from './sum1toN3and5.js'

describe("sum1toN3and5", () => {
    it("should return 8 when the function has [5] as argument ", () =>
      assert.equal(sum1toN3and5([5]), 8));
  
    it("should return 60 when the function has [17] as argument", () =>
      assert.equal(sum1toN3and5([17]), 60));
  
    it("should return 0 when the function has [1] as argument", () =>
      assert.equal(sum1toN3and5([1]), 0));
  
    it("should return 3 when the function has [3] as argument", () =>
      assert.equal(sum1toN3and5([3]), 3));
  
    it("should return 1068218 when the function has [2139] as argument", () =>
      assert.equal(sum1toN3and5([2139]), 1068218));
  });