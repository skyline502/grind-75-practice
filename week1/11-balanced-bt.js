//Balanced Binary Tree

/*
Given a binary tree, determine if it is height-balanced.

what is height balanced???

A height balanced binary tree is a binary tree in which the height of the left subtree and right subtree
of any node does not differ by more than 1 and both the left and right subtree are also height balanced.

so we have to return a number < 2, if number > 2 return false...



Example 1:

      3
    /   \
   9    20
      /   \
     15    7


Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:

            1
          /  \
         2    2
       /  \
      3    3
    /  \
   4    4


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false


Example 3:

Input: root = []
Output: true


Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104

*/

const isBalanced = root => {
  if (!root) { //no node so the tree is balanced.
    return true;
  }
  let diff = Math.abs(height(root.left) - height(root.right));
  return diff < 2 && isBalanced(root.left) && isBalanced(root.right);
};

const height = node => {
  if (!node) {
    return -1;
  }
  return 1 + Math.max(height(node.left), height(node.right));
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

console.log(isBalanced(a));

// Example 1:

//       3 //=> Math.abs(0 - 1) => 1 < 2 && isBalanced(9) && isBalanced(20)
//     /   \
//    9    20 //=> 1 + Math.max(0,0) => 1
//  //=>0 /   \
//      15    7
      //=> 0  //=> 0

// Input: root = [3,9,20,null,null,15,7]
// Output: true


// Example 2:

//             1 //Math.abs(2 - 0) => 2 < 2 ? False
//           /  \
//          2    2 //=> 0
//        /  \
//       3    3 //1 + Math.max(1, 0) => 2
//     /  \
//    4    4 //=> 1 + Math.max(0, 0) => 1


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
