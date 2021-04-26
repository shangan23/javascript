let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
//console.log(years.0)   // a syntax error
console.log(years[0])  // works properly

console.log(years['2'] != years['02']) // True
console.log(years['02']) // undefined

// Length
const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3
fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6
console.log(fruits) //["banana", "apple", "peach", empty × 2, "mango"]