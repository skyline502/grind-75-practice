//Lowest Common Ancestor of a Binary Search Tree

/*
Given a binary search tree (BST), find the lowest common
ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia:
“The lowest common ancestor is defined between two nodes p and q as the
lowest node in T that has both p and q as descendants (where we allow
a node to be a descendant of itself).”

Examples:

Example 1:

        6
     /    \
   2       8
  / \     / \
 0   4   7   9
    / \
   3   5

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.


Example 2:

        6
     /    \
   2       8
  / \     / \
 0   4   7   9
    / \
   3   5


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Example 3:

Input: root = [2,1], p = 2, q = 1
Output: 2


Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//your code here...
//pojo to get all the parent nodes of each node
//use queue and bfs to get all parent nodes
//after getting all nodes
//find common parent by looking in our completed parent pojo

const lowestCommonAncestor = root => {
  const ancestors = {};
  let queue = [root];

  while (queue.length) {
    let current = queue.shift();

    if (current.left) {
      queue.push(current.left);
      ancestors[current.left.val] = current.val;
    }
    if (current.right) {
      queue.push(current.right);
      ancestors[current.right.val] = current.val;
    }
  }

  return ancestors;
};


//Examples:

// Example 1:

//         6
//      /    \
//    2       8
//   / \     / \
//  0   4   7   9
//     / \
//    3   5

// root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

let a = new Node(6);
let b = new Node(2);
let c = new Node(8);
let d = new Node(0);
let e = new Node(4);
let f = new Node(7);
let g = new Node(9);
let h = new Node(3);
let i = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.left = h;
e.right = i;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);

console.log(lowestCommonAncestor(a));
