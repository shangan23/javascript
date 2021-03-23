const names = ['Bob', 'Alice', 'Ram', 'Sita']

function* generateUniqueRandomName(array) {
  const avaialbelNames = array

  while (avaialbelNames.length != 0) {
    const rand = Math.random()*avaialbelNames.length;
    console.log(rand,Math.floor(rand))
    let randomIndex = Math.floor(Math.random()*avaialbelNames.length)
    let value = avaialbelNames[randomIndex]

    avaialbelNames.splice(randomIndex, 1)
    yield value
  }
}

for (const name of generateUniqueRandomName(names)) {
  console.log(name)
}
