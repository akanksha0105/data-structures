// x to the power n

function power(x, n) {
	if (n == 0) return 1;
	// if (n == 1) return x;

	let smallOutput = power(x, n - 1);

	let bigOutput = x * smallOutput;
	return bigOutput;
}

console.log(power(3, 4));
