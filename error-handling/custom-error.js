// Simple Error handling example
try {
  throw new Error('My Custom Error Message Here') // Should throw Reference Error since we are calling an undefined variable
} catch (e) {
  console.log('Error Name: ' + e.name) //Error Name: Error
  console.log('Error message:  ' + e.message) //Error message:  My Custom Error Message Here
} finally {
  console.log('This should print anyway regardless of exception ') //This should print anyway regardless of exception
}
