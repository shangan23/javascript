//Symbol.iterator: used to create iterable objects to be used in for..of.
// Array, String, Map, Set, userdefined with Iterable syntax are all iterable by for..of

const number  = [1,2,3,4];
for(const n of number){
    console.log(n);
}

const numberIterator = number[Symbol.iterator]();

console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())