class squaredNumber {
    constructor(max){
        this.max = max
    }
    *squaredGenerator(){
        let n = 0;
        while(n<this.max){
            n++;
            yield n*n;
        }
        return true
    }
}

const squaredObj = new squaredNumber(20);
const squaredIterator = squaredObj.squaredGenerator()

for(const squared of squaredIterator){
    console.log(squared)
}

