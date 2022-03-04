
// Given an array, find the average of all  subarrays of ‘K’ contiguous elements in it.
// input is an array, out puts are an array of the averages of the subarray of k length.
// the output array may be a diffrent length of the input array. 
// Brute force methoid 

let subArrays = function (Arr, k) {
    let result = []
    for (var i = 0; i < Arr.length - k + 1; i++) {
        // variable to hold our sum
        let sum = 0;
        // iterage trhough the sub array of k length
        for (var j = i; j < i + k; j++) {
            sum = sum + Arr[j]
        }
        result.push(sum / k)
        // calculate the average
        //push to result
    }
    return result;
}
// time complexity is O(N*k)
// brute force does not take use the slidning widow technique. 

let AverageOfSubArray = function (arr, k) {

    let result = [];
    let leftPointer = 0;
    let rightPointer = 0;
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        if (i >= k - 1) {
            result.push(sum / 5)
            sum -= arr[leftPointer];
            leftPointer += 1;
        }
    }
    return result;
}
// the i in the for loop can be thought as the end of the window in this case.


let inputArr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let inputK = 5;
let output = [2.2, 2.8, 2.4, 3.6, 2.8]

let test = function (actual, expected) {
    actual = JSON.stringify(actual)
    expected = JSON.stringify(expected)
    console.log(actual === expected, `Acutal ${actual}, is equal to expected ${expected}`)
}

test(subArrays(inputArr, inputK), output)
test(AverageOfSubArray(inputArr, inputK), output)