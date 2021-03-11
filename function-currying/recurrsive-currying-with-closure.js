/*
Currying is a transformation of a function with multiple arguments into a sequence of nested functions 
with a single argument. 
*/

function add(a) {
  return function(b) {
    if (!b) {
      return a;
    }
    return add(a + b);
  };
}

let total = add(1)(10)(20)();
console.log(total);

let arrowAdd = a => b => {
  return add(a + b);
};

console.log(arrowAdd(2)(3)(6)(1)());

let factorial = function (n) {
    if(n === 0)
        return 1;
    return n*factorial(n-1)
}

console.log(factorial(3));
