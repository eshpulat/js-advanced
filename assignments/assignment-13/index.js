// Problem 1: Magic Cipher

function magicCipher(sentence, cipher) {
    let result = "";
    let value = 0;
    let cyf = Object.keys(cipher);

    for (let key in cipher) {
        value = cipher[key];
    }
    console.log(value);
    for (let i = 0; i < sentence.length; i++) {
        // console.log(sentence[i])
        if (sentence[i].includes(cyf)) {
            sentence[i] += sentence[i].replace(sentence[i], value);
            result += sentence[i];
        } else {
            result += sentence[i];
        }
    }
    return result;
}

console.log(magicCipher("add me on facebook", { a: "c", d: "q" })); // "cqq me on fccebook"
console.log(magicCipher("where are you?", { v: "l", "?": "!" })); // "where are you!"
console.log(magicCipher("twmce", { m: "n", t: "d", w: "a" })); //  "dance"
