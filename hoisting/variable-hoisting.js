/*
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope 
before code execution. Remember that JavaScript only hoists declarations, not initialisation. 
*/
// Variable Hoisting

console.log(age); // output: name is undefined
var age = "javascript";

console.log(age); // output: name is javascript
console.log("--end--"); 

