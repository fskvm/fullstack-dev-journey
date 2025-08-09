//* Call Stack(LIFO) - It is a mechanism that keeps track of function calls in a program. When a function is called, it is added to the call stack,
//*          and when the function returns, it is removed from the stack. This allows the program to keep track of where it is in the execution flow.

//! Use browser source code to see the call stack in action

function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two() + one();
    console.log(ans);
}
three();

//* Single threaded - JavaScript is single-threaded, meaning it can only execute one piece of code at a time.
//! hence, Single threaded are synchronous in nature that means it executes code line by line, one after another, in the order they appear in the code.
let a = 10;
console.log(a);
let b = 10;
console.log(b);
console.log(a + b);

//* Multi-threaded - JavaScript can handle asynchronous operations using callbacks, promises, and async/await.
//! Asynchronous operations allow JavaScript to perform tasks in the background without blocking the main thread,
setTimeout(()=>{
    console.log("Akhtar raza")
},2000);

setTimeout(()=>{
    console.log("JavaScript")
},2000)

//? JavaScript is single-threaded, meaning it executes one task at a time.
//? However, asynchronous behavior is achieved through browser-managed APIs like `setTimeout`, `setInterval`, Fetch API, Promises, and `async/await`.
//? These allow JavaScript to handle asynchronous operations by placing callbacks into the event loop, which are executed when ready.
//? The browser manages these operations and allows JavaScript to continue execution without blocking the main thread,
//?  enabling non-blocking tasks and the illusion of multi-threading, despite JavaScript being inherently single-threaded.