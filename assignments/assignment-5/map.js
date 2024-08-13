// ----------- 1 -------------- doubleAges
function doubleAges(people) {
    return people.map(function (peoples) {
        return {
            name: peoples.name,
            age: peoples.age * 2
        };
    });
}

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];
console.log(doubleAges(people));
// Output: [{ name: 'Alice', age: 60 }, { name: 'Bob', age: 50 }]

// ------------- 2 ------------ capitalizeFirstLetters

const capitalizeFirstLetters = (fruits) => {
    return fruits.map(function (fruit) {
        return fruit[0].toUpperCase() + fruit.slice(1);
    });
};

const fruits = ["apple", "banana"];
console.log(capitalizeFirstLetters(fruits));
// Output: ['Apple', 'Banana']

// ---------- 3 ---------- squareFirstElements

const squareFirstElements = (arrays) => {
    return arrays.map(function (array) {
        return array[0] * array[0];
    });
};

const arrays = [
    [2, 3],
    [4, 5],
    [6, 7]
];
console.log(squareFirstElements(arrays));
// Output: [4, 16, 36]

// ------------- 4 ------------ appendStringToWords

const appendStringToWords = (words, appendString) => {
    return words.map(function (obj) {
        return {
            word: obj.word + appendString
        };
    });
};

const words = [{ word: "cat" }, { word: "dog" }];
const appendString = "s";
console.log(appendStringToWords(words, appendString));
// Output: [{ word: 'cats' }, { word: 'dogs' }]

// ------------- 5 ------------- calculatePriceWithTax

const calculatePriceWithTax = (products, tax) => {
    return products.map(function (product) {
        return {
            name: product.name,
            price: product.price * (tax + 1)
        };
    });
};

const products = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 1 }
];
const tax = 0.1;
console.log(calculatePriceWithTax(products, tax));
// Output: [{ name: 'Book', price: 22 }, { name: 'Pen', price: 1.1 }]
