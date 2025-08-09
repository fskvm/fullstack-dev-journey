
//* Scope in JavaScript are
//? 1. Global Scope
let globalVar = "I am a global variable";
//? 2. Function Scope
function myFunction() {
    let functionVar = "I am a function variable";
    console.log(globalVar); // Accessible
    console.log(functionVar); // Accessible
}
//! console.log(functionVar); // Not accessible, will throw an error

//? 3. Block Scope - Works with let and const nor var
if (true) {
    let blockVar = "I am a block variable";
    var VarBlock = "I am a var block variable";
    console.log(globalVar); // Accessible
    console.log(blockVar); // Accessible
    console.log(VarBlock); // Accessible
}
//! console.log(blockVar); // Not accessible, will throw an error
console.log(VarBlock); //todo  - Accessible because var does not have block scope, avoid using var
myFunction();
