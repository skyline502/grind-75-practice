/*

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

*/


class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const btDiameter = root => {
  if (!root) return 1;
  let left = btDiameter(root.left)
  let right = btDiameter(root.right)

  return Math.max(left,right) + 1;
}

let a;
let b;
let c;
let d;
let e;

a = new Node(5)
b = new Node(4)
c = new Node(3)
d = new Node(2)
e = new Node(1)

c.left = d;
c.right = b;
d.left = e;
b.right = a;

/*
      c
     / \
    d   b
   /     \
  e       a
*/

console.log(btDiameter(c)); //4
