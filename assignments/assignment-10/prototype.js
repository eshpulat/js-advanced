// String.prototype

// ---------- 1 ---------- reverse()

String.prototype.toReversed = function () {
    return this.split("").reverse().join("");
};

let str1 = "Hello";
let str2 = "world";

console.log(str1.toReversed());
console.log(str2.toReversed());

// ---------- 2 ---------- removeVowels()

String.prototype.removeVowels = function () {
    let constsnt = "";
    let constsntLetter = "bcdfjhgklmnpqrstvwxyzBCDFJHGKLMNPQRSTVWXYZ";
    for (let i = 0; i < constsntLetter.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if (constsntLetter[i] === this[j]) {
                constsnt += this[j];
            }
        }
    }
    return constsnt;
};

let string1 = "Hello";
let string2 = "world";

console.log(string1.removeVowels().toReversed());
console.log(string2.removeVowels().toReversed());

// ---------- 3 ---------- countWords()

String.prototype.countWords = function () {
    let count = 0;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (this[i] === alphabet[j]) {
                count++;
            }
        }
    }
    return count;
};

let words1 = "Hello World";
let words2 = "Oneword";

console.log(words1.countWords());
console.log(words2.countWords());

// ---------- 4 ---------- wrapInTags(tag)

String.prototype.wrapInTags = function (tag) {
    return `<${tag}>${this}</${tag}>`;
};

let word1 = "Hello";
let word2 = "world";
console.log(word1.wrapInTags("b"));
console.log(word2.wrapInTags("i"));

// ---------- 5 ----------  isPalindrome()

String.prototype.isPalindrome = function () {
    let str = "";
    let checkIsPlaindrom = this.toReversed();
    for (let i = 0; i < this.length; i++) {
        str += this[i];
    }
    if (checkIsPlaindrom === str) {
        return true;
    } else {
        return false;
    }
};

let strWords1 = "racecar";
let strWords2 = "Hello";

console.log(strWords1.isPalindrome());
console.log(strWords2.isPalindrome());

console.log("---------------------------------");

// Number.prototype

// ----------- 1 ------------ isPrime()

Number.prototype.isPrime = function () {
    if (this % 2 === 0 || this % 3 === 0) {
        return true;
    } else {
        return false;
    }
};

let num1 = 7;
let num2 = 4;

console.log(num1.isPrime());
console.log(num2.isPrime());

// ----------- 2 ------------ toFactorial()

Number.prototype.toFactorial = function () {
    let result = 1;

    for (let i = 1; i <= this; i++) {
        result *= i;
    }
    return result;
};

let factoralNum1 = 5;
let factoralNum2 = 3;

console.log(factoralNum1.toFactorial());
console.log(factoralNum2.toFactorial());

// ----------- 3 ------------ findFactors()
Number.prototype.findFactors = function () {
    let arr = [];
    for (let i = 0; i <= this; i++) {
        if (this % i === 0) {
            arr.push(i);
        }
    }
    return arr;
};

let factorNum1 = 10;
let factorNum2 = 16;

console.log(factorNum1.findFactors());
console.log(factorNum2.findFactors());

// ----------- 4 ------------ isPerfectSquare() ??????????????????????

// Number.prototype.isPerfectSquare = function () {
//     for (let i = 1; i <= this; i++) {
//         if (i * i === this) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// };

// let squareNum1 = 9;
// let squareNum2 = 8;

// console.log(squareNum1.isPerfectSquare());
// console.log(squareNum2.isPerfectSquare());

// ----------- 5 ------------ isOdd()

Number.prototype.isOdd = function () {
    return this % 2 !== 0;
};

let oddNum1 = 5;
let oddNum2 = 6;

console.log(oddNum1.isOdd());
console.log(oddNum2.isOdd());
