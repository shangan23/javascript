// Create an Array
let fruits = ['Apple', 'Banana']

/**
 * Common Operations
 * length
 * access
 * iterate/loop
 * push
 * pop
 * indexOf
 * shift
 * unshift
 * splice
 * slice
 */

// length
console.log(fruits.length) // 2

// Access an Array item using the index position
console.log(fruits[0]) // Apple

// Loop over an Array
fruits.forEach(function (item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1

// Add an item to the end of an Array
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]

// Remove an item from the end of an Array
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]

// Remove an item from the beginning of an Array (reverse of pop)
let first = fruits.shift() // remove Apple from the front
// ["Banana"]

// Add an item to the beginning of an Array (reverse of push)
fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]

// Find the index of an item in the Array
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana') // case sensitive; returns -1 if not found
// 1

// Remove an item by index position
let removedItem = fruits.splice(pos, 1) // this is how to remove an item
// ["Strawberry", "Mango"]

// Remove items from an index position
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]

// Copy an Array
let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]

console.log(fruits)
//["Strawberry", "Mango"] (the original array remain same)
