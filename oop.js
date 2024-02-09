/* 
    ? Object Oriented Programming
    ! APIE
    * Abstraction
        * obfuscation of implementation detail
    * Polymorphism
        * ability of using the same constructor for different object instances
    * Inheritance
        * sharing of methods and properties
    * Encapsulation
        * dealing with scope
*/

// ? Abstraction Example

// let process = require("process")
// process.stdout.write("Example of no-abstraction")

console.log("Example of abstraction")

/* 
    Other examples of abstraction:
    .toUpperCase()
    .split()

    or any other pre-written code we don't have to "reinvent"
*/

// ? Polymorphism Example

class Human {
    constructor(name) {
        this.name = name
        this.species = "Human"
    }
}

let cyrus = new Human("Cyrus")
let andy = new Human("Andy")
console.log(cyrus, andy)

// ? Inheritance Example

class Teacher extends Human {
    constructor(name) {
        super(name)
        this.profession = "Teacher"
    }
}

// instantiate Teacher but we inherit Human properties and methods
let paul = new Teacher("Paul")

// ? Encapsulation Example

function fxScope() {
    let fxsVar = "This is a function scope"
    console.log(fxsVar)
}

fxScope()

// console.log(fxsVar) // ReferenceError