// Udemy - Selection Sort
// simsiliar to bubble sort, but instead of first placing the large values into sorted psotion, 
// it places small values into sorted position

// function to swap(arr, indx1, idx2) {
// var temp = arr[idx1];
// arr[idx1] = arr[idx2];
// arr[idx2] = temp;


// store the first element as the smalles value you've seen so far
// compare this item tot he next item in the array until you find a smaller number
// not saving value, saving index... so that we can swap, we need to know hwere it is

// if the smaller number is found, designate the smaller number to be teh new minimum nad continue until the end of the array
// if hte min is nothe valueI9index) you initially began with, swap the two values
// repeat this with the next eleemtn until the array is sorted
// shrinking the window of what we are comparing

function selectionSort(arr) {
    // looping through and using i as our base, lowest
    for (var i = 0; i < arr.length; i++) {
        //storing the lowest value
        var lowest = i;
        // looping through the array again, comparing the next index to i
        for (var j = i + 1; j < arr.length; j++) {
            //if j is less than the lowest we have set, we need to set the lowest to be equal to j, updating the value of lowest
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        //conditional to swap
        if (i !== lowest)
            // swapping logic
            var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    //returning the sorted array
    return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]))
console.log(selectionSort([-1, -3, -10, 0, 4, 7, 18, 29]))