// print 1 to n natural numbers

function print1ton(n) {
	if (n == 0) return; // don't do anything
	print1ton(n - 1);
	console.log(n);
}

//print n to 1 natural numbers
function printnto1(n) {
	if (n == 0) return; // don't do anything
	console.log(n);
	printnto1(n - 1);
}

print1ton(5);
printnto1(5);
