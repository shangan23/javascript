const log = console.log
const royalChilderen = [
  {
    name: 'Rama',
    age: 30,
  },
  {
    name: 'laxshman',
    age: 23,
  },
  {
    name: ' sathrugunana',
    age: 22,
  },
  {
    name: 'bharathan',
    age: 21,
  },
]

const eligibleKingAge = 24
const eligibleKing = royalChilderen.filter(
  (children) => children.age > eligibleKingAge
)
log('Eligible childs to become King are,', eligibleKing, royalChilderen)
