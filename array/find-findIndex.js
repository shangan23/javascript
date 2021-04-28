/**
 * The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
 * If no values satisfy the testing function, undefined is returned.
 */
const log = console.log
log()

const array1 = [5, 12, 8, 130, 44]
const found = array1.find((element) => element > 10)
log(found)
const foundAtIndex = array1.findIndex((element) => element > 10)
log(foundAtIndex)
// expected output: 12
log()

// Find an object in an array by one of its properties
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 },
]

function isCherries(fruit) {
  return fruit.name === 'cherries'
}
log('Find an object in an array by one of its properties',inventory.find(isCherries))
log('Find an object index in an array by one of its properties',inventory.findIndex(isCherries))
// { name: 'cherries', quantity: 5 }
log()

// Using arrow function and destructuring
const result = inventory.find(({ name }) => name === 'cherries')
log('Find an object in an array by one of its properties',result) // { name: 'cherries', quantity: 5 }

log()

// Find a prime number in an array
function isPrime(element, index, array) {
  let start = 2
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false
    }
  }
  return element > 1
}

log('Find a prime number in an array',[4, 6, 8, 12].find(isPrime)) // undefined, not found
log('Find a prime number in an array',[4, 5, 8, 12].find(isPrime)) // 5
log()

// Declare array with no elements at indexes 2, 3, and 4
const array = [0,1,,,,5,6];

// Shows all indexes, not just those with assigned values
array.find(function(value, index) {
  log('Visited index ', index, ' with value ', value);
});

// Shows all indexes, including deleted
array.find(function(value, index) {
  // Delete element 5 on first iteration
  if (index === 0) {
    log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  log('Visited index ', index, ' with value ', value);
});
// expected output:
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
