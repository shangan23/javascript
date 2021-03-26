function extend2(Child, Parent){
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p){
        c[i] = p[i];
    }
    c.uber = p;
}

var Shape = function() {};
var TwoDShape = function() {};
Shape.prototype.name = "Shape";
Shape.prototype.toString = function () {
    return this.uber ? this.uber.toString() + "," + this.name : this.name;
}
extend2(TwoDShape,Shape);
TwoDShape.prototype.name = "2D Shape";
var td = new TwoDShape();
console.log(td.toString());