// Here’s how your code might look without using inheritance:

// Constructor for Dog
function Dog(name, age, energy, breed) {
    this.name = name;
    this.age = age;
    this.energy = energy;
    this.breed = breed; // Specific to Dog
}

Dog.prototype.eat = function (food) {
    console.log(`${this.name} eats ${food}.`);
    this.energy += 5;
};

Dog.prototype.sleep = function (hours) {
    console.log(`${this.name} sleeps for ${hours} hours.`);
    this.energy += hours * 2;
};

Dog.prototype.bark = function () {
    console.log(`${this.name} barks! Woof! Woof!`);
};

// Constructor for Bird
function Bird(name, age, energy, canFly) {
    this.name = name;
    this.age = age;
    this.energy = energy;
    this.canFly = canFly; // Specific to Bird
}

Bird.prototype.eat = function (food) {
    console.log(`${this.name} eats ${food}.`);
    this.energy += 5;
};

Bird.prototype.sleep = function (hours) {
    console.log(`${this.name} sleeps for ${hours} hours.`);
    this.energy += hours * 2;
};

Bird.prototype.fly = function () {
    if (this.canFly) {
        console.log(`${this.name} flies in the sky.`);
        this.energy -= 10;
    } else {
        console.log(`${this.name} cannot fly.`);
    }
};

//Step 1: Create the Parent Constructor Function

// Parent Constructor Function
function Animal(name, age, energy) {
    this.name = name;
    this.age = age;
    this.energy = energy;
}

// Adding methods to Animal's prototype
Animal.prototype.eat = function (food) {
    console.log(`${this.name} eats ${food}.`);
    this.energy += 5;
};

Animal.prototype.sleep = function (hours) {
    console.log(`${this.name} sleeps for ${hours} hours.`);
    this.energy += hours * 2;
};

// -------------- ----------- -----------

// Child Constructor Function for Dog
function Dog(name, age, energy, breed) {
    Animal.call(this, name, age, energy); // Call the parent constructor to initialize common properties
    this.breed = breed; // Child-specific property
}

// Adding a method specific to Dog
Dog.prototype.bark = function () {
    console.log(`${this.name} barks! Woof! Woof!`);
};

// Child Constructor Function for Bird
function Bird(name, age, energy, canFly) {
    Animal.call(this, name, age, energy); // Call the parent constructor to initialize common properties
    this.canFly = canFly; // Child-specific property
}

// Adding a method specific to Bird
Bird.prototype.fly = function () {
    if (this.canFly) {
        console.log(`${this.name} flies in the sky.`);
        this.energy -= 10;
    } else {
        console.log(`${this.name} cannot fly.`);
    }
};

// ---------- ----------- ----------

//  Set Up the Inheritance

// Set up inheritance for Dog
Dog.prototype = Object.create(Animal.prototype);

// Set up inheritance for Bird
Bird.prototype = Object.create(Animal.prototype);

// Step 4: Reset the Constructor Property

// Reset the constructor property for Dog
Dog.prototype.constructor = Dog;

// Reset the constructor property for Bird
Bird.prototype.constructor = Bird;

// Step 5: Add Child-Specific Methods

// Adding methods specific to Dog
Dog.prototype.bark = function () {
    console.log(`${this.name} barks! Woof! Woof!`);
};

// Adding methods specific to Bird
Bird.prototype.fly = function () {
    if (this.canFly) {
        console.log(`${this.name} flies in the sky.`);
        this.energy -= 10;
    } else {
        console.log(`${this.name} cannot fly.`);
    }
};
