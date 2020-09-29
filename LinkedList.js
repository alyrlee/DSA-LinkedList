/* ------------Create a linked list class ----------------
Walk through the linked list code in the curriculum and understand it well. 
Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.
------------------------------------------------ */

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






