//Ransom Note

/*
Given two strings ransomNote and magazine, return true if
ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

//your code here...
//if ransomNote.length > magazine length return false
//have a count pojo that counts the chars in ransomNote
//iterate through magazine characters and subracting 1 from our pojo for each occurance in the pojo
//iterate through pojo, and if count !== 0 return false
//return true at the end

const canConstruct = (note, mag) => {
  if (note.length > mag.length) return false;

  let count = {};

  for (let char of note) {
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char] += 1;
    }
  }

  for (let char of mag) {
    if (count[char]) {
      count[char] -= 1;
    }
  }

  for (let letter in count) {
    if (count[letter] !== 0) {
      return false;
    }
  }

  return true;
};

//examples:

console.log(canConstruct('aa', 'aab'))//true
console.log(canConstruct('a', 'b'))//false
console.log(canConstruct('aa', 'ab'))//false
