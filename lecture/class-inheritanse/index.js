// To understand why inheritance is useful, let’s consider an example where we are designing a system to manage different types of vehicles, specifically Cars and Motorcycles. Here’s how you might define a Car and a Motorcycle class without using inheritance:

// class Car {
//     constructor(make, model, year, mileage, doors) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.mileage = mileage;
//         this.doors = doors;
//     }

//     start() {
//         console.log(`${this.make} ${this.model} is starting.`);
//     }

//     drive() {
//         console.log(`${this.make} ${this.model} is driving.`);
//     }

//     stop() {
//         console.log(`${this.make} ${this.model} has stopped.`);
//     }
// }

// class Motorcycle {
//     constructor(make, model, year, mileage, type) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.mileage = mileage;
//         this.type = type;
//     }

//     start() {
//         console.log(`${this.make} ${this.model} is starting.`);
//     }

//     drive() {
//         console.log(`${this.make} ${this.model} is driving.`);
//     }

//     stop() {
//         console.log(`${this.make} ${this.model} has stopped.`);
//     }
// }

// Solution with Inheritance

// Parent Class
class Vehicle {
    constructor(make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving.`);
    }

    stop() {
        console.log(`${this.make} ${this.model} has stopped.`);
    }
}

// Child Class: Car
class Car extends Vehicle {
    constructor(make, model, year, mileage, doors) {
        super(make, model, year, mileage); // Call the parent class constructor with super()
        this.doors = doors; // Car-specific property
    }
}

// Child Class: Motorcycle
class Motorcycle extends Vehicle {
    constructor(make, model, year, mileage, type) {
        super(make, model, year, mileage); // Call the parent class constructor with super()
        this.type = type; // Motorcycle-specific property
    }

    doAWheelie() {
        console.log(`${this.make} ${this.model} did a wheelie!`);
    }
}

let myCar = new Car("Toyota", "Camry", 2019, 30000, 4);
myCar.start(); // logs: 'Toyota Camry is starting.'
myCar.drive(); // logs: 'Toyota Camry is driving.'
myCar.stop(); // logs: 'Toyota Camry has stopped.'

let myBike = new Motorcycle(
    "Harley Davidson",
    "Street 750",
    2018,
    8000,
    "Cruiser"
);
myBike.start(); // logs: 'Harley Davidson Street 750 is starting.'
myBike.doAWheelie(); // logs: 'Harley Davidson Street 750 did a wheelie!'
myBike.stop(); // logs: 'Harley Davidson Street 750 has stopped.'

// Example of Extending Methods:

class Car extends Vehicle {
    constructor(make, model, year, mileage, doors) {
        super(make, model, year, mileage); // Call the parent class constructor
        this.doors = doors;
    }

    start() {
        super.start(); // Call the parent start method
        console.log(`All ${this.doors} doors are closed.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, mileage, type) {
        super(make, model, year, mileage); // Call the parent class constructor
        this.type = type;
    }

    start() {
        super.start(); // Call the parent start method
        console.log(`Safety gear has been checked.`);
    }

    doAWheelie() {
        console.log(`${this.make} ${this.model} did a wheelie!`);
    }
}
