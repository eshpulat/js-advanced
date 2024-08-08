// ---------- 1 ----------- createCounter

function createCounter() {
    let count = 0;

    return function () {
        count += 1;

        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// -------------- 2 ---------- temperatureConverter

function temperatureConverter(x) {
    return function (y) {
        if (x === "C") {
            return (y - 32) / (9 / 5);
        }
        if (x === "F") {
            return y * (9 / 5) + 32;
        }
    };
}

const toCelsius = temperatureConverter("C");
console.log(toCelsius(32)); // 0
//°F = °C * 9/5 + 32

//°C = (°F - 32) ÷ (9/5)

// ------------- 3 -------------- great

function greet(name) {
    return function (str) {
        return "Good" + " " + str + " " + name;
    };
}

const greetJohn = greet("John");
console.log(greetJohn("Morning")); // 'Good Morning, John!'

// ------------- 4 ------------- interestCalculator

function interestCalculator(rate) {
    return function (x) {
        return (x / 100) * rate;
    };
}

const simpleInterest = interestCalculator(5);
console.log(simpleInterest(1000)); // 50

// ----------- 5 -------------- multiplier

function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10

// ------------ 6 ------------- doubleAndTriple

function doubleMultiplier(x, y) {
    return function (num) {
        return x * num * y;
    };
}

const doubleAndTriple = doubleMultiplier(2, 3);
console.log(doubleAndTriple(5)); // 30

// ------------ 7 ------------- sequentialGreet

function sequentialGreet(name) {
    return {
        morning: function () {
            return "Good Morning" + " " + name;
        },

        evening: function () {
            return "Good Evening" + " " + name;
        }
    };
}

const johnGreeting = sequentialGreet("John");
console.log(johnGreeting.morning()); // 'Good Morning, John!'
console.log(johnGreeting.evening()); // 'Good Evening, John!'

// -------------- 8 ----------- personalLibrary

function personalLibrary() {
    return {
        add: function () {
            return "the Nation";
        },
        list: function () {
            return ["The Nation"];
        }
    };
}

const myLibrary = personalLibrary();
console.log(myLibrary.add()); // 'The Nation'
console.log(myLibrary.list()); // ['The Nation']

// ----------- 9 ------------ multiplicationTable

function multiplicationTable(num) {
    let arr = [];
    return function () {
        for (let i = 1; i <= 10; i++) {
            let result = i * num;
            arr.push(result);
        }
        return arr;
    };
}

const tableOfThree = multiplicationTable(3);
console.log(tableOfThree()); // [3, 6, 9, ... , 30]

// ------------ 10 --------- favoriteColorReminder

function favoriteColorReminder(str1, str2) {
    return function () {
        return str1 + "'s" + " " + "favorite color is" + " " + str2;
    };
}

const johnsColor = favoriteColorReminder("John", "Blue");
console.log(johnsColor()); // 'John's favorite color is Blue.'
