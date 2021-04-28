const log = console.log

const royalFamily = [
  {
    name: 'rama',
    age: 30,
  },
]

// rama's spouse
royalFamily.map((member) => {
  if (member.name === 'rama') {
    member.spouse = 'sita'
  }
})

// rama's children
royalFamily.map((member) => {
  if (member.name === 'rama') {
    member.children = [{ name: 'lava' }, { name: 'kusha' }]
  }
})

log("King's family details,", JSON.stringify(royalFamily,0,2))