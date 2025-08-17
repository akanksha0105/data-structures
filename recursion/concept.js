//Sum of first n natural numbers
function sum() {
	if (n == 0) return 0;
	return n + sum(n - 1);
}
