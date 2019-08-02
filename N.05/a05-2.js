function treeSum(arr) {
	var sum = 0;
	for(var i=0; i<arr.length; i++) {
		if(arr[i] instanceof Array) {
			sum += treeSum(arr[i]);
		} else {
			sum += arr[i];
		}
	}
	return sum;
}
console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));
console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));