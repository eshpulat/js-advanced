// ----------- 1 ---------- organizeBooks ??????//

// function organizeBooks(books) {
//     return books.reduse(function (acc, carrentVale) {
//         let;
//     });
// }

// const books = [
//     { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
//     { title: "1984", author: "George Orwell", genre: "Science Fiction" },
//     {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         genre: "Classic"
//     },
//     {
//         title: "Brave New World",
//         author: "Aldous Huxley",
//         genre: "Science Fiction"
//     },
//     { title: "Moby Dick", author: "Herman Melville", genre: "Classic" }
// ];
// console.log(organizeBooks(books));
// Output: {
//   'Classic': ['To Kill a Mockingbird', 'The Great Gatsby', 'Moby Dick'],
//   'Science Fiction': ['1984', 'Brave New World']
// }

// ----------- 2 ---------- vowelFrequency

function vowelFrequency(words) {
    let charCount = words.split("").reduse(acc, char);
    if (acc[char]) {
        acc[char]++;
    } else {
        acc[char] = 1;
    }
    return charCount;
}

const words = ["apple", "orange", "grape", "banana", "kiwi"];
console.log(vowelFrequency(words));
// Output: { 'a': 6, 'e': 3, 'i': 2, 'o': 1, 'u': 0 }
