//Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’

let maxSumOfSubArray = function (arr, k) {
    // create pointers for window since its a sub array need to just keep track of the start of the window. 
    let windowStart = 0 // starting index 
    let maxSum = 0;
    let windowSum = 0;

    // iterate through arr

    for (var i = 0; i < arr.length; i++) {
        windowSum = windowSum + arr[i];
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum = windowSum - arr[windowStart];
            windowStart += 1;
        }
    }
    return maxSum;
}


let Input = [2, 1, 5, 1, 3, 2]
let inputK = 3
let output = 9

let test = function (actual, expected) {
    actual = JSON.stringify(actual)
    expected = JSON.stringify(expected)
    console.log(actual === expected, `Acutal ${actual}, is equal to expected ${expected}`)
}

test(maxSumOfSubArray(Input, inputK), 9) 