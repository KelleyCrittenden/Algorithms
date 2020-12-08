// Udemy - Merge Sort, intermediate level, faster
// merging 2 sorter arrays
// sorting an unsorter single array

// Combination of two things, merging and sorting
// Works by decomposing an array into smaller arrays of 0-1 elements, then building up a newly sorted array
// split into single element array
// split in half, repeat, repeat until we have smaller 1 length arrays, sort, then comvbine with another 1 length array, sort, keep comvining sorted smaller 

//Merging Array
// given 2 arrays which are sorted, this helper function should create a new array which is also sorted and consists of all of the ellmetns in the two input 
// create an empty array
// take a look at the smallest values, 2 letters that start at 0, using WHILE loops
// while they are still smaller than the array length
// if the value in the first array is smaller than the value in the the second array, push the value the first array into our results and move on to the next value in the first array
// if the value in the first array is larger than the value in the second array, push the second value into our results and move onto the next value in the second array
// Once we exhaust one array, push in all remaining values from the other array


function merge(arrOne, arrTwo) {
    // variable to hold the new, sorted array
    let results = [];
    // variable to store pointer for array one... will move through array
    let i = 0;
    // variable to store pointer for array two, will move through the array
    let j = 0;
    // while both variables are less than the length of the array
    while (i < arrOne.length && j < arrTwo.length)
        // if the value from array one is less than the value from array two, push the lower(i) into our new array, and move down the line in array one
        if (arrTwo[j] > arrOne[i]) {
            results.push(arrOne[i]);
            i++;
            // if the value from array one is more than the value from array two, push the lower(j) into our new array, and move down the line in array two
        } else {
            results.push(arrTwo[j])
            j++;
            // if the length of array one is greater than the length of array two and we finish first, add the rest of array one to the results array, they are already sorted
        } while (i < arrOne.length) {
            results.push(arrOne[i])
            i++;
            // if the length of array two is greater than the length of array two and we finish first, add the rest of array two to the results array, they are already sorterd
        } while (j < arrTwo.length) {
            results.push(arrTwo[j])
            j++;
        }

    return results;
}
console.log(merge([12, 14, 16, 18, 20], [11, 13, 15, 17, 19]))

// Sorting a single array with merge sort recurssion

function mergeSort(arr) {
    // setting edgecase
    if (arr.length <= 1) return arr;
    // finding out the middle of array so that we can slice it into smaller half chunks, Floor to round down
    let mid = Math.floor(arr.length / 2)
    // setting the left side to half of the array, split into 2 pieces
    // calling mergeSort again, and breaking the left side down into even smaller arrays
    // mergeSort until we have single item array
    let left = mergeSort(arr.slice(0, mid))
    // setting the right side to the other half of the array, array is now split into 2 pieces
    // calling mergeSort again, and breaking down the right side into smaller arrays
    // mergeSort until we have single item array
    let right = mergeSort(arr.slice(mid))
    // combining the two One Element arrays, sorted, together, 2 elements long now
    return merge(left, right);
}

console.log(mergeSort([14, 17, 4, 3, 2, 89, 0]))
