//Valid Anagram
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

Examples:

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

//your code here...
//check if both lengths are equal, if not, false
//make an object with all letters and their count for both strings
//iterate through one of the objects and compare with other
//return true or false depending if they are equal

const isAnagram = (a, b) => {

};

let a = 'rat';
let b = 'car';
console.log(isAnagram(a, b));//false

let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s, t)); //true;
