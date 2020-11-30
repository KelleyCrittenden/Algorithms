

//Helper function Recursion
//Outer function that isn't recursive but calls a function that is

// Concatenate - link things together in a chain or series

// function collectOddValues(nums) {

//     let result = []

//     function helper(helperInput) {
//         if (helperInput.length === 0) {
//             return;
//         }
//         if (helperInput[0] % 2 !== 0) {
//             result.push(helperInput[0])
//         }
//         helper(helperInput.slice(1))
//     }
//     helper(arr)
//     return result;


// }

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])

// Pure Recursion refactoring

function collectOddValues(arr) {
    //empty array everytime it is called
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    // using concat to help build the array that is empty
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr;

}

collectOddValues([1, 2, 3, 4, 5])
