function printMessage(message, callback) {
    console.log(message);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

printMessage("Hello!", sayGoodbye);
// Output:
// Hello!
// Goodbye!

// Step 1: Identifying Redundant Code

function introduceCasual(name) {
    console.log(`Hey, this is ${name}`);
    console.log("I am studying Software Engineering");
}

function introduceOk(name) {
    console.log(`Hello, my name is ${name}`);
    console.log("I am studying Software Engineering");
}

function introduceFormal(name) {
    console.log(`Hi there, let me introduce myself. My name is ${name}`);
    console.log("I am studying Software Engineering");
}

// Step 2: Refactoring Using Callbacks

function introduce(name, callback) {
    callback(name);
    console.log("I am studying Software Engineering");
}

// Step 3: Defining Specific Greeting Functions

function greetCasual(name) {
    console.log(`Hey, this is ${name}`);
}

function greetOk(name) {
    console.log(`Hello, my name is ${name}`);
}

function greetFormal(name) {
    console.log(`Hi there, let me introduce myself. My name is ${name}`);
}

// Step 4: Invoking the Callbacks

introduce("Ali", greetCasual);
introduce("Ali", greetOk);
introduce("Ali", greetFormal);
