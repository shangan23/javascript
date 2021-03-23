// With iterable object [Symbol.iterator] implementation
function squared(max){
  return {
    [Symbol.iterator](){
      let n =0;
      return {
        next(){
          n++
          if(n<=max){
            return {
              value:n*n,
              done:false
            }
          }else{
            return {
              value:undefined,
              done:true
            }
          }
        }
      }
    }
  }
}

for(const sq of squared(2)){
  console.log(sq)
}

// Array destructuring
const [a,b,c,d] = squared(4)
console.log('\nArray destructuring')
console.log(a,b,c,d)