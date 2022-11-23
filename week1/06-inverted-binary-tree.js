//Invert Binary Tree
/*
Given the root of a binary tree, invert the tree,
and return its root.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
Examples:

Example 1
=========
root = 4

      4
    /  \
   2    7
  / \  / \
 1  3 6   9

output = 4
      4
    /  \
   7    2
  / \  / \
 9  6 3   1

*/

//use queue
//if current node has left and right
//copy the nodes into temp vars
//reassign left to right, right to left of current node
//return root at end of while loop
//did not use this pseudo code, because recursion would be better for this

//edge cases:
//!root, return null

const invertTree = (root) => {
  if (!root) return null;

  //we copy node's left and right regardless if it is null;
  let tempLeft = root.left;
  let tempRight = root.right;
  root.left = invertTree(tempRight); //we reassign left by plugging our copied right into our function
  root.right = invertTree(tempLeft); //we reassign right by plugging our copied left into our function
  return root; //we return root at the end;
};

//Examples:
const a = new Node(4);
const b = new Node(2);
const c = new Node(7);
const d = new Node(1);
const e = new Node(3);
const f = new Node(6);
const g = new Node(9);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

console.log(invertTree(a));
