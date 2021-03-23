// With iterable object [Symbol.iterator] implementation

class NumberList{
    constructor(){
        this.number = [1,2,3,4,5]
    }
    [Symbol.iterator](){
        const numbers = this.number;
        let currentIndex = -1
        return {
            next(){
                return {
                    value:numbers[++currentIndex],
                    done: currentIndex >= numbers.length
                }
            }
        }
    }
}

const numIterator = new NumberList()[Symbol.iterator]();
console.log(numIterator.next())
console.log(numIterator.next())
console.log(numIterator.next())
console.log(numIterator.next())

for(const num of new NumberList()){
    console.log(num)
}




