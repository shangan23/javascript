function Shape() {}

Shape.prototype.name = "Shape";
Shape.prototype.toString = function() {
    return this.name;
}

function TwoDShape() {}   

// Temp constructor to break the prototype chain
var F = function() {}

F.prototype = Shape.prototype;
TwoDShape.prototype = new F();

//constructor reset for TwoDShape
TwoDShape.prototype.constructor = TwoDShape;

TwoDShape.prototype.name = "TwoDShape";

function Triangle(side,height){
    this.side = side;
    this.height = height;
}

F.prototype = TwoDShape.prototype;
Triangle.prototype = new F();
//constructor reset for Triangle
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getArea = function() {
    return this.side * this.height/2;
}
var ta = new Triangle(5,10);
var twod = new TwoDShape();

Triangle.prototype.name = "Triangle";
console.log(ta.toString());
console.log(twod.toString());
console.log(ta.getArea());