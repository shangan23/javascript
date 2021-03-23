// With Iterator protocol implementation
/* 
An iterator is an object which defines a sequence and potentially a return value upon its termination.
Specifically, an iterator is any object which implements the "Iterator protocol" by having 
a next() method that returns an object with two properties:
value: The next value in the iteration sequence. ;done: This is true if the last value in the sequence 
has already been consumed. If value is present alongside done, it is the iterator's return value. 
*/
function qubed(max) {
  let n = 0
  return {
    next() {
      n++
      if (n <= max) {
        return {
          value: n * n * n,
          done: false,
        }
      } else {
        return {
          value: undefined,
          done: true,
        }
      }
    },
  }
}

const qubedIterator = qubed(10)

//console.log(qubedIterator)

console.log(qubedIterator.next())
console.log(qubedIterator.next())
console.log(qubedIterator.next())
console.log(qubedIterator.next())
console.log(qubedIterator.next())
console.log(qubedIterator.next())
console.log(qubedIterator.next())
console.log(qubedIterator.next())
console.log(qubedIterator.next())
console.log(qubedIterator.next())
console.log(qubedIterator.next())
