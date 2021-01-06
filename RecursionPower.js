// Udemy Recursion Exercise - Power
// Write a function which accepts a base and an exponent
// The Function should return the power of the base to the exponent
// This function should mimic the functionality of Math.pow()
// Do not worry about negative bases and exponents

function power(base, exponent) {
    // base case of 0
    if (exponent === 0)
        return 1;
    return base * power(base, exponent - 1)
}

console.log(power(2, 0)) // 1
console.log(power(2, 2)) // 4
console.log(power(2, 4)) // 16