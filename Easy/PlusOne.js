var plusOne = function(digits) {
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

const digits = [1,2,3]
console.log(plusOne(digits));