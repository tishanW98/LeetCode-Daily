var isPalindrome = function (x) {
  let str = x.toString();
  let n = str.length;
  let reversed = "";
  for (let i = n - 1; i >= 0; i--) {
    reversed += str[i];
  }
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
};

//--------------------------------------------//
//  recursive solution for palindrome number  //
//--------------------------------------------//


var isPalindromeRecursive = function (x) {
  let str = x.toString();

  const checkPalindrome = (s, start, end) => {
    if (start >= end) {
      return true;
    }
    if (s[start] !== s[end]) {
      return false;
    }
    return checkPalindrome(s, start + 1, end - 1);
  };

  return checkPalindrome(str, 0, str.length - 1);
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindromeRecursive(121));
console.log(isPalindromeRecursive(-121));
