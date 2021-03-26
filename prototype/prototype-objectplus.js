function objectPlus(o,stuff){
    var n;
    function F() {}
    F.prototype = o;
    n = new F();
    n.uber = o;
    for (var i in stuff){
        n[i] = stuff[i];
    }
    return n;
}


var shape = {
    name: "Shape",
    toString: function() {
        return this.name;
    }
}

var twoDee = objectPlus(shape, {
    name : "2D Shape",
    toString: function() {
        return this.uber? this.uber.toString() + "," + this.name: this.name;
    }
});
var triangle = objectPlus(twoDee, {
    name : "Triangle",
    getArea : function() {
    return this.side * this.height/2;
   },
   side: 0,
   height: 0
});

var my = objectPlus(triangle, {
    side: 5,
    height: 10
});

console.log(my.toString());
console.log(my.getArea())