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

------------------------------------------------ */

/* ------------3rd from the end --------------

------------------------------------------------ */

/* ------------Middle of a list--------------

------------------------------------------------ */


/* ------------Cycle in a list --------------

------------------------------------------------ */


/* ------------Sorting a list--------------

------------------------------------------------ */






