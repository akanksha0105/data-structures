//Factorial of number

function factorial(n) {
	if (n == 0) return 1;
	let smallOutput = factorial(n - 1);
	let largeOutput = n * smallOutput;
	return largeOutput;
}

console.log(factorial(5));
