let fruits = ['Strawberry', 'Mango']
const log = console.log
let sliceFruits = fruits.slice(0, 1) // to do shallowCopy
console.log(sliceFruits, fruits)
let spliceFruits = fruits.splice(0, 1) // to remove item in an array
console.log(spliceFruits, fruits)

// use reduce to find the count of repeated names in an array
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

log(
  names.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++
    } else {
      allNames[name] = 1
    }
    return allNames
  }, {})
)

// Group by key
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
]

let groupByKey = 'age'

log(
  people.reduce(function (acc, obj) {
    let key = obj[groupByKey]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
)
/**
 * Sorting
 */

let royalFamily = [
  {
    name: 'rama',
    age: '45',
  },
  {
    name: 'krishna',
    age: '80',
  },
  {
    name: 'bishma',
    age: '145',
  },
  {
    name: 'arujuna',
    age: '65',
  },
]

console.log(
  'royalFamily by name',
  royalFamily.sort((a, b) => {
    a = a.name.toUpperCase()
    b = b.name.toUpperCase()
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    }
    return 0
    //return a.name - b.name
  })
)

let plainArray = ['rama', 'Krishna', 'arjuna', 'bhisma', 10, 5, 8]
console.log(
  'plainArray',
  plainArray.sort((a, b) => {
    if (typeof a === 'string') a = a.toUpperCase()
    if (typeof b === 'string') b = b.toUpperCase()
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    }
    return 0
  })
)
