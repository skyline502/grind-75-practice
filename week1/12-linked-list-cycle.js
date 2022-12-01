// 141. Linked List Cycle
/*

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by
continuously following the next pointer. Internally, pos is used to denote the index of the node
that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

*/

//reassign each node's value to 'done' since we know all the nodes are numbers
//if we encounter a node with a value of 'done' that means we have a cycle!

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const hasCycle = head => {
  while (head) {
    if (head.val === 'done') return true;

    head.val = 'done';
    head= head.next;
  }

  return false;
};

//examples:
let a = new Node(3);
let b = new Node(2);
let c = new Node(0);
let d = new Node(-4);

a.next = b;
b.next = c;
c.next = d;
d.next = b;

console.log(hasCycle(a)) //true;

let e = new Node(1);

console.log(hasCycle(e)) //false;
