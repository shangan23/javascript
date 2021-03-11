/*
Currying is a transformation of a function with multiple arguments into a sequence of nested functions 
with a single argument. 
*/

let multiply = function(a, b) {
  console.log(a * b);
};

multiply(2, 3);

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(16);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(9);
