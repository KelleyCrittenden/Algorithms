// Javascript never is OOP, just uses "class like" structures
// Javascript has Prototype Based Inheritance

// class name must be capital, creating blueprint for our object
// Must be insantiated 
class Student {
    // method to create new objects must be called constructor
    constructor(firstName, lastName, year) {
        // "this" refers to the object created from that class, an instance
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        //setting default to 0
        this.tardies = 0;
        //creating empty array to hold all of our scores
        this.scores = [];
    }
    // Instance Method: method individual instance, not on the class level
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    // Instance Method
    markLate() {
        //updating our count
        this.tardies += 1;
        // conditional stating that a student will be expelled if they are tardy more than 3 times
        if (this.tardies > 3) {
            return `${this.firstName} ${this.lastName} is expelled!`
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    // Instance Method
    addScore(score) {
        // adding a score to end of the array
        this.scores.push(score);
        return this.scores
    }
    // Instance Method
    calculateAverage() {
        // using reduce to calculate 
        // storing sum in temprary variable
        let sum = this.scores.reduce(function (a, b) { return a + b })
        return sum / this.scores.length;
    }
}

// instantiating class with "new" keyword
let firstStudent = new Student("Jane", "Doe", "Second");
let secondStudent = new Student("John", "Doe", "First")


console.log(firstStudent)
console.log(firstStudent.fullName());
console.log(firstStudent.markLate())
console.log(secondStudent);
console.log(secondStudent.fullName());
console.log(secondStudent.addScore(83))
console.log(secondStudent.addScore(78))
console.log(secondStudent.scores);
console.log(secondStudent.calculateAverage())