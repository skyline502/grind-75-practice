/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Constraints:
2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10 ^9
-10^9 <= target <= 10^9
*/

//your code here...
//use a hashmap, with number and its idx
//iterate through array,
//find complement for each num that = target
//if complement in hash, return both idx
const twoSum = (arr, target) => {
  let indices = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let complement = target - num;
    if (complement in indices) {
      return [indices[complement], i];
    } else {
      indices[num] = i;
    }
  }
}

//Examples:

//example 1

let nums = [2, 7, 11, 15]
let target = 9

console.log(twoSum(nums, target)); //=> [0, 1]
//Because nums[0] + nums[1] = 9

//example 2
nums = [3, 2, 4]
target = 6

console.log(twoSum(nums, target)); //=> [1, 2]

//example 3
nums = [3, 3]
target = 6

console.log(twoSum(nums, target)); //=> [0, 1]
