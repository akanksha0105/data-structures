const reverseArray = (nums) => {
	let n = nums.length;
	if (n <= 1) return nums;
	for (let i = 0; i < n / 2; i++) {
		let temp = nums[i];
		nums[i] = nums[n - 1 - i];
		nums[n - i - 1] = temp;
	}
	console.log("result : ", nums);
	return;
};

reverseArray([1, 2, 3, 4]);
