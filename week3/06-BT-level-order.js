/*
Given the root of a BT, return the level order
Traversal of its node values.

Example:

      3
     / \
    9   20
        / \
       15  7
Output: [[3],[9,20],[15,7]]

*/

const levelOrder = root => {
  if(!root) return [];

  const result = [[root.val]];
  const queue = [root];

  while (queue.length) {
    let current = queue.shift();
    //failing over half test cases
    //have to add level to the queue, and increment accordingly
    let level = [];

    if (current.left) {
      queue.push(current.left);
      level.push(current.left.val);
    }

    if (current.right) {
      queue.push(current.right);
      level.push(current.right.val);
    }

    if (level.length > 0) {
      result.push(level);
    }
  }

  return result;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new Node(3)
let b = new Node(9)
let c = new Node(20)
let d = new Node(15)
let e = new Node(7)

a.left = b
a.right = c
c.left = d
c.right = e

console.log(levelOrder(a));

/*

const levelOrder = root => {
  if(!root) return [];

  const result = [[root.val]];
  const queue = [[root, 0]];

  while (queue.length) {
    let [current, level] = queue.shift();
    //let level = [];

    if (current.left) {
      queue.push([current.left, level + 1]);
      if (!result[level + 1]) {
        result[level + 1] = [current.left.val]
      } else {
        result[level + 1].push(current.left.val)
      }
      
    }

    if (current.right) {
      queue.push([current.right, level+1]);

         if (!result[level + 1]) {
        result[level + 1] = [current.right.val]
      } else {
        result[level + 1].push(current.right.val)
      }
    }

    if (level.length > 0) {
      result.push(level);
    }
  }

  return result;
}

Refactored solution 

*/

