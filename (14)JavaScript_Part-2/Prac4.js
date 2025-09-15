//Q1. Function to return elements greater than a given number `n`
function large(arr, n) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

// Example usage
let ans = large([1, 2, 3, 4, 5, 6, 7], 4);
console.log(ans);  // Output: [5, 6, 7]


//Q2. Write a JavaScript function to extract unique characters from a string.
let str = "abcdabcdefgggh";

function unique(str) {
    let newStr = "";

    for (char of str) {
        if (newStr.indexOf(char) == -1) {
            newStr += char;
        }
    }

    return newStr;
}

console.log(unique(str));

//Q3. Write a JavaScript function that accepts a list of country names as input and 
//returns the longest country name as output.

let countries = ["Australia", "Germany", "United States of America"];

function largest(arr) {
    let largest = "";
    for (country of arr) {
        if (largest.length < country.length) {
            largest = country;
        }
    }

    return largest;
}

console.log(largest(countries));

//Q4. Write a JavaScript function to count the number of vowels in a String argument.

function vovelCount(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (char of str) {
        if (vowels.indexOf(char) != -1) {
            count++;
        }
    }

    return count;
}

let msg = "Hello, how are you?";
console.log(vovelCount(msg));



//Q5. Write a JavaScript function to generate a random number within a range (start, end).
let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end - start + 1;
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start, end));