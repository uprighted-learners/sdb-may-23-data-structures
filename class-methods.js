/* 
    ? Class Methods
    * method is a function that lives inside of a class
    * can be used on any class instance
*/

class Car {
    constructor(make, model, year, transmission) {
        this.make = make
        this.model = model
        this.year = year
        this.transmission = transmission
    }

    greetDriver(driver) {
        return `Hello ${driver}, your ${this.make} is awesome!`
    }
}

let maserati = new Car("Maserati", "GranTurismo", 2015, "auto")
console.log(maserati.greetDriver("Paul"))
let porsche = new Car("Porsche", "911", 2023, "PDK")
console.log(porsche.greetDriver("Jonathan"))

/* 
    ? Inheritance
    * extends a parent class with a child class
*/

class CarForSale extends Car {
    constructor(make, model, year, transmission, mileage, price) {
        // allows access to properties and methods of a parent class
        super(make, model, year, transmission)
        this.mileage = mileage
        this.price = price
    }

    isCPO(currentYear) {
        return currentYear - this.year >= 6
            ? `Your ${this.model} is out of warranty`
            : `Your warranty is still active`
    }
}

let bmw = new CarForSale("BMW", "M3", 2008, "manual", 27000, 50000)
console.log(bmw instanceof Car)
console.log(bmw.greetDriver("Aaron"))
console.log(bmw.isCPO(2023))


/* 
    ! Callback function review
    * is a fx that is called by another function
    * called within a parameter
    * generally occurs when something happens
*/

function callBackFx() {
    return `This is a callback function`
}

function start(x) {
    return x
}

console.log(start(callBackFx()))

// const process = require("process")

// process.stdin.once("data", input => console.log("Example of callback function as anonymous arrow"))

// process.stdin.once("data", function(input) {
//     console.log("Example of a callback fx declaration")
// })

// function callback(input) {
//     console.log("example of callback fx  declaration from outside parameter window")
// }
// process.stdin.once("data", callback)

/* 
    ? Factory Functions
    * functions that accept data and return new instance of a class
*/

class Circle {
    constructor(radius) {
        typeof radius === "number"
            ? this.radius = radius
            : new Error("Radius must be a number")
    }

    circumference() {
        return (2 * Math.PI * this.radius).toFixed(2)
    }

    area() {
        return (this.radius ** 2 * Math.PI).toFixed(2)
    }
}

let myCircle = new Circle(7)
console.log(myCircle.circumference(), myCircle.area())

function circleFromDiameter(diameter) {
    return new Circle(diameter / 2)
}

let newCircle = circleFromDiameter(25)
console.log(newCircle, newCircle.circumference())

/* 
    ? Static Factory Methods
    * do not require instantiation with "new" operator
    * create an instance of our class through its method
*/

class CircleStaticFactoryFx {
    // class' method calls itself and returns new instance
    static createCircleUsingDiameter(diameter) {
        return new CircleStaticFactoryFx(diameter / 2)
    }
    constructor(radius) {
        typeof radius == "number"
            ? this.radius = radius
            : new Error("Radius must be a number")
    }
}

let diaCircle = CircleStaticFactoryFx.createCircleUsingDiameter(20)
console.log(diaCircle)

class Human {
    static generateHuman(name) {
        return new Human(name)
    }

    constructor(name) {
        this.name = name
    }
}

let jonathan = new Human("Jonathan")
console.log(jonathan)
let aaron = Human.generateHuman("Aaron")
console.log(aaron)

/* 
    ! Avengers Challenge
    * create a class called Avengers
    * use properties of name, superpower, age, isDead, and keyMovie
    * create a class instance with those properties
    * create a method that logs the name and key movie together
    ! Spicey Mode
    * create a method that takes the name of the superhero
    * check it against two arrays, teamCap and teamStark
    * return which team the superhero was on as part of Civil War
    HINT: Stark: Iron Man, Tony Stark, Spider Man, Rhodes, Black Widow, Black Panther, Vision
    Captain: Captain America, Steve Rogers, Falcon, Bucky, Hawkeye, Wanda, Ant Man
*/

class Avengers {
    constructor(name, superpower, age, isDead, keyMovie) {
        this.name = name
        this.superpower = superpower
        this.age = age
        this.isDead = isDead
        this.keyMovie = keyMovie
    }

    headliner() {
        return `${this.name} starred in ${this.keyMovie}`
    }

    whichTeam() {
        let teamCap = ["Captain America", "Falcon", "Bucky", "Hawkeye", "Wanda"]
        let teamStark = ["Iron Man", "Spider Man", "Rhodes", "Black Widow"]

        // if (teamCap.includes(this.name)) {
        //     return `${this.name} is Team Captain`
        // } else if (teamStark.includes(this.name)) {
        //     return `${this.name} is Team Stark`
        // } else {
        //     return `${this.name} is not in either of the teams`
        // }

        return teamCap.includes(this.name)
        ? `${this.name} is Team Captain`
        : teamStark.includes(this.name)
        ? `${this.name} is Team Stark`
        : `${this.name} is not in either of the teams`
    }
}

let ironMan = new Avengers("Iron Man", "rich", 35, true, "Iron Man")
console.log(ironMan)
console.log(ironMan.whichTeam())

// ? Cake factory solution

class Cake {
    constructor(flavor, icing = "none", decoration = "none") {
        this.flavor = flavor || "none"
        this.icing = icing
        this.decoration = decoration
        this.size = 12
    }
    
    describe() {
        return `${this.flavor}, ${this.icing}, ${this.decoration}`
    }

    eat(slice) {
        this.size = this.size - slice
        return `We have ${this.size} slices of ${this.flavor}`
    }
}

let opera = new Cake("buttercream & coffee", "buttercream", "none")
let strawberry = new Cake("strawberry shortcake", "cream", "strawberry drizzle")
let carrot = new Cake("carrot", "cream cheese", "carmel drizzle")
console.log(opera.describe(), strawberry.describe(), carrot.describe())
console.log(carrot.eat(4))
let gateau = new Cake(...[,,"something"])
console.log("LKDJSFLKSJFLSKDJF", gateau)


function args() {
    console.log(arguments)
}
args("potato", "one", true, 7)

// ? Tag Search Solution

let library = [
    {
      title: "A Game of Thrones",
      tags:['fantasy', 'george r.r. martin']
    },
    {
      title: "Eloquent JavaScript",
      tags:["technology", "programming", "marijn haverbeke"]
    },
    {
      title: "The Fellowship of the Ring",
      tags:["fantasy", "jrr tolkien"]
    },
    {
      title: "The Return of the King",
      tags:["fantasy", "jrr tolkien"]
    }
]

function search(tag, inputTitle) {
    let result = library.filter(currentBook => currentBook.tags.includes(tag))
    let title = []
    library.forEach(currentBook => {
        if (currentBook.tags.includes(tag) && currentBook.title == inputTitle) {
            title.push(currentBook.title)
        }
    })
    return [title, result]
}
console.log("----------------------------")
let test = ["fantasy", "jrr tolkien"]
function searchMany(tags) {
    let result = []
    library.forEach(i => {
        tags.forEach(t => {
            if (i.tags.includes(t)) {
                result.push(i)
            }
        })
    })
    return result
}

function searchManyGPT(tags) {
    return library.filter(i => {
        tags.some(t => {
            i.tags.includes(t)
        })
    })
}
console.log(searchManyGPT(test))
// console.log(searchMany(test))
// console.log(search("fantasy"))