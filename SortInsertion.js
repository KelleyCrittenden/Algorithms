// Udemy - Insertion Sort

// Builds up the the sort by gradually creating larger left sided portion which is always sorted
// inserting the element into the correct spot
// sorted section starts out as first element
// compare the second element with the one before it and swap if necessary
// continue to the next element and if it is in the incorrect order, iterate through the sorted portion and insert it
// working backwards, pretend you are working at the end of the array or middle, not the beginning

function insertionSort(array) {
    // starting at the index of 1 so that we can look back at the index of 0 and compare it to the index of 1
    for (var i = 1; i < array.length; i++) {
        // storing our current value that we are looking at in a temprary variable
        var currentVal = array[i];
        // comparing j to the one before it, if j is greater than or equal to 0, working backwards to the begining of the array
        // if j is greater than the current value we are looking at, move J to the right of the current value
        // iterates over the array backwards, done looping if the value is greater than the j value
        // conditionals to break out of loop
        for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
            // if we did have to move the value forward, we set it to the next index
            array[j + 1] = array[j]
        }
        // starting over at the last value we used plus 1, moving one more down the line
        array[j + 1] = currentVal
    }
    return array;

}

console.log(insertionSort([10, 5, 4, 18, 22, 0, 1]))
console.log(insertionSort([12, 17, 45, 100, 89, 2]))