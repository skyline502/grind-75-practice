//Middle of the Linked List

/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Examples:
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

1 > 2 > 3 > 4 > 5 //mid is 3

let f = new Node(6);
e.next = f;

1 > 2 > 3 > 4 > 5 > 6 //mid is 4
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const middleNode = head => {
//   let list = [];
//   while(head) {
//     list.push(head);
//     head = head.next;
//   }

//   return list[Math.floor(list.length / 2)]
// };

//two pointer strategy:

const middleNode = head => {
  let slow = fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  /*
  1st loop

    f

    1 > 2 > 3 > 4 > 5

    s

  2nd
            f
    1 > 2 > 3 > 4 > 5
        s


  3rd
                    f
    1 > 2 > 3 > 4 > 5
            s

  out of loop
  return s = 3
  */

  return slow;
}

//Examples:
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(middleNode(a)); //3
// 1 > 2 > 3 > 4 > 5 //mid is 3

let f = new Node(6);
e.next = f;

console.log(middleNode(a)); //4
// 1 > 2 > 3 > 4 > 5 > 6 //mid is 4
