//Longest Palindrome

/*
Given a string s which consists of lowercase or uppercase letters,
return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/

//your code here...
const longestPalindrome = s => {
  let count = {}
  for (let char of s) { //counts all the characters and adds them to hash map
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }
  let longest = 0;
  let odd = false; //we instantiate this to false
  for (let char in count) {
    if (count[char] % 2 === 0) { //for all even counts we just add them to our longest
      longest += count[char]
    } else if (count[char] % 2 !== 0) { //if there are odd counts, we add them minus 1 and set odds to true;
      longest += count[char] - 1;
      odd = true;
    }
  }
  if (odd) { //if odd is true we return longest + 1;
      return longest + 1;
  }
  return longest;
}


//Examples:

let s = 'abccccdd';

console.log(longestPalindrome(s)) //'dccaccd' is the longest that can be built=> 7

s = 'a'

console.log(longestPalindrome(s)) //'a' => 1

s = 'bananas';

console.log(longestPalindrome(s)) // 'anana' => 5
