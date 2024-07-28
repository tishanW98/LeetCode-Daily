var lengthOfLastWord = function (s) {
  let k = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") {
    i--;
  }
  while (i >= 0 && s[i] !== " ") {
    k++;
    i--;
  }

  return k;
};

//-----------------------------------------------//
//      Another solution to find the length      //
//-----------------------------------------------//

var lengthOfLastWordB = function(s) {
  const words = s.trim().split(" ");
  return words[words.length - 1].length;
};

console.log(lengthOfLastWord("Hello World")); 
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

console.log(lengthOfLastWordB("Hello World")); 
console.log(lengthOfLastWordB("   fly me   to   the moon  "));
console.log(lengthOfLastWordB("luffy is still joyboy"));