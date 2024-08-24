// Phase 1: Basic Pet Properties

function Pet(name, hunger, happiness) {
    this.name = name;
    this.hunger = hunger;
    this.happiness = happiness;

    Pet.prototype.eat = function () {
        console.log(this.hunger + 1);
    };
}

let animal = new Pet("dog", 0, 10);
console.log(animal);

// Phase 2: Pet Behaviors
