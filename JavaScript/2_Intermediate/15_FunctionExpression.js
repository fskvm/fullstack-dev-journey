//* Function Expression - A nameless function that is assigned to a variable. Here we can use the variable with parenthesis to call the function.
//? Hoisting is not applicable to function expressions, meaning they cannot be called before they are defined.

let greet = function () {
    console.log("Namaste");
}

greet(); // greet is a variable here

//todo  - Perform what ever operation we want to do just like a variable for example updating the variable
greet = function (name){
    console.log("Namaste " + name);
}
greet("John"); // Namaste John

//todo  -  We can also pass parameters to the function expression
let add = function (a, b) {
    return a + b;
}
console.log(add(5, 10)); // 15
