function replaceChar(s, a, b) {
	// base case
	if (s.length === 0) return "";

	// process first character, then recurse on the rest
	const smallOutput = replaceChar(s.slice(1), a, b);

	if (s[0] === a) return b + smallOutput;
	else return s[0] + smallOutput;
}

// Given a string, compute recursively a new string where all 'x' chars have been removed.
function removeX(s) {
	if (s.length === 0) return s || "";

	// process first character, then recurse on the rest
	const smallOutput = removeX(s.slice(1));

	if (s[0] === "x") return smallOutput;
	else return s[0] + smallOutput;
}

// Replace pi with 3.14
function replacePi(s) {
	if (s.length <= 1) return s;
	if (s[0] === "p" && s[1] === "i") {
		//call recursion on string length of n-2
		let smallOutput = replacePi(s.slice(2));
		return "3.14" + smallOutput;
	} else {
		//call recursion on string length of n-1 and
		// we need to append the first char as it is
		let smallOutput = replacePi(s.slice(1));
		return s[0] + smallOutput;
	}
}

console.log(replaceChar("abcxdxex", "a", "b"));
console.log(removeX("abcxdxex"));
console.log(replacePi("apiapiapi"));
