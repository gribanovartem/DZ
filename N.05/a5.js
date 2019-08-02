function treeSum(arr) {
	var sum = 0;
	var str = arr.join(",");
	var arr1 = str.split(",");
	for(var i=0; i<arr1.length; i++) {
		sum += +arr1[i];
	}
	return sum;
}
console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));
console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));
