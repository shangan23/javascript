// Simple Error handling example
try {
  someUnknownVar // Should throw Reference Error since we are calling an undefined variable
} catch (e) {
  console.log('Error Name: ' + e.name) //Error Name: ReferenceError
  console.log('Error message:  ' + e.message)//Error message:  someUnknownVar is not defined
}
