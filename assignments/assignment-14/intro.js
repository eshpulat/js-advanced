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
    let result = 0;
    for (let i = 0; i < num; i++) {
        console.log(num[i]);
    }
    return result;
}

console.log(generateFibonacci(5)); // [0, 1, 1, 2, 3]
console.log(generateFibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
