/* ------------Create a linked list class ----------------
Walk through the linked list code in the curriculum and understand it well. 
Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.
------------------------------------------------ */
class _Node {
    constructor(values, next) {
        this.value = value
        this.next = next
    }
}


//insertion
class LinkedList {
    constructor() {
        this.head = null;
    }
insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
 
 insertBefore(newItem, nextItem) {
     let tempNode = this.head
     while (tempNode.next !== null) {
            if (tempNode.next.value == nextItem) {
         let n = new _Node(newItem)
         n.next = tempNode.next
                tempNode.next = n
         return;
     } tempNode = tempNode.next
 }};
    
 insertAfter(prevItem, newItem) {
    let tempNode = this.head;
    while (tempNode.next !== null) {
      if (tempNode.value == prevItem) {
        let n = new _Node(newItem)
        n.next = tempNode.next
        tempNode.next = n
        return;
      }
      tempNode = tempNode.next;
    }
  };
    
 insertAt(newItem, position) {
    let tempNode = this.head
    let n = new _Node(newItem)

    if (tempNode == null && position !== 0) {
      return;
    } else if (tempNode == null && position == 0) {
      insertFirst(newItem);
    } else if (tempNode !== null && position == 0) {
      n.next = this.head;
      this.head = n
      return;
    }

    let current = this.head
    let previous = null;
    let i = 0;
    while (i < position) {
      previous = current
      current = current.next
      if (current == null) {
        break;
      }
      i++;
    }
    n.next = current;
    previous.next = n;
  };

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
        while (tempNode.next !=null) {
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item,, null);
    }};
    
    find(item) { 
        let currNode = this.head;
    
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
    
            if (currNode.next === null) {
                return null;
            }
            else {       
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    ...
       

/* ------------Creating a singly linked list  ----------------
Write a function main. Within the function, using the linked list class above, create a linked list with
the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
Add Tauhida to the list.
Remove Husker from the list.
Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
Implement a function called insertAt() that inserts an item at a specific position in the linked list.
Add Athena before Boomer using your insertBefore() function.
Add Hotdog after Helo using the insertAfter() method.
Using the insertAt() method insert Kat in the 3rd position of the list.
Remove Tauhida from the list.
------------------------------------------------ */
function Main {
    const SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.find('Husker')
    SLL.remove('Husker')
 return SLL;
}

const LL =main()
insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
 
 insertBefore(newItem, nextItem) {
     let tempNode = this.head
     while (tempNode.next !== null) {
            if (tempNode.next.value == nextItem) {
         let n = new _Node(newItem)
         n.next = tempNode.next
                tempNode.next = n
         return;
     } tempNode = tempNode.next
 }};
    
 insertAfter(prevItem, newItem) {
    let tempNode = this.head;
    while (tempNode.next !== null) {
      if (tempNode.value == prevItem) {
        let n = new _Node(newItem)
        n.next = tempNode.next
        tempNode.next = n
        return;
      }
      tempNode = tempNode.next;
    }
  };
    
 insertAt(newItem, position) {
    let tempNode = this.head
    let n = new _Node(newItem)

    if (tempNode == null && position !== 0) {
      return;
    } else if (tempNode == null && position == 0) {
      insertFirst(newItem);
    } else if (tempNode !== null && position == 0) {
      n.next = this.head;
      this.head = n
      return;
    }

    let current = this.head
    let previous = null;
    let i = 0;
    while (i < position) {
      previous = current
      current = current.next
      if (current == null) {
        break;
      }
      i++;
    }
    n.next = current;
    previous.next = n;
  };

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
        while (tempNode.next !=null) {
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item,, null);
    }};
    
    find(item) { 
        let currNode = this.head;
    
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
    
            if (currNode.next === null) {
                return null;
            }
            else {       
                currNode = currNode.next;
            }
        }
        return currNode;
    }
 ....    

/* ------------Supplemental functions for a linked list
Implement the following functions that operate on your linked list class. 
Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. 
Test each function using the list created in exercise 1.

display: displays the linked list
size: returns the size of the linked list
isEmpty: finds if the list is empty or not (without using the size() function)
findPrevious: finds the node before the item you are looking for
findLast: returns the last node in the linked list
------------------------------------------------ */
 
 function display(linkedList) {
  let tempNode = linkedList.head
  // to prevent infinite loop for 
  while (tempNode !== null) {
    console.log(tempNode)
    tempNode = tempNode.next
  }
}
function getSize(linkedList) {
  let tempNode = linkedList.head
  let i = 0;
  while (tempNode !== null) {
    i += 1;
    tempNode = tempNode.next
  }

  console.log('The length of your linkedList is: ', i)
}

function isEmpty(linkedList) {
  if (linkedList.head === null) {
    console.log('Empty')
  } else {
    console.log('Not Empty');
  }
}

function findPrevious(item, linkedList) {
  let tempNode = linkedList.head;
  if (tempNode.value === item) {
    console.log('prevNode: Null')
  }
  while (tempNode.next !== null) {
    if (tempNode.next.value === item) {
      console.log('prevNode: ', tempNode)
    }
    tempNode = tempNode.next
  }
}

function findLast(linkedList) {
  let tempNode = linkedList.head;
  if (tempNode === null) {
    console.log('Unpopulated list')
    // this tempNode is above, so always first item
  }
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  console.log('Last Item: ', tempNode.value)
}
 

/* ------------Mystery program --------------
Analyze the following function (without running it in an IDE) 
to determine what problem it is trying to solve. What is the time complexity of this algorithm?
------*/
```
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

```
/* ------------Reverse a list--------------
Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). 
For this exercise, notice we are not asking you just to print the linked list in reverse or
use another linked list to store the value in reverse order. 
Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward.
BONUS: Solve this problem using both recursive and iterative algorithms.
------------------------------------------------ */

var reverseLinkedList = function(linkedlist) {
  var node = linkedlist;
  var previous = null;

  while(node) {
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node
    if (node.next){
      node = node.next
    } else {
      node = null;
    }
  }
}
    

/* ------------3rd from the end --------------
Write an algorithm to find the 3rd element from the end of a linked list. 
Note You may be tempted to add a length property to your linked list class. 
The length property is not a typical property of linked list, 
therefore don't make any modification to the linked list class that is provided to you.
------------------------------------------------ */

/* ------------Middle of a list--------------
Write an algorithm to find the middle element of a linked list. 
Note You may be tempted to add a length property to your linked list class. 
The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. 
Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list.
So, don't use either of these approaches.
------------------------------------------------ */


/* ------------Cycle in a list --------------
Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). 
For this exercise, create a linked list with the name CycleList. 
Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.

------------------------------------------------ */


/* ------------Sorting a list--------------
Write an algorithm that will sort a given linked list. 
For example given a list such as 3->2->5->7->1, your program will output the sorted version of this list which will be 1->2->3->5->7. 
You may not use another list or any other data structure such as an array to store the data.

------------------------------------------------ */






