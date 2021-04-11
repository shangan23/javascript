/**
 * 3 scopes created during execution context
 * Script - let and const declared outside block
 * Block
 * Global
 */

let a = 10
const b = 200
{
  let a = 200 // shadowing var a which is declared outside the block
  const b = 10
  console.log(a) //200
  console.log(b) //10
}

console.log(a) //10
console.log(b) //200
