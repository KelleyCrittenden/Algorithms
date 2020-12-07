// Udemy - Naive String Search

// Count the number of times a smaller string appears in a longer string
// Loop over the longer string
// longer string, pattern variables
// loop over the shorter string, nested loop
// If the chareactres don't match break out of the inner loop
// if the charectors do match, keep going
// if you complete the inner loop and find a amtch, increment the count of matches
// return the count

function searchNaiveString(string, pattern) {
    // setting variable to hold the count of how many times the pattern is seen within the string
    var counter = 0;
    // looping through the bigger string
    for (var i = 0; i < string.length; i++) {
        // looping through the pattern, while the index stays the same in the string
        for (var j = 0; j < pattern.length; j++) {
            // looking ahead by adding j + i to go the next index in the string, looking for matches
            // if they don't match break out of the pattern and start over again, resetting J, I moves on
            if (pattern[j] !== string[i + j]) break;
            // we get to the last letter of the pattern, then we know that we finished and it went through and matched all of the pattern
            // length is greater than the index b/c the index starts at 0 so we subtract one
            // incrementring counter
            if (j === pattern.length - 1) counter++;
        }
    }
    return counter;
}

console.log(searchNaiveString("abcdefgabcdefg", "abc"));

