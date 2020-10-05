const map1 = function (foo) {
   let newArray = [];
   for (let item of this) {
      newArray.push(foo(item));
   }
   return newArray;
};
Array.prototype.map1 = map1;

const filter1 = function (foo) {
   let newArray = [];
   for (let item of this) {
      if (foo(item)) {
         newArray.push(item);
      }
   }
   return newArray;
};
Array.prototype.filter1 = filter1;

const reduce1 = function (foo, initVal) {
   for (let item of this) {
      initVal = foo(initVal, item)
   }
   return initVal;
};
Array.prototype.reduce1 = reduce1;

module.exports = {
   map1,
   filter1,
   reduce1,
};
