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
                result = Math.trunc(eval(prev + cur + num));
              } else {
                result = eval(prev + cur + num)
              }
          }
      }
      index++;
  }

  return result;
};

let token = ["3","11","+","5","-"];

console.log(evalRPN(token)) //9

token = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

console.log(evalRPN(token))//22

/*
simple stack solution:
function evalRPN(tokens) {
  let stack = [];
  let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
  };
  for (let t of tokens) {
    if (ops[t]) {
      let top = stack.pop();
      let second = stack.pop();
      stack.push(ops[t](second, top));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
};

Example: 

Tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']

Fourth iteration
Stack = [10,6,9,3] 
T = '+'
9+3 = 12

Stack = [10,6,12,-11] 
T = '*'

12 x -11 = -132

Stack = [10,6,-132]
T = '/'

6 / -132 = 0

Stack = [10,0]
T='*'
10 x 0 = 0

Stack = [0,17]
T ='+'

0 + 17= 17

Stack =[17,5]
T='+'

17+5=22

*/
