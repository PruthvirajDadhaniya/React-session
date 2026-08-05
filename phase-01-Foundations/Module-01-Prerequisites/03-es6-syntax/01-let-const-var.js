// ------const------(cannot be reassigned)
const pi = 3.14;
// pi = 3.14159; // This will throw an error because pi is a constant //Uncaught TypeError: Assignment to constant variable.

// -----let------(can be reassigned)
let radius = 5;
radius = 10; // This is valid because radius is declared with let and can be reassigned
console.log(radius); // Output: 10

// block scope example
{
    const message = "Hello, World!";
    console.log("inside block",message); // Output: Hello, World!
}
// console.log("outside block",message); // This will throw an error because message is block-scoped and not accessible outside the block //Uncaught ReferenceError: message is not defined

function testScore(){
    if(true){
        var localVar = "I am local to this block";
        console.log(localVar); // Output: I am local to this block
    }
    return localVar; // This will throw an error because localVar is block-scoped and not accessible outside the if block //Uncaught ReferenceError: localVar is not defined
}
// console.log("outside function",localVar); // This will throw an error because localVar is block-scoped and not accessible outside the function //Uncaught ReferenceError: localVar is not defined
console.log(testScore()); 


//var pollutes the global object in non-module scripts
var x = 1;
console.log(x);
console.log(window.x); // Output: 1 (in browsers, var declarations are added to the global object)

// Rule of thumb : default to const, use let only when you need to reassign, avoid var
