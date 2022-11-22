//Merge Two Sorted Lists
/*
You are given two heads of two sorted linked lists
list1 and list2.

Merge the two lists in one sorted list.  The list should
be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example:

list1 = [1, 2, 4]
list2 = [1, 3, 4]

output = [1, 1, 2, 3, 4, 4]
*/
const mergeTwoLists = (list1, list2) => {

  let temp = new ListNode(); //temporary head;
  let head = temp; //copy temporary head

  while (list1 && list2) { //while list1 and list2 are not null
      if (list1.val < list2.val) {
          temp.next = list1;
          list1 = list1.next;
      } else {
          temp.next = list2;
          list2 = list2.next;
      }
      temp = temp.next;
  }

  //once we pop out of loop, one or both list1 & list2 are null, but we have to do the final next node assignment
  if (list1) {
      temp.next = list1
  } else {
      temp.next = list2
  }

  return head.next; //we finally return head.next because head.next is our real new head;

};

//edge cases
/*
if one list is empty, return the other
both lists are empty, return null?
*/

//have head variable and assign to min of two given heads
//use two pointers
//compare pointer values
//reassign pointer next nodes accordingly
//return head

const mergeTwoLists = (list1, list2) => {

}


//Examples:
let list1 = [1, 2, 4]
let list2 = [1, 3, 4]
console.log(mergeTwoLists(list1, list2)) //=> [1, 1, 3, 4, 4];

list1 = []
list2 = []
console.log(mergeTwoLists); //=> []

list1 = []
list2 = [0]
console.log(mergeTwoLists); //=> [0]
