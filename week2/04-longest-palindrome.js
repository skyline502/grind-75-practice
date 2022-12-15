//Longest Palindrome

/*
Given a string s which consists of lowercase or uppercase letters,
return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/

//your code here...
const longestPalindrome = s => {
  let count = {}
  for (let char of s) {
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }
  let longest = 0;
  let single = 0;
  for (let char in count) {
    if (count[char] % 2 === 0) {
      longest += count[char]
    } else if (count[char] % 2 !== 0) {
      if (count[char] > single) {
        single = count[char];
      }
    }
  }
  return longest + single;
}


//Examples:

let s = 'abccccdd';

console.log(longestPalindrome(s)) //'dccaccd' is the longest that can be built=> 7

s = 'a'

console.log(longestPalindrome(s)) //'a' => 1

s = 'bananas';

console.log(longestPalindrome(s)) // 'anana' => 5
