//Object.assign
// copies properties from 1 object to another

let person = { name: "Johndoe", age: 40 };

let experience = { profession: "Data Scientist", experience: 12 };

let profile = {};

// Object.assign(target, source)
Object.assign(profile, person, experience);

console.log(profile);
// {name: "Johndoe", age: 40, profession: "Data Scientist", experience: 12}