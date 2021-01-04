// Udemy - Doubly Linked Lists Data Structures
// Add a pointer to the previous node and to the next node
// Each node points in two directions
// Almost identical to Singly Linked Lists, except every node has another pointer, to the previous node 
// More Memory but More Flexibility

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    // PUSH: method to add a new node to the end of the doubly linked list

    push(val) {
        // creating new node
        var newNode = new Node(val);
        // if the list is empty then set new node as head and tail
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // taking old tail and setting the next to new node
            this.tail.next = newNode;
            // setting the old tail to be the previous on the new node
            newNode.prev = this.tail;
            // setting tail to be the new node
            this.tail = newNode;
        }
        // incrementing length to include new node
        this.length++
        // returning entire list
        return this;
    }

    // POP: removing a node from the end of the Doubly Linked List
    pop() {
        if (!this.head) return undefined;
        // store the current tail in a variable to return later
        let currentTail = this.tail;
        // if the length is 1 set the head and tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            // update the tail to be the previous node
        } else {
            // set the new tail next to be the prevous of the current tail
            this.tail = currentTail.prev;
            // set the tail next to be null
            this.tail.next = null;
            // taking old tail and set prev to be null
            currentTail.prev = null;
        }
        //decrement the length to remove the last node
        this.length--;
        // return the value of the removed node
        return currentTail;

    }
}




var list = new DoublyLinkedList()
list.push(5);
list.push(10);
list.push(25);
list.push(50);
list.push(100);

console.log(list.pop())


console.log(list)