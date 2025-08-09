//* Higher Order Functions - A function that does one or both of the following:
//* 1. Takes one or more functions as arguments
//* 2. Returns a function as its result

// Example 1: Function that takes a function as an argument

function multipleGreet(greetFunc, count){
   for(let i = 1; i <= count; i++){
         greetFunc();
   }
}

function greet(){
    console.log("Namaste");
}

multipleGreet(greet, 5); //! Don't use greet() here, use greet instead because we want to pass the function itself, not the result of calling it.
//? Or we can directly pass an anonymous function as an argument which is nameless function
multipleGreet(function (){ //todo  we can write the name of the function here as well, but it is not necessary we can skip it
    console.log("Hello");},4);

// Example 2: Function that returns a function

let request = "odd";
function oddOrEvenFactory(request){
    if(request === "odd"){
        return function(num){
            console.log(!(num % 2 === 0));
        }
    } else if(request === "even"){
        return function(num){
            console.log(num % 2 === 0);
        }
    } else {
        console.log("Invalid request");
    }
}

let oddOrEven = oddOrEvenFactory(request);
oddOrEven(5); // true

request = "even";
oddOrEven = oddOrEvenFactory(request);
oddOrEven(5); // false