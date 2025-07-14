function countDigit(n) {
	//handling number = 0
	if (n === 0) return 1;

    //handling negative numbers as well
	n = Math.abs(n);
	let count = 0;
	while (n > 0) {
		// n = n / 10;
		n = Math.floor(n / 10);
		count++;
	}
	return count;
}

console.log(countDigit(259));
