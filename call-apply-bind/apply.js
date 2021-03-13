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

// Function borrowing with arguments are passed as an Array
collegeDetails.apply(college1, ["Tamil Nadu","India"]);
collegeDetails.apply(college2,["Karnataka","India"]);