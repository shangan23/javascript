// with error the last value of i repeats
function withError() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
}
withError()

// without error
function withoutError() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
}
withoutError()

// fix with var
function withVar() {
  for (var i = 0; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x)
      }, i * 1000)
    }
    close(i);
  }
}
withVar()
