var searchInsert = function (nums, target) {
  let i = 0;
  while (nums[i] < target && i < nums.length) {
    i++;
  }
  return i;
};
// Time Complexity : O(n)

//--------------------------------------------//
// Solution with Binary Search implementation //
//--------------------------------------------//

var searchInsertBinarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
// Time Complexity : O(log n)

const nums = [1, 3, 5, 6];
const target = 5;

console.log(searchInsert(nums, target));
console.log(searchInsertBinarySearch(nums, target));
