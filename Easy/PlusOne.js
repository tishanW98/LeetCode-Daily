var plusOneSmall = function(digits) {
  let s = 0;
  for (let i = 0; i < digits.length; i++) {
    let x = Math.pow(10, digits.length-(1+i))
    s += digits[i]*x;
  }
  let oneplus = s+1;
  let str = oneplus.toString();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(parseInt(str[i]))
  }
  return arr;
};

//----------------------------------------------//
// Correct solution for all possible test cases //
//----------------------------------------------//

var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
          digits[i]++;
          return digits;
      }
      digits[i] = 0;
  }

  const newDigits = new Array(digits.length + 1);
  newDigits[0] = 1;
  
  for (let i = 1; i < newDigits.length; i++) {
      newDigits[i] = digits[i - 1];
  }
  
  return newDigits;
};

//----------------------------------------------------------------//

var plusOneShort = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
          digits[i]++;
          return digits;
      }
      digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

const digits1 = [1,2,3]
const digits2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
const digits3 = [9]
console.log(plusOneSmall(digits1));
console.log(plusOne(digits2));
console.log(plusOneShort(digits3));