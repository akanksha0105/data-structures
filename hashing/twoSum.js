// If input array is not sorted
const twoSum = (arr, target) => {
	let map = new Map();

	for (let i = 0; i < arr.length; i++) {
		let complement = target - arr[i];
		if (map.has(complement)) {
			return [map.get(complement), i];
		}
		map.set(arr[i], i);
	}
};

// if input array is sorted

const twoSumSorted = (arr, target) => {
	let i = 0;
	j = arr.length - 1;
	while (i < j) {
		let sum = arr[i] + arr[j];
		if (sum === target) return [i + 1, j + 1];
		else if (sum > target) j--;
		else i++;
	}
	return [-1, -1];
};

console.log(twoSumSorted([2, 7, 11, 15], 9));
