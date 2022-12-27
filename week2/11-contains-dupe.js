//Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


const containsDuplicate = nums => {
  //use a set
  //compare length of nums with size of set
  //return true if size is different, false if not

  let dupes = new Set();

  for (let num of nums) {
    if (!dupes.has(num)) {
      dupes.add(num);
    }
  }

  return dupes.size !== nums.length;

}

//Examples:

let nums;

nums = [1, 2, 3, 1]

console.log(containsDuplicate(nums))//true [1, 1]

nums = [1, 2, 3, 4]
console.log(containsDuplicate(nums))//false

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
console.log(containsDuplicate(nums))//true
