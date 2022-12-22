/*
Given two binary strings a and b, return their sum as a binary string.



Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"


Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

*/

// const addBinary = (a, b) => {
//   let result = BigInt('0b'+a) + BigInt('0b'+b);
//   //have to use BigInt because input numbers too large does not work with parseInt
//   return result.toString(2);
// }

//string manipulation method:
const addBinary = (a, b) => {
  a = a.split('').reverse().join('');
  b = a.split('').reverse().join('');

  let length = a.length > b.length ? a.length: b.length;
  let result = [];

  for (let i = 0; i < length; i++) {
    let num1 = Number(a[i] || 0);
    let num2 = Number(b[i] || 0);
    let current = Number(result[i] || 0) + num1 + num2;

    if (current >= 2) {
      result[i] = current % 2;
      result.push(1);
    } else {
      result[i] = current;
    }
  }

  return result.reverse().join('');
}


let a;
let b;

a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

console.log(addBinary(a, b))
