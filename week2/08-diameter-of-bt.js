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

const diameterOfBinaryTree = (root) => {
  let diameter = 0;

  dfs(root);//helper to update the diameter for each level

  return diameter;

  function dfs(node) {
      if (!node) return 0;

      const left = dfs(node.left);
      const right = dfs(node.right);

      // update diameter at every node
      diameter = Math.max(diameter, left + right);

      // update the largest number of edge so far
      return 1 + Math.max(left, right);
  }
};


//example:

/*
               4 a diameter = 4
              /   \
          3 b     c 1
           /
        2  d
        /  \
      1 f   g 1  diameter = 2

                4 a  diameter = 5
              /   \
          3 b     c 2
           /     / \
        2  d  1 h   i 1
        /  \
      1 f   g 1          diameter = 2


*/




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

console.log(diameterOfBinaryTree(c)); //4
