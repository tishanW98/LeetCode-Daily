var isPalindrome = function(x) {
  let str = x.toString();
  let n = str.length;
  let reversed = '';
  for(let i=n-1; i>=0;i--){
      reversed += str[i];
  }
  if(str ===  reversed){
      return true
  }else {
      return false
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));