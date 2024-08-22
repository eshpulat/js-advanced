// Objects in JavaScript

// let student = {
//     name: "John",
//     age: 20
// };

// Introduction to Prototypes

// let animal = {
//     eats: true,
//     walk: function () {
//         console.log("Animal walks");
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// console.log(rabbit.eats); // true
// console.log(rabbit.jumps); // true
// rabbit.walk(); // "Animal walks"

//The Prototype Chain

// let creature = {
//     alive: true
// };

// let animal = {
//     eats: true,
//     __proto__: creature
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// console.log(rabbit.alive); // true
// console.log(rabbit.eats); // true
// console.log(rabbit.jumps); // true

// Safer Methods to Work with Prototypes

let proto = Object.getPrototypeOf(rabbit);
console.log(proto === animal); // true

let rabbit = {
    jumps: true
};

Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.eats); // true
