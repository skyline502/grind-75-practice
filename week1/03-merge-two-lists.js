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

//your code here...
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
