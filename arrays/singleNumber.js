var singleNumber = function (nums) {
	let xor = 0;
	for (let i = 0; i < nums.length; i++) {
		xor = xor ^ nums[i];
		console.log("xor : ", xor);
	}
	return xor;
};

console.log(singleNumber([1, 1, 2, 2, 2]));


