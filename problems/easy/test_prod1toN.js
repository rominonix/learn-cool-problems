import assert from 'assert'
import { prod1toN } from './prod1toN.js'

describe("prod1toN", () => {
    it("should return 120 when the function has [5] as argument ", () =>
      assert.equal(prod1toN([5]), 120));
  
    it("should return 362880 when the function has [9] as argument", () =>
      assert.equal(prod1toN([9]), 362880));
  
    it("should return 6227020800 when the function has [13] as argument", () =>
      assert.equal(prod1toN([13]), 6227020800));
  
    it("should return 3 when the function has [3] as argument", () =>
      assert.equal(prod1toN([1]), 1));
  });