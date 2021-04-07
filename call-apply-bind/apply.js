let college1 = {
    "name": "Indian Institute of Technology (IIT)",
    "city": "Chennai"
}

let college2 = {
    "name": "Indian Institute of Management (IIM)",
    "city" : "Bangalore"
}

let collegeDetails = function(state, country) {
    // Three line template literal
    console.log(`${this.name} located in ${this.city}, 
${state},
${country}
`)
}


let collegeDetailsWithArgs = function(...args) {
    console.log(`${this.name} located in ${this.city}, 
${args[0]},
${args[1]}
`)
}

// Function borrowing with arguments are passed as an Array
collegeDetails.apply(college1, ["Tamil Nadu","India"]);
collegeDetailsWithArgs.apply(college2,["Karnataka","India"]);