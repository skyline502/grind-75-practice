/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

//your code here...
const isValid = (s) => {

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
