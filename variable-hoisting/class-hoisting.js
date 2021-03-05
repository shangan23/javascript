/*
* JavaScript classes can be loosely classified as the following:
* 1. Class declarations
* 2. Class expressions
*/

//Class declarations

var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

class Hobbit {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}

//has to be
// class Hobbit {
//     constructor(height, weight) {
//         this.height = height;
//         this.weight = weight;
//     }
// }

// var Frodo = new Hobbit();
// Frodo.height = 100;
// Frodo.weight = 300;
// console.log(Frodo); // Output: { height: 100, weight: 300 }

//Class expressions
var Polygon; //undefined
var Square = new Polygon(); // new undefined()
Square.height = 10;
Square.width = 10;
console.log(Square); // Output: TypeError: Polygon is not a constructor

var Polygon = class Polygon { //named class
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

//has to be
//  var Polygon;
//  Polygon = class Polygon {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };

// var Square = new Polygon();
// Square.height = 10;
// Square.width = 10;
// console.log(Square);