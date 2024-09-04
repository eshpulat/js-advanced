// ES6 Classes
// Classes in JavaScript make it easier to define object templates and manage inheritance. Here’s how you define a class using ES6 syntax:

class Car {
    constructor(make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    start() {
        console.log(`${this.make} ${this.model} has started.`);
    }

    stop() {
        console.log(`${this.make} ${this.model} has stopped.`);
    }
}

// Adding and Modifying Methods in Classes

class Car {
    constructor(make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    start() {
        console.log(`${this.make} ${this.model} has started.`);
    }

    stop() {
        console.log(`${this.make} ${this.model} has stopped.`);
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving.`);
    }
}

// Modifying an Existing Method:

class Car {
    constructor(make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    start() {
        console.log(`${this.year} ${this.make} ${this.model} has started.`);
    }

    stop() {
        console.log(`${this.make} ${this.model} has stopped.`);
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving.`);
    }
}
