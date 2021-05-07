//Array.prototype.flat()
/**
 * The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * depth Optional -The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
 */

let numbers = [
  1,
  2,
  [3, 4, 5],
  [6, 7],
  8,
  9,
  [
    [10, 11],
    [12, 13],
  ],
]
let arr = numbers.flat(2)
console.log(arr)

const arr1 = [0, 1, 2, [3, 4]]

console.log(arr1.flat())
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]],[{4:{},5:{}}]]

console.log(arr2.flat(3))
// expected output: [0, 1, 2, [3, 4]]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]