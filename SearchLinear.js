// Udemy Linear Search
// going down the line one by one and comparing/searching
// write a function that accepts an array and a value
// loop thorugh the entire array and check if the current array elelement is equal to the value
// if it is, return the index at whcich the element is found
// if the value is never found, return -1

function linearSearch(arr, num) {
  // looping through array, incrementing each time
  for (var i = 0; i < arr.length; i++) {
    // if it matches our number, return the index
    if (arr[i] === num) return i;
  }
  // if there is no match, return -1
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5], 4))

