// Regular object with function

// let car1 = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2017,
//     mileage: 50000,
//     start: function () {
//         console.log(this.make + " " + this.model + " has started.");
//     },
//     stop: function () {
//         console.log(this.make + " " + this.model + " has stopped.");
//     }
// };

// let car2 = {
//     make: "Honda",
//     model: "Accord",
//     year: 2019,
//     mileage: 30000,
//     start: function () {
//         console.log(this.make + " " + this.model + " has started.");
//     },
//     stop: function () {
//         console.log(this.make + " " + this.model + " has stopped.");
//     }
// };

// A Better Way

function Car(make, model, year, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.start = function () {
        console.log(this.make + " " + this.model + " has started.");
    };
    this.stop = function () {
        console.log(this.make + " " + this.model + " has stopped.");
    };
}

let car1 = new Car("Toyota", "Camry", 2017, 50000);
let car2 = new Car("Honda", "Accord", 2019, 30000);

// console.log(car1);
car1.start();
