// isPalindromePossible ------ 1 ------- ??????????

function isPalindromePossible(str) {}

// myShift --------- 2 ----------

Array.prototype.myShift = function (value) {
    for (let i = this.length; i > 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
    return this;
};

// const arr = [1, 2, 3];
// arr.myShift(4); // [4, 1, 2, 3]
// console.log(arr);

// myRemove --------- 3 -------

Array.prototype.myRemove = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) {
            for (let j = 0; j < this.length - 1; j++) {
                this[i] = this[i + 1];
            }
        }
    }
    this.pop();
    return this;
};

// const arr = [1, 2, 3];
// arr.myRemove(2); // [1, 3]
// console.log(arr);

// generateFibonacci ------ 4 ----------

function generateFibonacci(num) {
    let result = [];
    let a = 0;
    let b = 1;

    result.push(a);
    result.push(b);

    for (let i = 2; i < num; i++) {
        let fibonacciNum = a + b;
        result.push(fibonacciNum);

        a = b;
        b = fibonacciNum;
    }
    return result;
}

console.log(generateFibonacci(5)); // [0, 1, 1, 2, 3]
console.log(generateFibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// leastCommonMultiple -------- 5 ------ ??????????

function leastCommonMultiple(num1, num2) {
    let maxNum = num2;
    let result = 0;

    for (let i = 0; i < maxNum; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            maxNum += num2;
        }
    }
    return maxNum;
}

// console.log(leastCommonMultiple(2, 3)); // 6
// console.log(leastCommonMultiple(6, 10)); // 30
// console.log(leastCommonMultiple(24, 26)); // 312

// generatePrimes ----------- 6 -----------

function generatePrimes(n) {
    let result = [2, 3];

    for (let i = 4; i < n; i++) {
        if (n % 2 !== 0 || n % 3 !== 0) {
            result.push(n);
        }
    }
    return result;
}

console.log(generatePrimes(3)); // [2, 3, 5]
console.log(generatePrimes(5)); // [2, 3, 5, 7, 11]
