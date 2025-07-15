
var isPalindrome = function(x) {
    if (x < 0) return false;
    let xCopy = x;
    let rev = 0;
    while (x > 0) {
      let rem = x % 10;
      rev = rev * 10 + rem;
      x = Math.floor(x / 10);
    }
    return rev === xCopy;
  };
  
  console.log(isPalindrome(121)); // true

  var reverse = function(x) {
    let xCopy = x;
    x = Math.abs(x);
    let rev = 0;
    while (x > 0) {
      let last = x % 10;
      rev = rev * 10 + last;
      x = Math.floor(x / 10);
    }
    if (rev > 2**31 - 1) return 0;
    return xCopy < 0 ? -rev : rev;
  };
  
  console.log(reverse(123)); // 321