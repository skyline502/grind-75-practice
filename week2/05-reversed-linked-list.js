// Reverse Linked List
/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


const reverseList = head => {
  let prev = null; //we set a previous var to null;

  while(head) { //while head is not null;
    let next = head.next; //we instantiate a temp next var to the current heads next
    head.next = prev; //reassing current head's next to prev
    prev = head; //reassign prev to current head;
    head = next; //then reassign head to next
  }
  return prev; //we return prev once we kick out of loop!
}

let a;
let b;
let c;
let d;
let e;

a = new Node(1);
b = new Node(2);
c = new Node(3);
d = new Node(4);
e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(reverseList(a));
