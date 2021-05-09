// Map Object
/* Allows both object(key,values) and primitive data type
   Have Size method which is not there in Object
   Preserves Insertion order
   Iterable
*/
let map = new Map();
console.log(map); // Map(0) {}

map.set("Name", "Johndoe");
map.set("age", 40);
map.set("profession", "programmer");
console.log(map);

// Map(3)
// 0: {"Name" => "Johndoe"}
// 1: {"age" => 40}
// 2: {"profession" => "programmer"}

map.set(1, "New numerical Index");

console.log(map);
// Map(4)
//0: {"Name" => "Johndoe"}
//1: {"age" => 40}
//2: {"profession" => "programmer"}
//3: {1 => "New numerical Index"}
//preserves insertion order

console.log("Map Size", map.size);
//Map Size 4

console.log("Map Keys", map.keys());
//Map Keys [Map Iterator] { 'Name', 'age', 'profession', 1 }

console.log("Map Values", map.values());
//Map Values [Map Iterator] { 'Johndoe', 40, 'programmer', 'New numerical Index' }

console.log("Map Entries", map.entries());
/* Map Entries [Map Entries] {
  [ 'Name', 'Johndoe' ],
  [ 'age', 40 ],
  [ 'profession', 'programmer' ],
  [ 1, 'New numerical Index' ]
} */
console.log(" ");
console.log("map ForEach");
map.forEach((value, key) => {
	console.log(key + ":" + value);
});

console.log(" ");
//has method 
console.log("Has Method map.has(1):" ,map.has(1));
//Has Method map.has(1): true

//delete method
map.delete(1); 
console.log("After map.delete(1)",map);

//After map.delete(1) Map(3) {
//  'Name' => 'Johndoe',
//  'age' => 40,
//  'profession' => 'programmer'
//}

//clear method
map.clear();
console.log("map.clear()", map);
// map.clear() Map(0) {}


let objectToMap = {
  Name: "Johndoe",
  age: 40,
  profession: "programmer"
};

let objmap = new Map(Object.entries(objectToMap));

console.log(objmap);
// Map(3)
//[[entries]]
// 0: {"Name" => "Johndoe"}
// 1: {"age" => 40}
// 2: {"profession" => "programmer"}

