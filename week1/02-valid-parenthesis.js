/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

//your code here...
//have a hash map with all closing brackets with open brackets as their values
//use a stack
//iterate through string
//if current character is opening bracket, push into stack
//for each closing bracket we find,
//check if top of the stack is its opening bracket
//if it is not return false
const isValid = (s) => {
  let complement = {
    ']': '[',
    '}': '{',
    ')': '('
  }

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in complement) {
      if (complement[char] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

//Examples:
// Example 1:

let s = "()"
console.log(isValid(s));
//true

// Example 2:

s = "()[]{}"
console.log(isValid(s));
//true
// Example 3:

s = "(]"
console.log(isValid(s));
//false
