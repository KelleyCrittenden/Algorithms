
// Write a function that accepts an array of integers and a number called n
// The function should calculate the maximum sum of n consecutive elements in the array
// Make a window and move the window depeneding on the condition
// usekful for keeping track of a subset of data in an array/string
// unsorted array
// edgecase if number is greater than array length

function maxSubarraySum(arr, num) {
    // if the number is longer than the array length, return null
    if (num > arr.length)
        return null;
    // set variable to store the max sum and the temporary sum to compare the two
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum = arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))// 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) 