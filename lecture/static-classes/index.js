// Defining the Player Class:

// class Player {
//     constructor(name, score) {
//         this.name = name;
//         this.score = score;
//     }

//     attack(target) {
//         let damage = Math.floor(Math.random() * 10 + 1); // Random damage between 1 and 10
//         target.score -= damage; // Reduce the target's score by the damage
//         console.log(
//             `${this.name} attacks ${target.name} for ${damage} points! ${target.name}'s score is now ${target.score}.`
//         );
//     }
// }

// Defining the Static Method:

class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    attack(target) {
        let damage = Math.floor(Math.random() * 10 + 1);
        target.score -= damage;
        console.log(
            `${this.name} attacks ${target.name} for ${damage} points! ${target.name}'s score is now ${target.score}.`
        );
    }

    static declareWinner(player1, player2) {
        if (player1.score > player2.score) {
            return `${player1.name} is the winner with a score of ${player1.score}!`;
        } else if (player1.score < player2.score) {
            return `${player2.name} is the winner with a score of ${player2.score}!`;
        } else {
            return "It's a tie!";
        }
    }
}

let player1 = new Player("Alice", 100);
let player2 = new Player("Bob", 100);

player1.attack(player2);
player2.attack(player1);

console.log(Player.declareWinner(player1, player2));

// Summary
// Static Methods Are Class Methods: They belong to the class itself and not to instances of the class. You cannot call a static method on an instance; you must call it on the class.

// Utility Functions: Static methods are typically used for utility functions that don’t need to access or modify the state of class instances. They can operate on data passed to them as arguments.

// Syntax: To define a static method, use the static keyword before the method name inside the class definition.

// By using static methods, you can group related functions within a class that don’t need to interact with instance data, making your code more organized and modular.
