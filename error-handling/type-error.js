//TypeError
try {
    var a = 10;
    a.toUpperCase()
  } catch (e) {
    if (e instanceof TypeError) console.log(e.name, e.message)//TypeError a.toUpperCase is not a function
  }
  