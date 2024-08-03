// ---------- 1 ------
// Create the Initial Functions

function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return `The result of adding is ${result}.`;
}

function subtractTwoNumbers(num1, num2) {
    let result = num1 - num2;
    return `The result of subtracting is ${result}.`;
}

function multiplyTwoNumbers(num1, num2) {
    let result = num1 * num2;
    return `The result of multiplying is ${result}.`;
}

function divideTwoNumbers(num1, num2) {
    let result = num1 / num2;
    return `The result of dividing is ${result}.`;
}

// ------ 2 --------- Recognize the Repetition

// Examine the four functions you've created. Notice that they contain similar code structures but perform different arithmetic operations. This similarity indicates that the code can be optimized.

// ------- 3 -------- Refactor Using Callbacks

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

// Create a generic function, calculate, that takes num1, num2, and a callback function as parameters. This generic function will call the specific arithmetic operation passed as a callback.

function generic(num1, num2, callback) {
    let result = callback(num1, num2);
    return `The result of dividing is ${result}.`;
}

// ---------- 4 --------- Test Your Refactored Code

console.log(generic(5, 3, add));
console.log(generic(5, 3, subtract));
console.log(generic(5, 3, multiply));
console.log(generic(5, 3, divide));
