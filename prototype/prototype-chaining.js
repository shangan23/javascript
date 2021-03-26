/**
 * Things to remember:
 *  - agument: The process of creating property or methods or assigning object to prototype.
 *  - side effect: While agumentating with another object the source object's construcutor will be overrided with agumented object.
 *    So the constructor need to be reset with its own object.
 *  - lookup : The process of searching the property in each objects 
 *  - prototype chain: Look up process takes place in its parents 
 */

function Shape() {
  this.name = "Shape";
  this.toString = function() {
    return this.name;
  };
}

function TwoDShape() {
  this.name = "2D Shape";
}

function Triangle(side, height) {
  this.name = "Triangle";
  this.side = side;
  this.height = height;
  this.getArea = function() {
    return this.side * this.height / 2;
  };
}

console.log("Before Inheritance :-");
console.log("Shape.prototype",Shape.prototype);
console.log("TwoDShape.prototype ",TwoDShape.prototype); 
console.log("Triangle.Prototype",Triangle.prototype); 

//Augment
//We can either Augment to the empty prototype object or completely
//replace with another object

/* Shape.prototype.profession = "javascript developer";
Shape.prototype.writeCode = function() {
  return "Writes Javascript Code";
}

console.log("Shape prototype",Shape.prototype);*/

console.log("Inheritance Begins here:-");
//Inheritance starts here
TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();
//Before Resetting the constructor Property (Sideeffect demonstrated here)
console.log("\nBefore Resetting the constructor Property:-\n");
var twod = new TwoDShape();
var ta = new Triangle(5,10);

// Side Effect of replacing an object with prototype
// Example here twod object constructor points to Shape Constructor (this is the sideeffect)
console.log("Constructor of twod object" ,twod.constructor);
console.log("Constructor of ta object" ,ta.constructor);

//After Resetting the consructor Property
// Now the constructor property of twod and ta objects points to their
// respective TwoDShape and Triangle  Constructors
TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;
console.log("\nAfter Resetting the consructor Property \n");
console.log("Constructor of twod object" ,twod.constructor);

console.log("Constructor of ta object" ,ta.constructor);
//Lets see the inheritance magic here
console.log("\nLets see how inheritance works now\n");
console.log("twod.toString() takes its own name  ", twod.toString()); //Takes its own property
console.log("ta.toString takes its own name ", ta.toString());
console.log("ta.getArea ", ta.getArea());