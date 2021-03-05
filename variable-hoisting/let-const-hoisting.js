/*
* Temporal Dead Zone: The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. 
* SyntaxError - duplicate let with same variableName;let is strict; Var is lenient; Const without initialization;
* TypeError -  Overriding const variable after initialization; 
* ReferenceError - Unknown variables will through `not defined`; Before initialization;
*/

// // output: undefined
// console.log(b) 
// //console.log(a);
// /* 
// * Error: ReferenceError: Cannot access 'a' before initialization; will stop execution after encountering this error
// * Temporal Dead Zone throws undefined.
// */

//scope chain
globalVar = "Global";
var globalVar;

function lexicalParent(){
    var lexicalParentVar = globalVar + "lexicalParentVar";
    function lexicalChild(){
        let lexicalChildVar = "lexicalChildVar";
        return globalVar + lexicalParentVar + lexicalChildVar;
    }
    return lexicalChild();
    
   //return lexicalParentVar;
}

console.log(lexicalParent());