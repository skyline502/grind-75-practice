// 1209. Remove All Adjacent Duplicates in String II
// Medium

// 4795

// 87

// Add to List

// Share
// You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
// '''
// You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them,
// causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
// '''

// Example 1
// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.

// Example 2
// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation:
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"

// Example 3:
// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"

// stack []

// for loop
// push current letter into stack [letter, 1], if same as previous increment
// if count of letter === k, pop it off the stack
// after loop

// iterate through stack, and concatenate to result string, how many letters to result based on count
// return result string

const removeDupes = (s, k) => {
stack = []

  for (let i = 0; i < s.length; i++) {
  	let letter = s[i];
    if (stack.length === 0 || stack[stack.length - 1][0] !== letter) {
      stack.push([letter, 1])
    } else {
      stack[stack.length - 1][1] += 1;
    }

    if (stack[stack.length - 1][1] === k) {
       stack.pop();
    }
	}

  let result = '';
  for (let i = 0; i < stack.length; i++) {
    [letter, count] = [stack[i][0], stack[i][1]]
    // console.log(letter, count)
    result += letter.repeat(count);
  }

  return result;
}


//Examples:
let s = "pbbcggttciiippooaais";
console.log(removeDupes(s, 2));
// Output: "ps"

console.log(removeDupes('abcd', 2)) //abcd

console.log(removeDupes("deeedbbcccbdaa", 3))//aa
