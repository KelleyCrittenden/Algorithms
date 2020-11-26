// Pattern Solving



// Udemy Anagram - Given two strings write a function to determine if the second string is an anagram of the first
// Use when comparing two pieces of data

function validAnagram(first, second) {
    // if the anagrams aren't the same length then they cannot be anagrams, return false
    if (first.length != second.length) {
        return false;
    }
    //creating lookup object out of first string
    const lookup = {}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find lookup letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1
        }
    }
    return true

}

validAnagram("", "") // true
validAnagram("aaz", "zza") // false
validAnagram("anagram", "nagaram") // true
validAnagram("rat", "car") // false
validAnagram("awesome", "awesom") // false
validAnagram("qwerty", "geywrt") // true
validAnagram("texttwisttime", "timetwisttext") // true


// SORTED array with muliple pointers, comparing two to see if the sum is 0 (negative plus an equal positive)
// Implement a function that accepts a sorted array and counts the unique values in the array
// There can be negative numbers in the array but it will always be sorted

function countUniqueValues(arr) {
    // if the array length is zero, no need to do anything else
    if (arr.length === 0) return 0;
    // setting first variable to 0, the first index in the array
    var i = 0;
    // setting the second variable J to 1, the next index in the array, so we can compare them, as long as the array is longer than the the index of J
    for (var j = 1; j < arr.length; j++) {
        // if the two numbers do not match, it must be unique so increase our counter by 1
        if (arr[i] !== arr[j]) {
            // increment the left pointer by 1
            i++;
            // setting j to the value of i so that we can move down the line and contintue to compare the numbers
            arr[i] = arr[j]
        }
    }
    // returning i, the total number of unique numbers in our array
    return i + 1
}

countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7])