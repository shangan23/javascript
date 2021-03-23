// With Iterator protocol implementation
/* 
An iterator is an object which defines a sequence and potentially a return value upon its termination.
Specifically, an iterator is any object which implements the "Iterator protocol" by having 
a next() method that returns an object with two properties:
value: The next value in the iteration sequence. ;done: This is true if the last value in the sequence 
has already been consumed. If value is present alongside done, it is the iterator's return value. 
*/

class NumberList{
    constructor(numberArray){
        this.numbmer = numberArray
    }
    numberIterator(){
        let currentIndex = -1
        let numbers = this.numbmer;
        return {
            next(){
                currentIndex++
                return {
                    value:numbers[currentIndex]?numbers[currentIndex]:Infinity,
                    done:currentIndex >= numbers.length
                }
            }
        }
    }
}

const numberList = new NumberList([1,2,3,4,5]).numberIterator();

console.log(numberList.next())
console.log(numberList.next())
console.log(numberList.next())
console.log(numberList.next())
console.log(numberList.next())
console.log(numberList.next())