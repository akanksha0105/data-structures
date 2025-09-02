const bubbleSort = (arr) => {
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		let swapped = false;
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}

		if (swapped == false) break;
	}

	console.log("result :", arr);
};

let arr = [5, 6, 1, 2, 3];
bubbleSort(arr);
