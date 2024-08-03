// let orginalArray = [1, 2, 3];
// let orginalObjet = { key: "value" };

// let newArray = orginalArray;
// let newObject = orginalObjet;

// newArray.push(4);
// newObject.newKey = "newValue";

// console.log("orginalArray:", newArray);
// console.log("orginalObject:", newObject);

// shallow copy

let originalArray = [1, 2, 3];
let copiedArray = [];

for (let i = 0; i < originalArray.length; i++) {
    copiedArray[i] = originalArray[i];
}

console.log(copiedArray);

let copiedArray1 = Array.from(originalArray);

console.log(copiedArray1);
