// PART - 1 NUMBER

// ------- 1 ---------- Odd Numbers Filter

function filterOddNumbers(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function oddNumber(num) {
    return num % 2 !== 0;
}

const numbers1 = [1, 2, 3, 4, 5];
console.log(filterOddNumbers(numbers1, oddNumber));

// --------- 2 ----------- Numbers Divisible by Three

function filterDivisibleByThree(num) {
    return num % 3 === 0;
}
const numbers2 = [3, 6, 7, 9, 12];
console.log(filterOddNumbers(numbers2, filterDivisibleByThree));

// --------- 3 ----------- Prime Numbers Filter

function filterPrimeNumbers(num) {
    if (num === 2) {
        return 2;
    }
    if (num === 3) {
        return 3;
    }
    return num % 2 !== 0 && num % 3 !== 0;
}

const numbers3 = [2, 3, 4, 5, 6];
console.log(filterOddNumbers(numbers3, filterPrimeNumbers));

// ---------- 4 ----------- filterPerfectSquares

function filterPerfectSquares(num) {
    if (num === 1) {
        return num;
    }

    if (num % 2 === 0 || num % 3 === 0) {
        return num;
    }
}

const numbers4 = [1, 4, 5, 9, 16];
console.log(filterOddNumbers(numbers4, filterPerfectSquares));

// PART-2  STRING

// callback

// function callback(arr, callback) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// ------- 1 ------- Palindrome Strings

function filterPalindromes(str) {
    let newStr = str.join(",");
    let result2 = "";
    let arr = [];

    for (let i = newStr.length - 1; i >= 0; i--) {
        result2 += newStr[i];
    }

    let result1 = "";
    for (let i = 0; i < str.length; i++) {
        result1 += str[i] + ",";
        if ((result1 = result2)) {
            return str[i];
        }
    }
}

// const str1 = ["racecar", "madam", "apple"];
// console.log(callback(str1, filterPalindromes));

console.log(filterPalindromes(["racecar", "madam", "apple"])); // Output: ["racecar", "madam"]
