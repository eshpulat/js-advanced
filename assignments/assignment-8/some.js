// ------------ 1 ----------- checkForNullValue

function checkForNullValue(items1) {
    return items1.some(function (item) {
        return item.value === null;
    });
}

// const items1 = [{ value: 3 }, { value: null }, { value: 5 }];
// console.log(checkForNullValue(items1));
// // Output: true

// const items2 = [{ value: 3 }, { value: 4 }, { value: 5 }];
// console.log(checkForNullValue(items2));
// // Output: false

// ------------ 2 ------------ checkForSpecificValueInMatrix

function checkForSpecificValueInMatrix(matrix2, value2) {
    return matrix2.some(function (matrix) {
        return matrix.some(function (num) {
            return num === value2;
        });
    });
}

// const matrix1 = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// const value1 = 4;
// console.log(checkForSpecificValueInMatrix(matrix1, value1));
// Output: true

// const matrix2 = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// const value2 = 7;
// console.log(checkForSpecificValueInMatrix(matrix2, value2));
// // Output: false;

// ----------- 3 ------------- checkPropertyLengthInObjects

function checkPropertyLengthInObjects(words2, length2) {
    return words2.some(function (word) {
        return word.word.length === length2;
    });
}

// const words1 = [{ word: "cat" }, { word: "elephant" }, { word: "dog" }];
// const length1 = 8;
// console.log(checkPropertyLengthInObjects(words1, length1));
// // Output: true

// const words2 = [{ word: "cat" }, { word: "dog" }, { word: "fox" }];
// const length2 = 8;
// console.log(checkPropertyLengthInObjects(words2, length2));
// // Output: false

// ------------- 4 -------------- checkNumberInSubArrays

function checkNumberInSubArrays(arrays2, number2) {
    return arrays2.some(function (array) {
        return array.some(function (num) {
            return num === number2;
        });
    });
}

// const arrays1 = [
//     [1, 2],
//     [3, 4, 5],
//     [6, 7]
// ];
// const number1 = 5;
// console.log(checkNumberInSubArrays(arrays1, number1));
// // Output: true

// const arrays2 = [
//     [1, 2],
//     [3, 4],
//     [6, 7]
// ];
// const number2 = 8;
// console.log(checkNumberInSubArrays(arrays2, number2));
// // Output: false

// -------------- 5 ------------- checkDateAfterSpecificDate

function checkDateAfterSpecificDate(dates1, specificDate1) {
    return dates1.some(function (dates) {
        return dates.date > specificDate1;
    });
}

// const dates1 = [
//     { date: "2023-01-01" },
//     { date: "2023-01-04" },
//     { date: "2023-01-02" }
// ];
// const specificDate1 = "2023-01-02";
// console.log(checkDateAfterSpecificDate(dates1, specificDate1));
// // Output: true

// const dates2 = [
//     { date: "2023-01-01" },
//     { date: "2023-01-02" },
//     { date: "2023-01-02" }
// ];
// const specificDate2 = "2023-01-02";
// console.log(checkDateAfterSpecificDate(dates2, specificDate2));
// // Output: false
