function deepCopy(p,c){
    var c = c || {};
    for (var i in p){
        if(p.hasOwnProperty(i)){
             if(typeof p[i] === 'object') {
                 c[i] = Array.isArray(p[i]) ? [] : {};
                 deepCopy(p[i],c[i]);
             }
        }
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

var twoDee = deepCopy(shape);

twoDee.name = "2D Shape";
twoDee.toString = function() {
    return this.uber? this.uber.toString() + "," + this.name: this.name;
}

var triangle = deepCopy(twoDee);
triangle.name = "Triangle";
triangle.getArea = function() {
    return this.side * this.height/2;
}
triangle.side = 5;
triangle.height = 10;
console.log(triangle.getArea());
console.log(triangle.toString());