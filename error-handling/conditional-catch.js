try {
  //TypeError
  myroutine()
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (e instanceof ReferenceError) {
    // statements to handle ReferenceError exceptions
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptions
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
  } else if (e instanceof SyntaxError) {
    // statements to handle SyntaxError exceptions
  } else {
    // statements to handle any unspecified exceptions
    console.error(e) // pass exception object to error handler
  }
}
