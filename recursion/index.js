function firstIndex(startingIndex, inputArray, element) {
	if (startingIndex === inputArray.length) return -1;

	if (inputArray[startingIndex] === element) return startingIndex;

	return firstIndex(startingIndex + 1, inputArray, element);
}

function lastIndex(endingIndex, inputArray, element) {
	if (endingIndex < 0) return -1;
	if (inputArray[endingIndex] === element) return endingIndex;
	return lastIndex(endingIndex - 1, inputArray, element);
}
let inputArray = [9, 8, 10, 8];
console.log(firstIndex(0, inputArray, 8));
console.log(lastIndex(inputArray.length - 1, inputArray, 8));
