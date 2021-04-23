//ReferenceError
try {
  myroutine()
} catch (e) {
  if (e instanceof ReferenceError) console.log(e.name, e.message) //ReferenceError myroutine is not defined
}
