// UDEMY Singly Linked List : Push onto end of list
// should accept a value
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created nod
// Increment the length by one

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* Sample code to traverse the list, taken from the Udemy course
traverse() {
   var current= this.head;
   while (current) {
       console.log(current.val);
       current = current.next;
   }
}
*/

    push(val) {
        // creating a new node, instantiating it
        const newNode = new Node(val);
        // look for end of list by looking at length
        if (!this.head) {
            // if there is no head or tail, set new Node as both head & tail
            this.head = newNode;
            this.tail = this.head;
        } else {
            // if there is a head, take the old tail and make the next one the new node we added
            this.tail.next = newNode;
            // naming the added node as the tail
            this.tail = newNode;
        }
        // incrementing the list by 1, the added node
        this.length++
        //returning entire list
        return this;
    }




    // Udemy Singly Linked List : Pop of the tail
    // traverse the list, to find the new tail
    // loop, while there is a head, set current to equal head
    // loop until the end, set the previous as new tail
    // remove the old tail

    pop() {
        //If there is no head, list is empty, return undefined
        if (!this.head) return undefined;
        // loop through until you reach the tail
        let current = this.head;
        let prev;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        // setting the tail 
        this.tail = newTail;
        //severing the connection to the old tail
        this.tail.next = null;
        // removing the old tail from the length
        this.length--;
        // if the list is empty, set the head and tail to null
        if (this.length === 0) {
            this.head = null;
            this.tail = null
        }
        return current.val;
    }

    // Udemy Singly Linked List : Shift(remove) the Head

    shift() {
        // no nodes, return undefined
        if (!this.head) return undefined;
        // store current head in variable
        let currentHead = this.head;
        // create a new head with the next node
        this.head = currentHead.next
        // decrement lenght by 1
        this.length--;
        // return old head value
        return currentHead;
    }

    // Udemy Singly Linked List : Unshift, move current head over one and add new head to list

    unshift(val) {
        const newHead = new Node(val);
        // check if there is a head, if not set new node as both head and tail
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            //set new node's next property to the current/old head
            newHead.next = this.head;
            // set the head to the new node 
            this.head = newHead;
        }
        // increment the length by 1
        this.length++;
        //return the entire linked list
        return this;
    }

    // Udemy  Singly Linked List : Get, grabbing a node by position, manually counting, linked 
    // should accept an index
    // if it's less than zero or negative, not found
    // loop through until you find the specific index

    get(idx) {
        // if the index is less than zero, or a number higher than the length of the linked list, return null
        if (idx < 0 || idx >= this.length) {
            return null;
        }
        // starting at head of linked list, position of 0
        let currentNode = this.head;
        //looping through the list and stop at the set position
        for (let i = 0; i < idx; i++) {
            // taking the current position and moving to the next node
            currentNode = currentNode.next;
        }
        // return the node at the position
        return currentNode;

    }

    // Udemy Singly Linked List : Set, change/update the value of a node at a specific 
    // accept a value and an index
    set(idx, val) {
        // use get function to find specific 
        const theNode = this.get(idx)
        // if node is not found, return 
        if (!theNode) return false;
        // if found update teh value and return true
        theNode.val = val;
        // return true if the node updated
        return true;
    }

    // Udemy Singly Linked List : Insert, a node at a specific position
    insert(idx, val) {
        // if the index is < 0 or if index is > than the length, return false
        if (idx < 0 || idx > this.length) return false
        // if index is the same as the length, push a new node as the tail
        if (idx === this.length) {
            this.push(val)
            // if the index is 0, unshift a new node to the start of the list
        } else if (idx === 0) {
            this.unshift(val);
        } else {
            // Otherwise use the get method to accsss the node at the index -1, grabbing the previous so we can set a new prev.next
            const prev = this.get(idx - 1);
            // instantiating the new node
            let newNode = new Node(val);
            // Set next node to be the next on the old node, name the old node so that we can keep what used to come after the previous
            indexNode = prev.next
            newNode.next = indexNode;
            // Set the next property on that prior node to be the new node that we just added
            prev.next = newNode;
            // increment the length to include the new node
            this.length++;
        }
        // returning true if it did add a node
        return true;
    }

    // Udemy Singly Linked List : Remove, a node at a specific position
    remove(idx) {
        // If index is less than zero or greater than the length, return undefined
        if (idx < 0 || idx >= this.length) return null;
        // If index is same as length - 1, pop
        if (idx === this.length - 1) return this.pop();
        // If index is zero, shift
        if (idx === 0) return this.shift();
        // Otherwise, use get to find index - 1
        const prev = this.get(idx - 1);
        // Set the next property to be the node after the indexed node
        const removedNode = prev.next;
        prev.next = removedNode.next;
        // Decrement length
        this.length--;
        // Return the value of the removed node
        return removedNode.val;
    }


    // Udemy Singly Linked List : Reverse, reverse the list in place
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

            // Move the window
            prev = current;
            current = next;

        }
        // Reassign the head property
        this.head = prev;
        return this;
    }

    // Print - display the linked list in the console
    print() {
        let current = this.head;
        console.log(current.val)
        while (current.next) {
            current = current.next;
            console.log(" --> " + current.val)
        }
    }


}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("???")
list.push("GOODBYE")
list.push("!!!!")
list.push("POP")

// let t1 = performace.now();
// //console.log(list.pop())
// console.log(list.shift())
// let t2 = performance.now();
// console.log(t2 - t1);
// console.log(list);

// list.unshift("Morning");
// console.log(list);

//console.log(list.get(1))

//console.log(list);

// console.log(list.insert(1, "Inserted"));
// console.log(list);

// console.log(list.remove(3))
// console.log(list)

console.log(list.reverse());
list.print();