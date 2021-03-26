function multi() {
    var n = {}, stuff,j=0, len = arguments.length;
    for (j=0; j < len; j++){
        stuff = arguments[j];
        for (var i in stuff){
            n[i] = stuff[i];
        }
    }
    return n;
}


var shape = {
    name: "Shape",
    toString: function() {
        return this.name;
    }
}

var twoDee = {
    name: "2D Shape",
    dimensions: 2
}

var triangle = multi(shape,twoDee, {
    name: "Triangle",
    getArea: function() {
        return this.side * this.height/2;
    },
    side: 5,
    height: 10
})

console.log(triangle);

console.log(triangle.getArea());
console.log(triangle.dimensions);
console.log(triangle.toString());