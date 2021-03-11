/*
Currying is a transformation of a function with multiple arguments into a sequence of nested functions 
with a single argument. 
*/

let multiply = function(x){
    return function(y){
        console.log(x*y)
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(24);

let multiplyByThree = multiply(3);
multiplyByThree(16);