// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// aYou can assume that K is less than or equal to the length of the given string.

// Need to find the longest array that only contais no more than k unique values 

//i :  a string 
//o: a number representing the lenghtn of the longest subarray with no more than k unique charecters

const LongestSubStringKDistinct = function (s, k) {
    // keep track of the longest string. with variable 
    // create left pointer
    let longestSubString = 0;
    // transform string into an array 


    // iterate through array to at least legnth of k 
    let result = [];
    let uniqueLength = 0
    for (var i = 0; i < s.length; i++) {
        // add to the window. 
        result.push(s[i])
        uniqueLength += 1
        let uniuqe = Array.from(new Set(result))
        //    evaluate uniqueness and has no more than k unique charecters. 
        if (uniqueLength <= k) {

            longestSubString = Math.max(longestSubString, uniqueLength)
        }
        // if there are more than k unique charecters remove the first item in the result arr. 
        if (uniqueLength > k) {
            console.log("removing first position of the array ")
            result.shift();
            uniqueLength -= 1

        }
    }
    return longestSubString;
}

var Input = "araaci"
var inputs = 2
var output = 4  //"araa"

var Input2 = "araaci"
var inputs2 = 1
var output2 = 2 //"aa"

var Input3 = "cbbebi"
var inputs3 = 3
var output3 = 5 //"aa"

var test = function (actual, expected) {
    actual = JSON.stringify(actual)
    expected = JSON.stringify(expected)
    console.log(actual === expected, `Acutal ${actual}, is equal to expected ${expected}`)
}


console.time("mysol")
test(LongestSubStringKDistinct(Input, inputs), output)
test(LongestSubStringKDistinct(Input2, inputs2), output2)
test(LongestSubStringKDistinct(Input3, inputs3), output3)
console.timeEnd("mysol")


const LongestSubStringKDistinct2 = function (s, k) {
    let windowStart = 0,
        maxLength = 0,
        charFrequency = {};

    // in the following loop we'll try to extend the range [window_start, window_end]
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const rightChar = s[windowEnd];
        if (!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar] += 1;
        // shrink the sliding window, until we are left with 'k' distinct characters in 
        // the char_frequency
        while (Object.keys(charFrequency).length > k) {
            console.log(charFrequency,"char freq")
            const leftChar = s[windowStart];
            charFrequency[leftChar] -= 1;
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            windowStart += 1; // shrink the window
        }
        // remember the maximum length so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}



var Input = "araaci"
var inputs = 2
var output = 4  //"araa"

var Input2 = "araaci"
var inputs2 = 1
var output2 = 2 //"aa"

var Input3 = "cbbebi"
var inputs3 = 3
var output3 = 5 //"aa"

var test = function (actual, expected) {
    actual = JSON.stringify(actual)
    expected = JSON.stringify(expected)
    console.log(actual === expected, `Acutal ${actual}, is equal to expected ${expected}`)
}


console.time("theresol")
test(LongestSubStringKDistinct2(Input, inputs), output)
test(LongestSubStringKDistinct2(Input2, inputs2), output2)
test(LongestSubStringKDistinct2(Input3, inputs3), output3)
console.timeEnd("theresol")