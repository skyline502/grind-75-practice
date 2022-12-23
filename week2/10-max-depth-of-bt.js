//Maximum Depth of Binary Tree

/*

Given a root of a BT, return its maximum depth.

A BT maximum depth is the number of nodes along the longest path from the root
node down to the farthest leaf node.

*/

 const maxDepth = root => {
  if (!root) return 0;
  if (!root.left) return explore(root.right) + 1;
  if (!root.right) return explore(root.left) + 1;
  return Math.max(explore(root.left), explore(root.right)) + 1;
 }

 const explore = node => {
  if (!node) return 0;
  let left = explore(node.left);
  let right = explore(node.right);
  return Math.max(left, right) + 1;
 }

 class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
 }

 let a = new Node(3);
 let b = new Node(9);
 let c = new Node(20);
 let d = new Node(15);
 let e = new Node(7);

 a.left = b;
 a.right = c;
 c.left = d;
 c.right = e;

 /*
1 + 1 = 2<- 3 -> 1 + 2 = 3
          /   \
    1 <- 9    20 -> 1 + 1 = 2
            /   \
           15    7 -> 1
output = 3
*/

console.log(maxDepth(a)); //3
