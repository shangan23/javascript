const array1 = [1, 2, 3, 4]
const log = console.log

log()

const reducer = (accumulator, currentValue) => accumulator + currentValue

// 1 + 2 + 3 + 4
log('1 + 2 + 3 + 4 = ', array1.reduce(reducer),0)
// expected output: 10

// 5 + 1 + 2 + 3 + 4
log('5 + 1 + 2 + 3 + 4 = ', array1.reduce(reducer, 5))
// expected output: 15

log()
// Counting instances of values in an object
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  } else {
    allNames[name] = 1
  }
  return allNames
}, {})

log('countedNames', countedNames)
log()
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// Grouping objects by a property
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
]

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
log('groupedPeople', groupedPeople)
log()
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
