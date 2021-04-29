/**
 * The sort() method sorts the elements of an array in place and returns the sorted array.
 * The default sort order is ascending, built upon converting the elements into strings,
 * then comparing their sequences of UTF-16 code units values. 
 * Internally uses Three-way-comparission (a<b => -1, a>b => 1, a=b => 0)
 */

const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()
console.log(months) // expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000]
array1.sort()
console.log(array1) // expected output: Array [1, 100000, 21, 30, 4]

var numbers = [4, 2, 5, 1, 3]
numbers.sort(function (a, b) {
  return a - b
})
console.log(numbers) // [1, 2, 3, 4, 5]

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
]

// sort by value
items.sort(function (a, b) {
  return a.value - b.value
})

// sort by name
items.sort(function (a, b) {
  var nameA = a.name.toUpperCase() // ignore upper and lowercase
  var nameB = b.name.toUpperCase() // ignore upper and lowercase
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }

  // names must be equal
  return 0
})

// original array will be modified -> splice, sort, map
// Sorting non-ASCII characters
var itemsa = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair','ஆமை']
let sortedArray = itemsa.sort(function (a, b) {
  return a.localeCompare(b)
})
console.log(itemsa, sortedArray)

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']

