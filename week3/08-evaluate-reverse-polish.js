/*

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.

*/


//pseudo code
//use stack
//pop off top two numbers when an operator is encountered, do operation
//and add to result

var evalRPN = function (tokens) {
  let result = null;
  let stack = []
  let index = 0;
  let ops = '+-/*'

  if (tokens.length === 1) {
      return Number(tokens[0]);
  }

  while (index < tokens.length) {
      let cur = tokens[index];

      if (!ops.includes(cur)) {
          stack.push(cur);
      } else {
          if (result === null && cur === '/') {
              console.log(stack, 'stack')
              let num2 = stack.pop();
              let num1 = stack.pop();
              result = Math.floor(eval(num1 + cur + num2));
          }

          else if (result === null) {
              let num2 = stack.pop();
              let num1 = stack.pop();
              let op = num1 + cur + num2;
              result = eval(op)
              console.log(result, 'result')
          } else {
              console.log(result, 'result')
              let num = stack.pop();
              let prev = result.toString();

              if (cur === '/') {
                console.log('divide');
                result = eval(num + cur + prev);
                if (result < 0) {
                  result = Math.ceil(result);
                }
                console.log(result, 'result');
              } else {
                result = eval(num + cur + prev)
              }
          }
      }
      index++;
  }

  return result;
};

let tokens = ["3","11","+","5","-"];

console.log(evalRPN(tokens)) //9

tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

console.log(evalRPN(tokens))//22
