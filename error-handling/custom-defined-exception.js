// Create an object type UserException
function UserException(message) {
  this.message = message
  this.name = 'UserException'
}

// Make the exception convert to a pretty string when used as a string
// (e.g., by the error console)
UserException.prototype.toString = function () {
  return `${this.name}: "${this.message}"`
}

// Create an instance of the object type and throw it
throw new UserException('Value too high') //UserException { message: 'Value too high', name: 'UserException' }
