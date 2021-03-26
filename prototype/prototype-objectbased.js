function object(o){
    function F() {}
    F.prototype = o;
    return new F();
}

function objectUber(o){
    var n;
    function F() {}
    F.prototype = o;
    n = new F();
    //uber
    n.uber = o;
    return n;
}


var shape = {
    name: "Shape",
    toString: function() {
        return this.name;
    }
}

var twoDee = objectUber(shape);  // user objectUber() to get parent method
twoDee.name = "2D Shape";
twoDee.toString = function() {
    return this.uber? this.uber.toString() + "," + this.name: this.name;
}

var triangle = objectUber(twoDee); // user objectUber() to get parent method
triangle.name = "Triangle";
triangle.side = 5;
triangle.height = 10;
triangle.getArea = function(){
    return this.side * this.height/2;
}

console.log(triangle.toString());
console.log(triangle.getArea());