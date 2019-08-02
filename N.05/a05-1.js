function treeSum(arr) {
	var sum = 0;
	arr.forEach(function(item,i) {
		if(arr[i] instanceof Array) {
			sum += treeSum(item);
		} else {
			sum += item;
		}
	});
	return sum;
}



console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));
console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));