function isPresent(arr, x, index = 0) {
	// Base case: if we've checked the entire array
	if (index >= arr.length) {
		return false;
	}

	// Check if current element matches x
	if (arr[index] === x) {
		return true;
	}

	// Recurse on the rest of the array
	return isPresent(arr, x, index + 1);
}

const array = [1, 3, 5, 7, 9];
const x = 5;

console.log(isPresent(array, x)); // Output: true
console.log(isPresent(array, 6)); // Output: false
