/* 
    ? Objects
    * containers for values in JavaScript Object Notation format (JSON)
    * exists as a string
    * denoted by { }
    * not indexable
    * comma separated key-value pairs || properties: values
    * has properties and methods
        * .property (ex: .length)
        * .method() (ex: .toUpperCase())
    * has .this keyword
*/

// ? Object Literal Creation

let obj = {}
console.log(obj) // object literal
console.log(typeof obj)
console.log(obj instanceof Object)

let student = new Object({
    // property: value,
    // key: value,
    name: "Melissa",
    age: 24,
    isTeacher: true,
    cohort: "sdb-may-23"
})

console.log(student)

let bentley = {
    species: "dog",
    color: "cow",
    spayedNeutered: true,
    breed: "olde english bulldog",
    weight: 78,
    favoriteActivity: ["farting", "fetching", "sleeping"]
}

// ? Pretty display in a table
console.table(bentley)

// ? Accessing properties and values

// ? Access using dot notation (member access operator)
console.log(bentley.weight)

// ? Access using keys
console.log(bentley["species"])

// ? Viewing objects keys and values
console.log(Object.keys(bentley))
// returns array of object keys
console.log(Object.values(bentley))
// returns array of object values

/* 
    ! Challenge
    * How would you iterate over Bentley's favorite activities?
    * HINT: you can use forEach
*/

// console.log(bentley.favoriteActivity)
bentley.favoriteActivity.forEach(act => console.log(act))

// ? Adding properties and values

let car = {
    make: "BMW",
    model: "M5",
    mileage: 27344
}

car.chassis = "F10"
console.log(car)
car["transmission"] = "DCT"
console.log(car)

// ? Modifying properties and values
car.mileage = 34100
console.log(car)

// ? Other way of modification
/* 
    * 1. reassign property
    * 2. assign new value to new property
    * 3. delete old property
*/

car["make"] = car["manufacturer"]
car.manufacturer = "BMW"
delete car.make
console.log(car)

let test = {
    testProp: "testValue"
}

delete test.testProp
test.newTest = "newValue"
console.log(test)

/* 
    * Makeshift example of a database and an incoming object
    * Matching passwords between db and incoming object
*/

let incoming = {
    username: "mrpndev",
    password: "dbLocal"
}

let db = [
    { username: "mrpndev", password: "dbLocal" },
    { username: "melduch", password: "teacher123" },
    { username: "cfull15", password: "mechanic123" },
]

let login = (request) => {
    // 1. Find the user looping over our db, and if found, store in a variable
    let foundUser = db.filter(u => u.username === request.username)
    console.log(foundUser)
    // 2. Does user exist? (are we getting [ {} ] or [ ])
    if (foundUser.length === 0) {
        // code if [ ]
        console.log("User not found")
    } else {
        // code if [ {} ]
        foundUser[0].password === request.password
        ? console.log("User logged in")
        : console.log("Incorrect password")
    }
}

login(incoming)

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Flying"},
                { episode: 3, episodeName: "Tahani Al-Jamil"},
                { episode: 4, episodeName: "Jason Mendoza"},
                { episode: 5, episodeName: "Category 55 Emergency"},
            ]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [
                { episode: 1, episodeName: "Everything is Great"},
                { episode: 2, episodeName: "Dance Dance Resolution"},
                { episode: 3, episodeName: "Team Cockroach"},
                { episode: 4, episodeName: "Existential Crisis"},
                { episode: 5, episodeName: "The Trolley Problem"},
            ]
        }
    },
    isAvailable: true
}

console.log(netflix.seasonInfo.season1.episodeInfo[0].episodeName)

netflix.seasonInfo.season3 = {
    numberOfEpisodes: 2,
    episodeInfo: [
        { episode: "The New One", episodeName: "Something 1" },
        { episode: "Iron Man Cameo", episodeName: "Something 2" }
    ]
}

netflix.seasonInfo.totalSeasons = Object.keys(netflix.seasonInfo).length
console.log(netflix.seasonInfo)

/* 
    ! Challenge
    * console log the "Pilot"
    * add a season 3
    * season 3 will be an object with properties of numberOfEpisodes & episodeInfo
    * episodeInfo will be an array of 2 objects
    * two objects will have properties of episode & episodeName
    * fabricate their values
    * assign property called totalSeasons to the netflix object with a value of what total seasons are
    
    ! complete by 10:47
*/


