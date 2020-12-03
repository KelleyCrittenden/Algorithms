// Udemy - Binary Search
// ONLY WORKS ON SORTED ARRAYS

// Write a function that accepts an array and a number
// Create a left pointer at the start fo the array
// Create a right pointer at the end of the array(array.length - 1)
// While the left pointed comes before the right pointer....
// Create a pointer in the middle
// If you find the value you want, return the index
// If the value is too small, move the left pointer up
// If the value is too large, move the right pointer down
// If you never find the value, return -1

function binarySearch(arr, num) {
    // if the array length is zero, then return -1
    if (arr.length === 0) {
        return -1;
    }
    // setting left pointer to begining of array
    let left = 0;
    // length of array, -1 so we aren't out of bounds
    let right = arr.length - 1;
    // using math.floor to round down, finding the middle
    mid = Math.floor((left + right) / 2)
    // if we pick the number when we figure the middle, we return the middle index
    while (arr[mid] !== num && left <= right) {
        // if our number is less than the middle, we can adjust our middle and make our window smaller
        // so we move the end of to be the middle now, we know it has to be in that section
        // creating a smaller window by setting the right to be the middle now, cutting the window in half
        if (num < arr[mid]) {
            end = mid - 1;
            // if our number is greater than the middle we know that it cannot be in that window
            // so we need to adjust our window to the other half, move the left to be the middle plus one b/c we know it's not the nmiddle
        } else {
            left = mid + 1;
        }
        // since we have moved the left or right pointer, we need to adjust and figure out a new middle
        mid = Math.floor((left + right) / 2)
    }

    // ternary statement that if the num is the middle then return the middle, if it is not then return -1
    return arr[mid] === num ? mid : -1
}


console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 6)) //-1
