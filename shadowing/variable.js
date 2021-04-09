var a = 10
{
  var a = 200 // shadowing var a which is declared outside the block
  console.log(a) //200
}

console.log(a) //200
