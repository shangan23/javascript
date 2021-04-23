//https://docs.w3cub.com/javascript/global_objects/evalerror
try {
  throw new EvalError('Hello', 'someFile.js', 10)
} catch (e) {
  if (e instanceof EvalError) {
    console.log(e.message) // "Hello"
    console.log(e.name) // "EvalError"
    console.log(e.stack) // "EvalError: Hello"
  }
}
