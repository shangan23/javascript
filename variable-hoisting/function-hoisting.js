/*
* JavaScript functions can be loosely classified as the following:
* 1. Function declarations
* 2. Function expressions
*/

//Function declarations

hoisted(); // Output: "This function has been hoisted."

function hoisted() {
console.log('This function has been hoisted.');
};

//Function expressions

// expression(); //Output: "TypeError: expression is not a function

// var expression = function() {
// console.log('Will this work?');
// };

/*
* Order of precedence:
* > Variable assignment takes precedence over Function declaration
* > Function declarations takes precedence over Variable declaratoin
*/

//Variable assignment over function declaration

var double = 22;

function double(num) {
  return num * 2;
}

console.log(typeof double); // Output: number

//Function declarations takes precedence over Variable declaratoin

var doubleFn;
function double(num) {
  return num * 2;
}

console.log(typeof doubleFn); // Output: function