//Binary Search
/*
Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -
*/

//your code here...
//first check last number in nums, if target is > return -1;
//start, end pointer
//calculate mid point
//compare nums[mid] to target and adjust start and end point accordingly
//repeat until you find tar or start > end;
const search = (nums, tar) => {
  if (nums[nums.length - 1] < tar) {
    return -1;
  }

  if (nums.length === 1) {
    if (nums[0] === tar) return 0;
    else return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end)/2);
    // console.log(start, end)

    if (nums[mid] === tar) return mid;
    if (nums[start] === tar) return start;
    if (nums[end] === tar) return end;

    if (tar < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

//Examples:
let nums = [-1,0,3,5,9,12]
console.log(search(nums, 9))//=> 4

console.log(search(nums, 2)) // => -1
console.log(search(nums, 13)) // => -1
