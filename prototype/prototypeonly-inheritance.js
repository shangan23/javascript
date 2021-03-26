function Shape() {}

Shape.prototype.name = "Shape";
Shape.prototype.toString = function() {
    return this.name;
}

function TwoDShape() { }
TwoDShape.prototype.name = "2DShape";


function Triangle(side, height) {
  this.side = side;
  this.height = height;
  this.getArea = function() {
    return this.side * this.height / 2;
  };
}

Triangle.prototype.name = "Triangle";

console.log("TwoDShape prototype ",TwoDShape.prototype);
console.log("Traingle prototype ",Triangle.prototype);
console.log("\n Inherit only the prototype");
TwoDShape.prototype = Shape.prototype; //previously it was new Shape() now only the prototype is assigned
Triangle.prototype = TwoDShape.prototype;
//Reset constructor 
TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;

console.log("create 2d object");
var twod = new TwoDShape();
var ta = new Triangle(5,10);

console.log("Resetting the name property resets all the instance");
Triangle.prototype.name = "Triangle"; // changing the property name affects parents property in prototype
console.log("ta.toString method call: ",ta.toString());
console.log("twod toString method call returns triangle:",twod.toString());