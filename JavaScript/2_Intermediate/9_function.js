
//*  Function - A block of code designed to perform a particular task making it reusable
//? in JavaScript - firstly, we declare a function definition, then we make a function call

//! In Normal function declaration, we can call the function before it is defined because of hoisting.
/* Function declarations are fully hoisted with their memory and definition allocated during the compile phase,
 while arrow functions and function expressions are hoisted only as variables— their names exist but the actual function is stored later at runtime,
 initially set to undefined.
 */
//! In Function Expression and Arrow Function, we cannot call the function before it is defined.


//todo  Function Call
discRoll();

//todo  Function Declaration
function discRoll(){
   let randomNum = Math.floor(Math.random() * 6) + 1;
    console.log(randomNum);
}

//todo  Function Call
discRoll(); // calling the function to execute it

