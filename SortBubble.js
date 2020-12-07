// Udemy - Bubble Sort
// Rearranging the items in an array, sorting it, into some kind of order
// Elementary level sort - not used a lot, not efficient
// largest value bubbles to the top

// easy way to use javascript sort method... which on it's own, without this function telling it what to do, doesn't work well
function numberComparre(num1, num2) {
    return num2 - num1;
}

console.log([6, 4, 15, 10].sort(numberCompare))

// loop through each item
// compare it to the one after it
// if it is larger, swap
// repeat to end,
// largest values bubbles to the top
// repeat the loop through the list
// everytime you loop through, fewer items will need to be swapped

//start looping, with variable i the end of the array towards the begining
// inner loop with variable of j begining until i -1
// compare array of j
// if arrj is greathan and arrj+1 swap those two values

// function to swap(arr, indx1, idx2) {
// var temp = arr[idx1];
// arr[idx1] = arr[idx2];
// arr[idx2] = temp;


function bubbleSort(arr) {
    // setting a variable that if the array is already sorted before we fisnish iterating throughg the array, we don't need to keep looping, nearly sorted array
    var noSwaps;
    // setting i to the last index in the array
    // as i goes down, so does j, saved us from one undefined sort a the end of the array
    for (var i = array.length; i > 0; i++) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // SWAP!
                var temp = arr[j];
                //
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
                // swap was made, so keep looping
                noSwaps = false;
            }
        }
        // if there are no swap occuring, break out of the loop
        if (noSwaps) break;
    }
    return arr
}

console.log(bubbleSort([23, 45, 6, 12, 13]));