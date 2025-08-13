//* Arrow Functions are a more concise syntax for writing function expressions and function declaration in JavaScript.
//? Basically, used to assign a function to a variable or pass an arrow function as callback(or Argument) to another function.
//? Calling an arrow function is the same as calling a regular function.

let add = (a, b) => {
    return a + b;
}; //todo -  Semicolon shows the end of the statement as it is assigned to a variable same as function expression.
console.log(add(2,3));



//? if the function has only one parameter, we can omit the parentheses around the parameter.
//! if there are no parameters, we must use empty parentheses.
let greet = name => {
    return `Hello, ${name}!`;
};
console.log(greet("John"));


//? If the function has only one expression, we can omit the curly braces and the return statement.
add = (a, b) => a + b;
console.log(add(4,4));

//? if the function returns an object literal, we need to wrap the object in parentheses to avoid confusion with the function body.
let createUser = (name, age) => ({
    name: name,
    age: age
});
console.log(createUser("Alice", 30)); // { name: 'Alice', age: 30 }

//? if the function returns an array literal, we can wrap the array in square brackets.
let createArray = (a, b) => [a, b];
console.log(createArray(1, 2)); // [1, 2]