/**
 * Closures : A function bind together with its lexical environment forms closures.
 * Function along with lexical scope forms the closures.
 */

//Example 1

function c() {
  let a = 10
  function d() {
    console.log(a)
  }
  d()
}

c()

//Example 2

function z() {
  let b = 200
  function x() {
    let a = 10
    function y() {
      console.log(a, b)
    }
    y()
  }
  x()
}

z()
