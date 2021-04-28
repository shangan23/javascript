/**
 * The some() method tests whether at least one element in the array passes the test implemented by the provided function.
 * It returns true if, in the array, it finds an element for which the provided function returns true;
 * otherwise it returns false. It doesn't modify the array.
 */
const log = console.log
log()
const array = [1, 2, 3, 4, 5]

// checks whether an element is even
const even = (element) => element % 2 === 0
log('checks whether an element is even', array.some(even))
// expected output: true
log()
// Testing value of array elements

const arr = [2, 5, 8, 1, 4]
const set = [(12, 5, 8, 1, 4)]
function isBiggerThan10(element, index, array) {
  return element > 10
}
log('Testing value of array elements', arr.some(isBiggerThan10)) // false
log('Testing value of array elements', set.some(isBiggerThan10)) // true

// Testing array elements using arrow functions
log()
log(
  'Testing array elements using arrow functions',
  set.some((x) => x > 10)
) // false
log(
  'Testing array elements using arrow functions',
  arr.some((x) => x > 10)
) // true
log()
// Checking whether a value exists in an array
const fruits = ['apple', 'banana', 'mango', 'guava']

function checkAvailability(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal
  })
}

log(
  'Checking whether a value exists in an array',
  checkAvailability(fruits, 'kela')
) // false
log(
  'Checking whether a value exists in an array',
  checkAvailability(fruits, 'banana')
) // true

// Checking whether a value exists using an arrow function

function checkAvailabilityArrow(arr, val) {
  return arr.some((arrVal) => val === arrVal)
}

log(
  'Checking whether a value exists in an array',
  checkAvailabilityArrow(fruits, 'kela')
) // false
log(
  'Checking whether a value exists in an array',
  checkAvailabilityArrow(fruits, 'banana')
) // true
log()
// Converting any value to Boolean
const TRUTHY_VALUES = [true, 'true', 1]
function getBoolean(value) {
  'use strict'

  if (typeof value === 'string') {
    value = value.toLowerCase().trim()
  }

  return TRUTHY_VALUES.some(function (t) {
    return t === value
  })
}

log('Converting any value to Boolean', getBoolean(false)) // false
log('Converting any value to Boolean', getBoolean('false')) // false
log('Converting any value to Boolean', getBoolean(1)) // true
log('Converting any value to Boolean', getBoolean('true')) // true
log()