// JavaScript Constructors

// let arr = new Array(1, 2, 3);
// console.log(arr); // [1, 2, 3]
// console.log(arr instanceof Array); // true

// Arrays and Prototypes

let arr = [1, 2, 3, 4, 5];
console.log(arr.__proto__ === Array.prototype); // true
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// String Constructor

let str1 = "Hello, world!";
let str2 = new String("Hello, world!");

console.log(typeof str1); // 'string'
console.log(typeof str2); // 'object'
console.log(str1 instanceof String); // false
console.log(str2 instanceof String); // true

// Number Constructor

let num1 = 42;
let num2 = new Number(42);

console.log(typeof num1); // 'number'
console.log(typeof num2); // 'object'
console.log(num1 instanceof Number); // false
console.log(num2 instanceof Number); // true
