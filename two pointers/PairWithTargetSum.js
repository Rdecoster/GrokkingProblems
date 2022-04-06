

const PairTargetSum = function (arr, target) {
    let result = []
    let leftPointer = 0;
    let rightPointer = arr.length - 1

    while (leftPointer < rightPointer) {
        console.log(leftPointer, rightPointer)
        let leftElement = arr[leftPointer]
        let rightElement = arr[rightPointer]

        let sum = (rightElement + leftElement)

        // if sum is greater than target decrement right pointer
        // if sum is less than target increase left pointer 
        if (sum === target) {
            return [leftPointer, rightPointer]
        }
        if (sum > target) {
            rightPointer--
        }
        if (sum < target) {
            leftPointer++
        }
    }
    return result;
}





    // test suite  


var Input = [1, 2, 3, 4, 6]
var target = 6
var output = [1, 3]

var Input2 = [2, 5, 9, 11]
var target2 = 11
var output2 = [0, 2]



var test = function (actual, expected) {
    actual = JSON.stringify(actual)
    expected = JSON.stringify(expected)
    console.log(actual === expected, `Acutal ${actual}, is equal to expected ${expected}`)
}


console.time("mysol")
test(PairTargetSum(Input, target), output)
test(PairTargetSum(Input2, target2), output2)

console.timeEnd("mysol")
