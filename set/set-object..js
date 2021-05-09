//Set Object
//Used to store unique values

let set = new Set();
console.log(set);
// Set(0) {}

set.add("CSK");
set.add("RCB");
set.add("MI");
set.add("SRH");
console.log(set);
// Set(4) {"CSK", "RCB", "MI", "SRH"}

//Size
console.log("Size of IPL teams",set.size);
//Size of IPL teams 4

console.log("set has(SRH) ", set.has("SRH"));
//set has(SRH)  true

//set delete
set.delete("SRH")
console.log(set);
//Set(3) { 'CSK', 'RCB', 'MI' }

//set Foreach
//Set dont'have keys
console.log("set Foreach");
set.forEach((value) => {
	console.log(value);
});

//set for of will give same result
console.log("set for.. of");
for(iplteam of set) {
	console.log(iplteam);
}
//Set(3) { 'CSK', 'RCB', 'MI' }

set.clear();
console.log("IPL Cancel clear all teams", set);
// IPL Cancel clear all teams Set(0) {}

const uniqueArray = [ ...new Set([1, 1, 2, 2, 2, 3])] 
console.log(uniqueArray);
// (3) [1, 2, 3]

const setSize = new Set([1, 1, 2, 2, 2, 3])
console.log("set Size ",setSize.size);
//set Size  3