//* Return - This keyword is used to return a single value from a function and exit the function.Hence to return multiple values from a function,
//*           we can use an array or an object. What ever statement written after the return statement will not be executed.

function add(a, b){
    return a+b;
    console.log("This will not be executed");
}
console.log(add(10,20)); //? we need to use console.log or use another variable to store the return value of the function then console it.

//!  A little bit of trick to return addition of 3 numbers
console.log(add(add(10,20),30));