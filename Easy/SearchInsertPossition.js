var searchInsert = function (nums, target) {
  let i = 0;
  while (nums[i] < target && i < nums.length) {
    i++;
  }
  return i;
};

const nums = [1, 3, 5, 6];
const target = 5;

console.log(searchInsert(nums, target));
