// Udemy Optional Challenge: Frequency Challenge
// Given two postive integers, find out if the two numbbers have the same frequency of digits

//Udemy JavaScript Algorithm practice course
//write a function called sameFrequency; 
//given two positive integers, find out if the two numbers have the same frequency of digits
//must be O(N) time

const sameFrequency = (num1, num2) => {
    // changing numbers to strings
    let num1String = num1.toString();
    let num2String = num2.toString();

    // if the length of the first string doesn't match the length of the seond string, they cannont have the same frequency
    if (num1String.length !== num2String.length) return false;

    // variables to store the counts of how many a number is repeated in our string
    let numFreq1 = {};
    let numFreq2 = {};

    // grabbing one number from our first string, and evaluating it
    // if the number matches the first one then it increments the count of that number's frequency by ++, if there is no match then its frequency must only be 1
    for (let num of num1String) {
        numFreq1[num] = ++numFreq1[num] || 1
    }

    // grabbing one number from our first string and evaluating it
    // if the number matches the first one then it increments the count of that number's frequency by ++, if there is no match then its frequency must only be 1
    for (let num of num2String) {
        numFreq2[num] = ++numFreq2[num] || 1
    }

    // using the taco "key" to compare the number frequencies in each variable, if they don't match, return false
    for (let key in numFreq1) {
        // if that number isn't in the second string, there is no reason to continue, return false
        if (!key in numFreq2) {
            return false;
        }
        // if that number's frequency doesn't match the number's frequency in the second string, return false
        if (numFreq1[key] !== numFreq2[key]) {
            return false;
        }
    }

    return true;


}
console.log(sameFrequency(1234, 32100))


console.log(sameFrequency(182, 281))// true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false