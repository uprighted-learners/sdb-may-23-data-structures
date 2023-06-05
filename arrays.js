/* 
    ? Arrays
    * list-like object
    * reference data type
    * prototype has methods to perform traversal and mutation operations
        * denoted by [ ]
        * hold multiple data types
        * content can be accessed by their index
*/

// Creating new array literal
let arr = []

console.log(arr) // creates empty array literal
console.log(Boolean(arr)) // ! empty array returns true
console.log(Boolean("")) // empty string returns false

// ? How would you check if an array is empty?

// !wrong
!arr ? console.log("Empty") : console.log("Has contents")

// ?right
arr.length == 0 ? console.log("Empty") : console.log("Has stuff")

// Creating an array using Array constructor
let charcuterie = new Array("cheese", "prosciutto", "crackers")
console.log(charcuterie)

// Let's create some arrays!

let carMake = ["BMW", "Porsche", "Maserati", "Pagani"]
console.log(carMake) // displays all contents of an array
console.log(carMake[1]) // displays value at an index
console.log(carMake[7]) // returns undefined, NOT a ReferenceError

// ? Nesting, Assignment, & Reassignment

// Assign
carMake[4] = "Ferrari"
console.log(carMake)

// Dynamic reassignment
carMake[carMake.length - 1] = "Audi"
console.log(carMake)

// Dynamic append
carMake[carMake.length] = "Bugatti"
console.log(carMake)

// Reassigning values
carMake[0] = "Alpina"
console.log(carMake)

// Assigning values to a different variable
let maserati = carMake[2]
console.log(maserati)

// Nesting
carMake[carMake.length] = ["Toyota", "Honda", "Acura"]
console.log(carMake)

// ? How to access a nested array?
console.log(carMake[6])
// ? How to access 'Toyota' within nested array?
console.log(carMake[6][0])

// ? Arrays can have many different data types

let manyDataTypes = [
    "string",
    [1, 5, 6, true],
    false,
    undefined,
    null,
    NaN,
    "some other string",
    maserati
]
console.log(manyDataTypes)

// ? Data Type
console.log(typeof manyDataTypes) // returns object

// ? Checking if data type is an array
console.log(manyDataTypes instanceof Array)

/*
    ! Challenge
    * create a variable names mayCohort
    * include your MySpace Top 8
    * Nest an array with instructor's name and TA's names
    * Access one person's name and reassign to their nickname
    * Access Paul's name and reassign to Pablo
    ! Spicey mode
    * create a function called yeet()
        * it takes an array
        * it removes the last entry
        * and returns a new array
        * wrap it in a new variable
*/

let mayCohort = ["Tom", "John", "Carlos", "Austin", "Jake", "Jonas", "Sarah", "Tyler"]
mayCohort[mayCohort.length] = ["Paul", "Henry", "Alex"]
mayCohort[3] = "Aus"
mayCohort[8][0] = "Pablo"
console.log(mayCohort)

function yeet(arr) {
    let result = []
    for (i of arr) {
        i != arr[arr.length - 1] ? result[result.length] = i : null
    }
    return result
}

function yeet2(arr) {
    let newArr = arr.slice(0, arr.length - 1)
    return newArr
}

console.log(yeet(charcuterie))
console.log(yeet2(charcuterie))
