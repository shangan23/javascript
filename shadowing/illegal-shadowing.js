/**
 * Cannot shadow let using var with same
 */

var a = 10
{
  let a = 10
  console.log(a)
}

console.log(a)

//illegal shadowing

let ac = 20
{
  var ac = 200 //SyntaxError: Identifier 'ac' has already been declared
  console.log(ac)
}

console.log(ac)

const ad = 20
{
  var ad = 200 //SyntaxError: Identifier 'ad' has already been declared
  console.log(ad)
}

console.log(ad)
