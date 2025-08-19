//Sum of first n natural numbers
function sum() {
	if (n == 0) return 0;
	return n + sum(n - 1);
}

//Sum of all numbers of array using recursion
let arr = [5, 2, 6, 1, 3];

function sum(n) {
	if (n === 0) return arr[0];
	return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1)); // 17

//Sum of all odd numbers of array using recursion
let newArr = [5, 2, 6, 1, 3];

function sum(n) {
	let isOdd = newArr[n] % 2 !== 0;
	if (n === 0) return isOdd ? newArr[0] : 0;
	return (isOdd ? newArr[n] : 0) + sum(n - 1);
}

console.log(sum(newArr.length - 1)); // Output: 9
