
// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, 
//and your goal is to pick as many fruits as possible to be placed in the given baskets.

// You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:
// 1. Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// 2. You can start with any tree, but you can’t skip a tree once you have started.
// 3. You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.


//input:  an Array of fruits to represent the single row of trees  
// output : maximunm number of fruits yoy have in both baskets 
// R:  cant skip trees, so meaning that it must be concurrant cant skip of a new element to get to the other fruits trees 

//p: implement a hash map with a sliding window Similar to longest concurrent substring fo k values where k is repersented by the baskets. 

const fruitsInBasket = function (fruitArr) {

    // create variables to track length of window, and hashmap to keeptrack of of the elements and window start pointer. 

    let hash = {};
    let windowStart = 0;
    let maxLength = 0;

    //iterate through array 

    for (var windowEnd = 0; windowEnd < fruitArr.length; windowEnd++) {
        // check if current element is in hash then iterate
        let currentFruit = fruitArr[windowEnd]
        if (hash[currentFruit] === undefined) {
            hash[currentFruit] = 0
        }
        // add counter of t element
        hash[currentFruit] += 1;

        // check number of key balue pairs in hash if greater than 2 shrink window with wile loop 
        while (Object.keys(hash).length > 2) {
            let startFruit = fruitArr[windowStart]
            // decrement start fruit / left pointer 
            hash[startFruit] -= 1
            if (hash[startFruit] === 0) {
                delete hash[startFruit]
            }
            // shrink the window move the starting place forward 
            // move left pointer forward 
            windowStart += 1
          
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
        // evaluate distance between window start and end and record max length. 
    }
    return maxLength;

}

var Input = ['A', 'B', 'C', 'A', 'C']
var output = 3  // C,A,C

var Input2 = ['A', 'B', 'C', 'B', 'B', 'C']
var output2 = 5

var Input3 = "cbbebi"
var output3 = 5 //B,C, B, B,C

var test = function (actual, expected) {
    actual = JSON.stringify(actual)
    expected = JSON.stringify(expected)
    console.log(actual === expected, `Acutal ${actual}, is equal to expected ${expected}`)
}


console.time("mysol")
test(fruitsInBasket(Input), output)
test(fruitsInBasket(Input2), output2)

console.timeEnd("mysol")


