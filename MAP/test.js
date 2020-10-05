const assert = require('chai').assert;
const expect = require('chai').expect;
const { map1, filter1, reduce1 } = require('./script.js');
Array.prototype.map1 = map1;
Array.prototype.filter1 = filter1;
Array.prototype.reduce1 = reduce1;

describe("map1", function() {

   it("map return item + 1", function() {
      expect([1, 2, 3, 4, 5].map1(item => {
         return item + 1;
      })).deep.to.equal([2, 3, 4, 5, 6]);
   });
 
   it("map return item * 10", function() {
      expect([1, 2, 3, 4, 5].map1(item => {
         return item * 10;
      })).deep.to.equal([10, 20, 30, 40, 50]);
   });
 
});
describe("filter1", function() {

   it("filter1 return item < 4", function() {
      expect([1, 2, 3, 4, 5].filter1(item => {
         return item < 4;
      })).deep.to.equal([1, 2, 3]);
   });
 
   it("filter1 return item > 3", function() {
      expect([1, 2, 3, 4, 5].filter1(item => {
         return item > 3;
      })).deep.to.equal([4, 5]);
   });
 
});

describe("reduce1", function() {

   it("reduce1 return sum of arr", function() {
      expect([1, 2, 3, 4, 5].reduce1((acc, cur) => {
         return acc + cur;
      }, 0)).deep.to.equal(15);
   });
 
   it("reduce1 return fact", function() {
      expect([1, 2, 3, 4, 5].reduce1((acc, cur) => {
         return acc * cur;
      }, 1)).deep.to.equal(120);
   });
 
});