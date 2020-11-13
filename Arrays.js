//26. Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// loop over and compare
// slice out any duplicates
// return array w/ no duplicates, new length

numbers = [1, 1, 2]

var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i + 1] == nums[i]) {
            nums.splice(i, 1)
        }
    }
};
const answer = removeDuplicates(numbers);

console.log("Remove Duplicates Array Length: ", numbers.length)