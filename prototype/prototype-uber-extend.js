
//inheritance part
function extend(Child,Parent){
    var F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    //reset
    Child.prototype.constructor = Child;
    //uber
    Child.uber = Parent.prototype;
}

function Shape() {}

Shape.prototype.name = "Shape";
Shape.prototype.toString = function() {
 var  constr = this.constructor;
 return constr.uber? constr.uber.toString() + "," + this.name : this.name;
}


function TwoDShape() {}   

extend(TwoDShape,Shape); // TwoDShape extends Shape

TwoDShape.prototype.name = "2D Shape";

//Triangle Part
function Triangle(side,height){
    this.side = side;
    this.height = height;
}
//inheritance Triangle
extend(Triangle,TwoDShape);

Triangle.prototype.name = "Triangle";
Triangle.prototype.getArea = function() {
    return this.side * this.height/2;
}
var ta = new Triangle(5,10);

console.log(ta.toString());
console.log(ta.getArea());
console.log("\n Twod");
var twod = new TwoDShape();
console.log(twod.toString());