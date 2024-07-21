var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] !== nums[i]) {
          nums[k] = nums[i];
          k++;
      }
  }
  return k;
};

const nums = [0,0,1,1,1,2,2,3,3,4];
const k = removeDuplicates(nums);
console.log(k);
console.log(nums.slice(0, k));



//----------------------------------------------------------------//
//  Other solution for only get duplication removed array output  //
//----------------------------------------------------------------//


var removeDuplicatesArr = function(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if(i == 0 || nums[i-1] !== nums[i]){
      arr.push(nums[i])
    }
  }
  return arr;
};

const numbers = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicatesArr(numbers));