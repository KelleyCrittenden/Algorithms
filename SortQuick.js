// Udemy - Quick Sort

// Easiest to solve through recursion
// Continually breaking up, until 1 element long array
// Works by selecting one element, called the pivot, and finding the index where the pivot should end up in the sorted array
// Move all the nubmers that are greater than the pivot to the right of it, lower numbers go to the left of the pivot... not sorted yet
// Once the pivot is positioned correctly, quick sort can be applied on either side of the pivot
// Recursivley apply quicksort again to the left and right side, continuing to break it down and find the pivot

// Go through the array, compare it to our pivot, if it is lower... keep track of it, need to know how many are lower
// Once we know how many are lower than our pivot, we can leapfrom that many places and cement our pivot at that point
// The numbers that we leapfrogged over are not yet in order

// Partition or Pivot Helper Function
// should not make a new array
// accept 3 arguments, an array, an index, and an end index(can default 0 and array.length-1)
// choose first element, to use as pivot?
// store the current pivot index in a varaible(this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// Returns the index

function pivot(array, start = 0, end = array.length + 1) {
    // basic swap function that takes two indexes and swaps them
    // created a function so that we can use it more than once easily
    // moving all of the lower elements right next to the first element that we are usign as a pivot
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    //setting a variable to equal the first element in our array
    var pivot = array[start];
    //keep track of where we are going to swap the pivot to, start at the begining
    var swapIndex = start;
    // Looping over our array, using start + 1 bc we already looked at the first element
    for (var i = start + 1; i < array.length; i++) {
        // comparing our set pivot to a single element out of our array, grabbing our lower than pivot elements
        if (pivot > array[i]) {
            // increasing our counter so we can keep track of how many elements are lower than our pivot
            swapIndex++
            // swapping the pivot element with the swapIndex, how many we counted are lower, and moving our pivot that amount in the array
            swap(array, swapIndex, i)
        }
    }
    // not swapping the pivot, pivot is the value, start is the index of that pivot
    swap(array, start, swapIndex)
    return swapIndex;
}


// Call the pivot helper on the array
// When the helper returns to you the updated pivot index, recursivley call the pivot helper on the sub array to the left of that index and the subarray to the right of that index
// Your base case occurs when you consider a subarray with less that 2 elements, 1 element left

function quickSort(array, left = 0, right = array.length - 1) {
    // setting edgcase, stop running sort when we only have one elemeent
    if (left < right) {
        // creating variable to hold the pivot using the pivot helper function
        // pivot function needs these 3 variables
        let pivotIndex = pivot(array, left, right)
        // recursively calling quicksort, only looking at left side of the array, after a pivot has been set i nthe middle
        quickSort(array, left, pivotIndex - 1)
        // recursivley calling quicksort, only looking at right side of the array
        quickSort(array, pivotIndex + 1, right)
    }
    return array;
}


console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]))