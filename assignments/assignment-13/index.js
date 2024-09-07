// Problem 1: Magic Cipher ???????????????

// function magicCipher(sentence, cipher) {
//     let result = "";
//     let value = 0;
//     let cyf = Object.keys(cipher);

//     for (let key in cipher) {
//         value = cipher[key];
//     }
//     console.log(value);
//     for (let i = 0; i < sentence.length; i++) {
//         // console.log(sentence[i])
//         if (sentence[i].includes(cyf)) {
//             sentence[i] += sentence[i].replace(sentence[i], value);
//             result += sentence[i];
//         } else {
//             result += sentence[i];
//         }
//     }
//     return result;
// }

// console.log(magicCipher("add me on facebook", { a: "c", d: "q" })); // "cqq me on fccebook"
// console.log(magicCipher("where are you?", { v: "l", "?": "!" })); // "where are you!"
// console.log(magicCipher("twmce", { m: "n", t: "d", w: "a" })); //  "dance"

// Problem 2: Hipsterfy

function hipsterfy(sentence) {
    function removeLastVowel(word) {
        let vowels = "aeiou";
        let lastIndex = -1;
        for (let i = 0; i < word.length; i++) {
            if (vowels.includes(word[i])) {
                lastIndex = i;
            }
        }
        if (lastIndex !== -1) {
            return word.slice(0, lastIndex) + word.slice(lastIndex + 1);
        }

        return word;
    }

    const words = sentence.split(" ");

    const hipsteredWords = words.map(removeLastVowel);

    return hipsteredWords.join(" ");
}

// console.log(hipsterfy("proper")); // "propr"
// console.log(hipsterfy("proper tonic panther")); // "propr tonc panthr"
// console.log(hipsterfy("towel flicker banana")); // "towl flickr banan"
// console.log(hipsterfy("runner anaconda")); // "runnr anacond"
// console.log(hipsterfy("turtle cheeseburger fries")); // "turtl cheeseburgr fris"

// Problem 3: Count Adjacent Sums

function countAdjacentSums(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
        // console.log(arr[i]);
    }
    return count;
}

// console.log(countAdjacentSums([1, 5, 1], 6)); // 2
// console.log(countAdjacentSums([7, 2, 4, 6], 7)); // 0
// console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); // 3

// Problem 4: Longest Letter Streak

function longestLetterStreak(str, searchLetters) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < searchLetters.length; j++) {
            if (str[i].includes(searchLetters[j])) {
                count++;
            }
        }
    }
    return count;
}

console.log(longestLetterStreak("ACCA", ["C"])); // 2
console.log(longestLetterStreak("YACCADCA", ["C", "A"])); // 4
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"])); // 3
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"])); // 5
