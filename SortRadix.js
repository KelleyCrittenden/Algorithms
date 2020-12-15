// Udemy - Radix Sort Challenge

// Special Sorting Algorithm that works on lists of numbers(Binary), integer sort
// Never makes comparisons between elements
// If the numbers has more digits its larger than one with fewer digits
// Start looking at first number on the right
// Put all like numbers in buckets by what numbers is on the right, all with #2 go in the 2 bucket, not sorted into order
// Put them back in a list by what order they are in the bucket
// Now group them in buckets by the second number to the right
// Keep repeating down the line, keep sorting, and putting them in a line, repeat

// Sort Helpers
// Takes a number and position and returns the number at that position
// Switching the index to start on the right
function getDigit(num, i) {
    // Math.abs handles negative numbers
    // divide by 100, then floor it
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// How many times do we have to sort? Largest number... how many digits are in that number, that's how many times.
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Take a list of numbers and tell us which number has the most digits in it
// Returns the largest number from our count from digitCount
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    } return maxDigits;
}

// Define a function that accepts a list of numbers
// Figure out how many digits the largest number has, to figure out how many times to loop
// Loop k = 0 up to this largest number of digits
// For each iterations of the loop - create buckets for each digit(0-9)
// Please each right side number in the corresponding bucket
// Repleace our existing array with values in our buckets, starting with 0 up to 9
// Return the list at the end

function radixSort(numbers) {
    // how many times we have to loop
    let maxDigitCount = mostDigits(numbers);
    // k is set to how many times we are going to need to loop
    for (let k = 0; k < maxDigitCount; k++) {
        //making buckets with numbers 0-9
        let digitBuckets = Array.from({ length: 10 }, () => [])
        // looping over our array of numbers
        for (let i = 0; i < numbers.length; i++) {
            // grabbing the single digit to look at
            let digit = getDigit(numbers[i], k)
            // pushing numbers into buckets with their corresponding buckets
            digitBuckets[digit].push(numbers[i]);
        }
        // replacing the array with the array we pulled out of the bucket, numbers in order from where they were placed in buckets
        numbers = [].concat(...digitBuckets);
    }
    return numbers;

}
console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))