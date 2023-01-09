/*
Given a string s, find the length of the longest 
substring
 without repeating characters
*/

//pseudo code
/*
Longest var
Index
Iterate while index < s.length
Have a current s
Use loop 
*/

const longestSub = s => {
  let longest = ""
  let current = ""
  let i = 0

  while (i < s.length) {
    if (!current.includes(s[i])) {
      current += s[i]
    } else {
      if (longest.length < current.length) {
        longest = current
        current = s[i]
      } 
    }
    i++
  }

  if (current.length > longest.length){
    longest =  current
  }

  console.log(longest)

  return longest.length;
}

let s = "abcabcbb"

console.log(longestSub(s))//3

s=  "bbbbb"
console.log(longestSub(s))//1

s = "pwwkwe"

console.log(longestSub(s))//3
