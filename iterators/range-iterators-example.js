/* 
Range Iterator with Step
@params 
start: Integer value 
end: Integer value  
step: Integer value

@return : range of values in array
*/

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let currentIndex = 0;
  let currentValue = start;
  return {
    next() {
      if(currentIndex >0)
        currentValue = currentValue+step

      if(currentValue >= end){
          return {
              value:currentIndex,
              done:true
          }
      }
      currentIndex++;
      return {
        value: currentValue,
        done: false,
      }
    },
  }
}

const rangeIt = makeRangeIterator(1, 20, 5) // 1,3,5,7,9

let result = rangeIt.next();
while(!result.done){
    console.log(result.value)
    result = rangeIt.next()
}

console.log(`total iteration is ${result.value}`)

/* console.log(rangeIt.next());
console.log(rangeIt.next());
console.log(rangeIt.next());
console.log(rangeIt.next());
console.log(rangeIt.next());
console.log(rangeIt.next()); */
