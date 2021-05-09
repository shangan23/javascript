// WeakMap

/*
  Maps can store any key type Whereas WeakMaps can store only collections of key objects
  WeakMap does not have size property unlike Map
  WeakMap does not have methods such as clear, keys, values, entries, forEach.
  WeakMap is not iterable.
  The major advantage of using a WeakMap over a Map is memory benefits.
*/

const weakmap = new WeakMap();

//weakmap.set("FullName", "JohnDoe");  TypeError: Invalid value used as weak map key
//Cannot use a string as the key

let person = {};

weakmap.set(person, "Justin");

console.log(weakmap.has(person)); // True

console.log(weakmap.get(person)); // Justin

//No clear method
//console.log(weakmap.clear()); //TypeError: weakmap.clear is not a function

//No Size Property for WeakMap
//console.log(weakmap.size); //undefined

//delete
weakmap.delete(person);
console.log(weakmap); //WeakMap {}