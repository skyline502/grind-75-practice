/*
A phrase is a palindrome if, after converting all uppercase letters into
lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

//your code here...

//remove white space and  punctuation from string, change all to lowercase
//if string empty return true
//have a punctuation object
//start and end pointers
//if pointer is a punctuation, increment/decrement pointer
//compare both pointers
//if different return false

const isPalindrome = s => {
  let converted = s.toLowerCase().split(' ').join('').split('');
  let alphanumeric = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let start = 0;
  let end = converted.length - 1;

  while(start <= end) {
    if (!alphanumeric.includes(converted[start])) {
      console.log('does it reach here')
      converted[start] = ' ';
      console.log(converted);
      start++;
    }

    if (!alphanumeric.includes(converted[end])) {
      console.log('does it reach here')
      converted[end] = ' ';
      console.log(converted);
      end--;
    }
    if (converted[start] !== converted[end]) {
      console.log(`Start: ${converted[start]} End: ${converted[end]}`)
      return false;
    }
    start++;
    end--;
  }

  return true;
};



//Examples:
let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s)) //true;

// s = "race a car";
// console.log(isPalindrome(s)) //false;

// s = " ";
// console.log(isPalindrome(s)) //true;

s = ",.";
console.log(isPalindrome(s)); //true;

s = "......a.....";
console.log(isPalindrome(s)); //true;
