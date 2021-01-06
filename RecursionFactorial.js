// Udemy Recursion Iterative Example
// Must have a base case, will end up in Stack Overflow

// Iterative version
// function factorial(num) {
//     let total = 1;
//     for (let i = num; i >1; i--){
//         total *= i
//     }
//     return total;
// }

//Refactoring with Recursion

// function factorial(num) {
//     // base case of 1
//     if (num === 1) return 1;
//     // recursion, 
//     return num * factorial(num - 1)
// }

// console.log(factorial(3));


// Udemy 
// Write a function that accepts a number and returns the factorial of that number
// A factorial is the product of an integer and all the integers below it
// Example: Factorail Four (4!) is equal to 24 becuase 4 * 3 * 2 * 1 = 24
// Factorial 0 (0!) is always 1

function factorial(num) {
    if (num < 0) return 0;
    if (num === 1)
        return 1;
    return num * factorial(num - 1)
}

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040