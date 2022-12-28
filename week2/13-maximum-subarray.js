//Maximum subarray

/*
Given an integer array nums, find the
subarray
 which has the largest sum and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

 */

//video explanation on solution: https://youtu.be/Id_hZTV7_IA

const maxSubArray = nums => {
  let max = nums[0]; //the max

  let currentMax = nums[0];//current max

  for (let i = 1; i < nums.length; i++) {
//we reassign max and current max accordingly 
    currentMax = Math.max(nums[i], nums[i] + currentMax);
    max = Math.max(currentMax, max);
  }

  return max;
}

let nums;

nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(nums))//=> 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

nums = [1];
console.log(maxSubArray(nums))// => 1

nums = [5, 4, -1, 7, 8]
console.log(maxSubArray(nums))// => 23
//Explanation: [5, 4, -1, 7, 8] has the largest sum = 23
