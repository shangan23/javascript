// Builtin Error Object

let err = new Error("Oops Something Went Wrong");
console.log(err.name);  // prints constructor name used to create this object. i.e Error
console.log(err.message); // Prints the message passed to the Error constructor