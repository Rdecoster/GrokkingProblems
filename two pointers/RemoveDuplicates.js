/* Given an array of sorted numbers, remove all duplicates from it. You should not 
use any extra space; after removing the duplicates 
in-place return the length of the subarray that has no duplicate in it. */






//i: an sorrted array that may have duplicates
//o: the length of the sorted array 
// R:  must be done inplace to not use any extra space ( memory? )
const removeDubplicates = function (arr) {
    let leftPointer = 0;
    let rightPointer = 1;
    let currentLength = arr.length;

    // while the left pointer pointer is not on the last element of the array 

    while (leftPointer < arr.length) {
        if (arr[leftPointer] === arr[rightPointer]) {
            currentLength -= 1;
            rightPointer += 1;
        } else {
            leftPointer = rightPointer;
            rightPointer += 1;
        }
    }
    // let hash = {}
    // for (var i = 0; i < arr.length; i++) {
    //     if (hash[arr[i]] === undefined) {
    //         hash[arr[i]] = 1
    //     } else {
    //         currentLength -= 1
    //     }
    // }
    // const used = process.memoryUsage().heapUsed / 1024 / 1024;
    // console.log(`The script uses approximately ${used} MB`);
    return currentLength;
}



// test suite  


var Input = [2, 3, 3, 3, 6, 9, 9]


var output = 4

var Input2 = [2, 2, 2, 11]

var output2 = 2

var test = function (actual, expected) {
    actual = JSON.stringify(actual)
    expected = JSON.stringify(expected)
    console.log(actual === expected, `Acutal ${actual}, is equal to expected ${expected}`)
}


console.time("mysol")
test(removeDubplicates(Input), output)
test(removeDubplicates(Input2), output2)

console.timeEnd("mysol")

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB`);