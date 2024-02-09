/* 
    ? State Machines
    * allow us to associate strings with a list of other values
    * quick and efficient
    * prevent malformed decisions
    * system with finite and defined states
    * info is reliant upon logic in order to transition or be reassigned
*/

let states = {
    il: "Illinois",
    vt: "Vermont",
    in: "Indiana"
}

function lookupState(state) {
    return states[state]
}

console.log(lookupState("il"))
console.log(lookupState("vt"))

let light = {
    red: ["green", "yield"],
    yellow: ["red"],
    green: ["yellow"],
    yield: ["red"]
}

let currentState = "green"

function enterState(newState) {
    // assigns values of state property matching current state
    let validTransition = light[currentState]
    // verify if newState is a valid transition
    if (validTransition.includes(newState)) {
        // change the light
        currentState = newState
        console.log(currentState)
    } else {
        // throw error if transition is not possible
        throw new Error(`Invalid state transition from ${currentState} to ${newState}`)
    }
}

enterState("yellow")