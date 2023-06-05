/* 
    ? Array Methods
    * methods are functions that live inside of an object prototype
    * denoted by the . at the end of an object
    * ex: someVariable.toLowerCase()
*/

let educationTeam = [
    ["Paul Niemczyk", "Rob VanArsdall", "Eric Winebrenner"],
    ["Alex Perry", "Henry Dufour", "Mary Reagan"],
    ["Lulu Browne", "Julie Assur"]
]

/* 
    ? .push()
    * adds an element to the end of an array
    * returns new length of an array
*/

let pushReturn = educationTeam.push(["Benny Boas", "Kate Sweeney"])
console.log("Value", educationTeam, "Return of .push()", pushReturn)

/* 
    ? .pop()
    * removes last array element & returns it
    * also known as yeet() :)
*/

let lastElement = educationTeam.pop()
console.log("Value", educationTeam, "Return of .pop()", lastElement)

/* 
    .unshift()
    * adds an element to the beginning of an array
    * returns new length of an array
*/

let unshiftReturn = educationTeam.unshift("Aaron Blais")
console.log("Value", educationTeam, "Return of .unshift()", unshiftReturn)

/* 
    .shift()
    * removes the first element from an array
    * returns the removed value
*/

let shiftReturn = educationTeam.shift()
console.log("Value", educationTeam, "Return of .shift()", shiftReturn)

/* 
    .includes()
    * checks whether an array contains a value
    * returns true or false
*/

let languages = ["English", "German", "Spanish", "Polish", "French"]

console.log(languages.includes("French"))

// ? Advanced Array Methods

let states = [
    "Illinois",
    "Wisconsin",
    "Alabama",
    "New York",
    "Vermont",
    "Indiana", 
    "Massachusetts",
    "Ohio",
    "Virginia",
    "West Virginia",
    "Pennsylvania",
    "North Dakota",
    "South Dakota",
    "Oregon",
    "California",
    "Nevada",
    "Arizona",
    "New Mexico",
    "Florida",
    "Louisiana",
    "Texas",
    "New Hampshire",
    "Maine",
    "Rhode Island",
    "Alaska",
    "Connecticut",
    "Montana",
    "Nebraska",
    "Delaware",
    "Washington",
    "Iowa",
    "Kansas",
    "Oklahoma",
    "Michigan",
    "Minnesota",
    "Kentucky",
    "Tennessee",
    "Idaho",
    "Utah",
    "Georgia",
    "Mississippi",
    "Missouri",
    "Colorado",
    "Delaware",
    "Hawaii",
    "Maryland",
    "North Carolina",
    "South Carolina",
    "New Jersey",
    "Wyoming"
]

for (state of states) {
    console.log(state)
}

/* 
    ? .forEach()
    * fires a callback fx on each element of your array
    * callback has three parameters:
        * value - the iterable
        * index - of the iterable
        * array - original array .forEach was called upon
    * does NOT return anything unless specified
*/

states.forEach((state, index, array) => {
    // console.log(`State: ${state} - Index: ${index}`)
    console.log(array[index])
})

/* 
    ! .forEach Challenge
    Find the Longest State
    * create a function called longestWord
    * the function should take a state array
    * iterate over the array with .forEach
    * return the longest state
*/

let longestWord = arr => {
    // iterate over passed array
    // check for length of an iterable
    // if the length of an iterable is longer than something, write it down and check the length against its length
    // once done, return the thing you wrote down (name)
    // let longest = ""
    let longest = []
    let char = 0
    // arr.forEach(i => {
    //     i.length > longest.length ? longest = i : null
    // })

    arr.forEach(i => {
        if (i.length > char) {
            longest = [i]
            char = i.length
        } else if (i.length === char) {
            longest.push(i)
        }
    })
    return longest
    
}
console.log("--------------HERERERERE-------------")
console.log(longestWord(states))
console.log("--------------HERERERERE-------------")

/* 
    ? .filter()
    * creates a new array based on a filter function
    * only the filtered items can be added to an array
    * cannot have (if/else) where else also gets added
    * filter RETURNS values
*/

let statesC = states.filter(state => state.startsWith("C"))
let statesCC = states.filter(state => state[0] == "C")

console.log(statesC)
console.log(statesCC)

let grades = [56, 78, 96, 41, 7, 22, 15, 10, 89]


/* 
    ! .filter() Challenge
    * utilize a filter method to filter out grades under 60
*/

let failing = grades.filter(grade => grade < 60)
console.log(failing)

/* 
    .map()
    * creates an array with elements resulting from callback fx
*/

let statesUpperCase = states.map(state => state.toUpperCase())
console.log(statesUpperCase)

/* 
    ! .map() Challenge
    * utilize map to raise grade by 15 points for everyone
    * those above 90 should not get any points
*/

let updatedGrades = grades.map(grade => {
    if (grade > 90) {
        return grade
    } else {
        return grade + 15
    }
})

console.log(updatedGrades)

// ? Expression syntax does not require explicit return
let paulsUpdatedGrade = grades.map(grade => grade < 90 ? grade + 15 : grade)
console.log(paulsUpdatedGrade)

// ! Statement syntax requires explicit return
let test = grades.map(grade => {
    return grade < 90 ? grade + 15 : grade
})
console.log(test)

// Fibonacci Solution

function fibonacci(first, second, length) {
    let series = [first, second]
    
    while(series.length < length) {
        let secondNum = series.pop() // 1
        let firstNum = series.pop() // 0
        let sum = firstNum + secondNum
        series.push(firstNum, secondNum, sum)
    }

    console.table(series)
}

// fibonacci(5, 8, 100)

// FibonacciRecursive

function fibonacciRecursive(number, arr = [0, 1]) {
    if (arr.length == number + 1) return arr
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return fibonacciRecursive(number, arr)
}

console.log(fibonacciRecursive(10))

// Titleize

const readline = require("readline")
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

function ask(q) {
    return new Promise((resolve, reject) => {
        rl.question(q, resolve)
    })
}


function capitalize(str) {
    let first = str[0].toUpperCase()
    let rest = str.slice(1).toLowerCase()
    return first + rest
}

let titlelize = str => {
    return str.split(" ").map(word => capitalize(word)).join("")
    // let strArr = str.split(" ")
    // strArr[0] = strArr[0].toUpperCase()
    // console.log(strArr)
}

let titlelizedWord = titlelize("The cat in the hat")
console.log(titlelizedWord)

async function start() {
    let response = await ask("Give me a word")
    console.log(titlelize(response))
}

start()