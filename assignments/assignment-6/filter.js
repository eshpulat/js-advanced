// ---------- 1 ----------- filterByType

function filterByType(items, type) {
    return items.filter(function (fruit) {
        if (fruit.type === type) {
            return { type: fruit.type, name: fruit.name };
        }
    });
}

const items = [
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" },
    { type: "fruit", name: "banana" },
    { type: "vegetable", name: "lettuce" },
    { type: "fruit", name: "orange" }
];
const type = "fruit";
console.log(filterByType(items, type));
// Output: [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }, { type: 'fruit', name: 'orange' }]

// -------------- 2 ------------- filterByLength

function filterByLength(arrays, length) {
    return arrays.filter(function (longest) {
        return longest.length <= 2;
    });
}

const arrays = [
    [1, 2],
    [3, 4, 5],
    [6, 7],
    [8, 9, 10, 11],
    [12, 13]
];
// const length = 2;
// console.log(filterByLength(arrays, length));
// // Output: [[1, 2], [6, 7], [12, 13]]

// ----------- 3 ------------ filterByPriceRange

function filterByPriceRange(products, min, max) {
    return products.filter(function (prising) {
        if (prising.price >= min && prising.price <= max) {
            return { name: prising.name, price: prising.prising };
        }
    });
}

const products = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 },
    { name: "Notebook", price: 25 },
    { name: "Pencil", price: 10 },
    { name: "Eraser", price: 5 }
];
const min = 10;
const max = 20;
console.log(filterByPriceRange(products, min, max));
// Output: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }, { name: 'Pencil', price: 10 }]

// ------------ 4 ------------- filterByStartingLetter

function filterByStartingLetter(words, letter) {
    return words.filter(function (firstLetter) {
        if (firstLetter.word[0] === letter) {
            return { word: firstLetter };
        }
    });
}

const words = [
    { word: "cat" },
    { word: "dog" },
    { word: "car" },
    { word: "apple" },
    { word: "caterpillar" }
];
const letter = "c";
console.log(filterByStartingLetter(words, letter));
// Output: [{ word: 'cat' }, { word: 'car' }, { word: 'caterpillar' }]

// ------------ 5 ------------ filterByDate

function filterByDate(dates, date) {
    return dates.filter(function (correctDate) {
        return correctDate.date < date;
    });
}

const dates = [
    { date: "2023-01-01" },
    { date: "2023-01-02" },
    { date: "2023-01-03" },
    { date: "2022-12-31" },
    { date: "2023-01-04" }
];
const date = "2023-01-02";
console.log(filterByDate(dates, date));
// Output: [{ date: '2023-01-01' }, { date: '2022-12-31' }]

// ----------- 6 ------------- filterByAge

function filterByAge(people, age) {
    return people.filter(function (peopleAge) {
        if (peopleAge.age > age)
            return { name: peopleAge.name, age: peopleAge.age };
    });
}

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 20 },
    { name: "Eve", age: 40 }
];
const age = 30;
console.log(filterByAge(people, age));
// Output: [{ name: 'Charlie', age: 35 }, { name: 'Eve', age: 40 }]

// ----------- 7 ------------ filterByStringLength

function filterByStringLength(strings, length) {
    return strings.filter(function (str) {
        return str.length >= length;
    });
}

const strings = ["short", "medium", "verylong", "tiny", "extremelylongstring"];
const length = 6;
console.log(filterByStringLength(strings, length));
// Output: ['medium', 'verylong', 'extremelylongstring']
