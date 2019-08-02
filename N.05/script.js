
function treeSum(arr) {
 return arr.reduce(function(sum, current, i) {
  	if(arr[i] instanceof Array) {
  		return sum +treeSum(arr[i]);
  	}else {
  		return sum + current;
  	}
  }, 0);
    
   
}
console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));
console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));
