function Shape() {}

Shape.prototype.name = "Shape";
Shape.prototype.toString = function() {
 var  constr = this.constructor;
 return constr.uber? constr.uber.toString() + "," + this.name : this.name;
}


function TwoDShape() {}   

//temp constructor
var F = function() {}

// Inheritance Part
F.prototype = Shape.prototype;
TwoDShape.prototype = new F();

//constructor reset
TwoDShape.prototype.constructor = TwoDShape;

TwoDShape.uber = Shape.prototype;

TwoDShape.prototype.name = "TwoDShape";

function Triangle(side,height){
    this.side = side;
    this.height = height;
}

// Triangle Inheritance
F.prototype = TwoDShape.prototype;
Triangle.prototype = new F();

//traingle constructor reset
Triangle.prototype.constructor = Triangle;
Triangle.uber = TwoDShape.prototype;

Triangle.prototype.name = "Triangle";
Triangle.prototype.getArea = function() {
    return this.side * this.height/2;
}
/*Triangle.prototype.toString = function() {
    return this.constructor.uber? this.constructor.uber.toString() + "," + this.name : this.name;
}*/
var ta = new Triangle(5,10);

console.log(ta.toString());
console.log(ta.getArea());
console.log("\n Twod");
var twod = new TwoDShape();
console.log(twod.toString());