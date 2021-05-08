//Object.create()
// Used to create an object based on other object (Prototype)

const nullObj = Object.create(null);
console.log('nullObjct', nullObj);

const normal = Object.create({}); // create a normal object
console.log('normal', normal);

const person = {
  name: 'Mr.x',
  age: 25,
  gender: 'Male'
};
const newperson = Object.create(person);
console.log('newperson', newperson);

console.log('person', person);