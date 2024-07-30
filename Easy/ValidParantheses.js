var isValid = function(s) {
  if(s.length%2 !== 0 ){
    return false
  }
  let arr=[];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '{' || s[i] == '[' || s[i] == '(') {
      arr.push(s[i])      
    } else {
      if(s[i] == '}' && arr[arr.length-1] == '{' || s[i] == ')' && arr[arr.length-1] == '(' || s[i] == ']' && arr[arr.length-1] == '['){
        arr.pop();
      }else{
        return false
      }
    }
  }
  if(arr.length == 0){
    return true 
  }else {
    return false
  }
};

//----------------------------------------------------------------//
//  Simplified solution for the same problem using map function   //
//----------------------------------------------------------------//

var isValidMap = function(s) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (s[i] !== map[last]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const str = "{[{}]}"
console.log(isValid(str));
console.log(isValidMap(str));