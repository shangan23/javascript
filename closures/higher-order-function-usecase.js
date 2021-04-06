/**
 * A higher-order function is a function that either takes one or more functions as arguments or returns a function. 
 */

const floatingNumber = 3.458343435
const log = console.log
log(Math.round(floatingNumber))
log(Number(floatingNumber.toFixed(2)))


function roundNumber(places){
    return function(number){
        return Number(number).toFixed(places)
    }
}

const roundNumber1 = roundNumber(2)
log(roundNumber1(floatingNumber))