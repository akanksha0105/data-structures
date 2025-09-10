function checkIfArrayIsSorted(arr, startingIndex) {
	if (startingIndex === arr.length - 1) return true; // array contains only one element, so it will be sorted

	if (arr[startingIndex] > arr[startingIndex + 1]) return false;
	let smallOutput = checkIfArrayIsSorted(arr, startingIndex + 1);
	return smallOutput;
}
