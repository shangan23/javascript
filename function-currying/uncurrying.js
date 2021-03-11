/*
Currying is a transformation of a function with multiple arguments into a sequence of nested functions 
with a single argument. 
*/

let multiply_curried = a => b => c => {
  return a * b * c;
};

let multiply = (a, b, c) => multiply_curried(a)(b)(c);

let res = multiply(2, 3, 4);
console.log(res);

