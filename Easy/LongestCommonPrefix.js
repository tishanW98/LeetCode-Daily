var longestCommonPrefix = function(strs) {
  let isCommon = true;
  let prefix = ''
for (let i = 0; i < strs[0].length; i++) {
  let ref = strs[0][i];
  for (let j = 1; j < strs.length; j++) {
    if(ref !== strs[j][i]){
      isCommon = false;
    }
  }
  if(isCommon){
    prefix += strs[0][i];
  }
}
return prefix;
};


const arr = ['flower', 'flow', 'floght', 'florida', 'float'];
console.log(longestCommonPrefix(arr));