function extendCopy(p){
    var c = {};
    for (var i in p){
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}

var shape = {
    name: "Shape",
    toString: function() {
        return this.name;
    }
}

var twoDee = extendCopy(shape);

twoDee.name = "2D Shape";
twoDee.toString = function() {
    return this.uber? this.uber.toString() + "," + this.name: this.name;
}

var triangle = extendCopy(twoDee);
triangle.name = "Triangle";
triangle.getArea = function() {
    return this.side * this.height/2;
}
triangle.side = 5;
triangle.height = 10;
console.log(triangle.getArea());
console.log(triangle.toString());