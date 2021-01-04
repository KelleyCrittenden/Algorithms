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
    // PUSH, method to add a new node to the end of the doubly linked list
    // create a new node with the value to pass to the function
    // if the head property is null set the head and tail to the newly created node
    // if not, set the next property on the tail to be that node
    // set the previous property on the newly created node to be the old tail
    // set the tail to the be the newly created node
    // increment the length
    // return the doubly linked list

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
        this.length++
        return this;
    }
}

var list = new DoublyLinkedList()
list.push(5)
list.push(10)
list.push(25)
list.push(50)
list.push(100)


console.log(list)