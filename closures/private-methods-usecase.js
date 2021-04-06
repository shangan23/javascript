/**
 * Traditionally, JavaScript did not have support for private methods, so closures were used to implement it instead.
 * @param {*} privateText 
 * @returns 
 */
function Test(privateText) {
    const hidden = privateText
    return {
        privateVar: function() {
            return hidden
        }
    }
}

const test = Test("I am private");
const log = console.log
log(test.hidden) // undefined
log(test.privateVar()) // "I am private"