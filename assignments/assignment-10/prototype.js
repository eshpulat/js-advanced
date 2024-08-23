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
