//https://docs.w3cub.com/javascript/global_objects/syntaxerror
try {
  eval('hoo bar')
} catch (e) {
  if (e instanceof SyntaxError) {
    console.error(e.message)//Unexpected identifier
    console.error(e.name)//SyntaxError
    console.error(e.stack) //SyntaxError: Unexpected identifier ...
  }
}
