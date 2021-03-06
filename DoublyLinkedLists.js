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


    // PUSH: method to add a new node to the end

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

    // POP: removing a node from the end

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

    // SHIFT: removing a node from the beginning

    shift() {
        // if there is no head, return undefined
        if (!this.head) return undefined;
        // create varaible to hold current head
        let currentHead = this.head;
        // if there is one, then set tail and head to null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            //update the head to the next of the old head
            this.head = currentHead.next
            // set the heads previous to be null, severing connection
            this.head.prev = null;
            // set the current head next to null, severing connection
            currentHead.next = null;
        }
        //decrementing lenght to accound for removed head
        this.length--;
        //returning value of removed head
        return currentHead;
    }

    // Unshift: adding a new node to the beginning

    unshift(val) {
        //Create a new node with the value passed to the function
        var newHead = new Node(val);
        //If the length is 0, set the head and tail to the new node
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            // Else, set the prev property on the head of the list to be the new node
            this.head.prev = newHead;
            // Set the next property on the new node to be the old head
            this.head.next = this.head;
            // Update the head to be the new node
            this.head = newHead;
        }
        //Increment the lenght to account for new head
        this.length++;
        //Return list
        return this;
    }

    // Get: accessing a node by its position

    get(index) {
        // If the index is less than 0 or greater or equal to the length, return null
        if (index < 0 || index >= this.length) return null;
        // If the index is less than the lenghth divided by 2, start at the beginning
        if (index <= this.length / 2) {
            // Creating variable to hold count
            var count = 0;
            // Setting the head
            var current = this.head;
            // As long as count isn't equal to the index
            while (count != index) {
                // Traversing the list
                current = current.next;
                // Incrementing count
                count++;
            }
            // Index must be closer to tail, start there
        } else {
            // Setting current to the length of our list -1
            var count = this.length - 1;
            // Setting current to tail
            var current = this.tail;
            // As long as count isn't equal to the index
            while (count != index) {
                // Working backwards
                current = current.prev;
                // Decrementing the count
                count--;
            }

        }
        return current;
    }

    // Set: Replacing the value of a node

    set(index, value) {
        // Create a variable which is the result of the "get" method at the index passed to the function
        const foundNode = this.get(index)
        // If the "get" method returns a valid node
        if (foundNode != null) {
            // Update the value of the node with the value passed in
            foundNode.value = value;
            // Return True
            return true;
        }
        // Otherwise, return false
        return false;
    }

    // Insert: Inserting a node at a specific position

    insert(index, value) {
        // Check if it's a valid index
        if (index < 0 || index > this.length) return false;
        // If the index is 0 use unshift to add as head
        // Double bang turns it into a boolean so it displays true or false
        if (index === 0) return !!this.unshift(value);
        // If the index is the same as the length, push to be new tail
        // Double bang turns it into a boolean so it displays true or false
        if (index === this.length) return !!this.push(value);

        else {
            // Set beforeNode variable to the node right before the new node index so we can shift it
            // Using "get" method to find node 
            const beforeNode = this.get(index - 1);
            // Set next variable to the node right after the index so we can shift it
            const afterNode = beforeNode.next;
            // Set newNode variable to the value of the node to be passed in
            var newNode = new Node(value);

            // Setting the previous node to have the next value of the newNode
            beforeNode.next = newNode;
            // Setting the new node to have the before node set as the prev of our newNode
            newNode.prev = beforeNode;
            // Setting the afternode to have the prev value of our NewNode
            afterNode.prev = newNode;
            // Setting the newNode to have the next value of the afternode
            newNode.next = afterNode;
            // Increment the length to indlude the new node
            this.length++
            return true;

        }
    }

    // Remove: Removing a node by a certain position

    remove(index) {
        // If the index is invalid, return false
        if (index < 0 || index >= this.length) return undefined;
        // If the index is 0, shift off the very beginning
        if (index === 0) return !!this.shift(index)
        // If the index is the same as length -1, pop off the end
        if (index === this.length) return !!this.pop(index)

        // Use the get method to retrieve the item to be removed
        const removedNode = this.get(index)
        // Setting the prev node to a variable that is one less than our index
        const beforeNode = removedNode.prev;
        // Setting the next node to a variable
        const afterNode = removedNode.next;

        // Update the next and previous properties to remove the found node from the list
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // Severing ties to removed node
        removedNode.next = null;
        removedNode.prev = null;

        // Decrement Length to remove node
        this.length--;
        return removedNode;
    }

    // Reverse: reverse this doubly linked list

    reverse() {
        // Reassign the head -- it is now the tail
        this.tail = this.head;
        // SLIDING WINDOW
        // Create a current variable
        let current = this.tail;
        // Create a next variable
        let next;
        // Create a prev variable -- set to null so we can connect the new tail to it within the while loop
        let prev = null;
        // Loop
        while (current) {

            // Reverse the ".next" connections
            next = current.next;
            current.next = prev;

            // Reverse the ".prev" connections
            prev = current.prev;
            current.prev = next;

            // Move the window
            prev = current;
            current = next;

        }
        // Reassign the head property
        this.head = prev;

        return this;

    }

    // Print - display the doubly linked list in the console
    print() {
        let current = this.head;
        console.log(current.val)
        while (current.next) {
            current = current.next;
            console.log(" --> " + current.val)
        }
    }
}



var list = new DoublyLinkedList()
list.push(5);
list.push(10);
list.push(20);
list.push(25);
list.push(50);
list.push(75);
list.push(100);

// console.log(list.pop())
// console.log(list.shift())
// console.log(list.unshift(1))
// console.log(list.get(3))
// console.log(list.set(-1, 6))
// console.log(list.set(0, 6))
// console.log(list.insert(1, 40))
// console.log(list.remove(1))
console.log(list.reverse())


list.print();