var arr = [2,4,10];
Array.prototype.map1 = function map1(foo) {
    var arr1=[];
    for(var i=0; i<arr.length; i++) {
        arr1.push(foo(arr[i], i, arr));
    }
    return arr1;
};
var aaa = arr.map1(function(r,i,arr) {
    return r*r;
});
var bbb = arr.map1((r,i,arr)=> {
    return r*r;
});
 console.log(aaa);
 console.log(bbb);
