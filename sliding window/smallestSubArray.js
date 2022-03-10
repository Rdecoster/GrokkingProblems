//Given an array of positive numbers and a positive number ‘S,’ 
//find the length of the smallest contiguous subarray 
//whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

//non fixed window size

//input an array, and the target sum or greater of the element in the sub array
//output the length of the smallest array whos elements must be equal or greater to S

const smallestSubWithSumGreater = function (arr, s) {
    // use infinity because it will always be the largest number. 
    let minLength = Infinity;
    let leftPointer = 0;
    let currentSum = 0;


    for (var rightPointer = 0; rightPointer < arr.length; rightPointer++) {
        currentSum += arr[rightPointer];
        // while the current sum is greater or equal to the value shrink the window.
        while (currentSum >= s) {
            // keeping track of the size of the subarray using the distance between the left and right pointers
            minLength = Math.min(minLength, rightPointer - leftPointer + 1);
            //subtract the value of the left pointer from the current sum
            currentSum -= arr[leftPointer]
            //Move the left pointer (start of the widow over a space)
            leftPointer += 1;
        }
    }
    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
}

let Input = [2, 1, 5, 2, 3, 2]
let inputs = 7
let output = 2

let Input2 = [2, 1, 5, 2, 8]
let inputs2 = 7
let output2 = 1

let test = function (actual, expected) {
    actual = JSON.stringify(actual)
    expected = JSON.stringify(expected)
    console.log(actual === expected, `Acutal ${actual}, is equal to expected ${expected}`)
}

test(smallestSubWithSumGreater(Input, inputs), output)
test(smallestSubWithSumGreater(Input2, inputs2), output2) 


for (var i = 0; i < 100; i++) {
    console.log(i," my i ")
}