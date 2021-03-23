/* 
Generator is special function denoted with `*` next to function keyword or before function name.
It will not use `return` instead use `yield` 

- let you suspend function execution
- simplest way to create iterators
- cannot be used with arrow functions.
*/

function* generateValues() {
  yield 1
  yield 2
}

const valueIt = generateValues()
console.log(valueIt.next())
console.log(valueIt.next())
console.log(valueIt.next())
