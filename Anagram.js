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

console.log(validAnagram("", "")) // true
console.log(validAnagram("aaz", "zza"))// false
console.log(validAnagram("anagram", "nagaram")) // true
console.log(validAnagram("rat", "car")) // false
console.log(validAnagram("awesome", "awesom")) // false
console.log(validAnagram("qwerty", "ytrewq")) // true
console.log(validAnagram("texttwisttime", "timetwisttext")) // true
