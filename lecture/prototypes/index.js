// Refactoring with Prototypes

function Car(make, model, year, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
}

Car.prototype.start = function () {
    console.log(
        this.year + " " + this.make + " " + this.model + " has started."
    );
};

Car.prototype.stop = function () {
    console.log(this.make + " " + this.model + " has stopped.");
};

Car.prototype.drive = function () {
    console.log(this.make + " " + this.model + " is driving.");
};
