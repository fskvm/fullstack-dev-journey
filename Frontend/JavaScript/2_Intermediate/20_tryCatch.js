//* The try statement allows you to define a block of code to be tested for errors while it is being executed.
//* The catch statement allows you to define a block of code to be executed if an error occurs in the try block.

console.log("hello world");
console.log("hello world");

//! try always work with catch, without a catch it will throw an error
// let a = 10; then catch will not execute because try to not throw an error
try {
    console.log(a);
} catch (error) {
    console.log(error); //! Not showing in a red message because we are printing it
    console.log("An error occurred");
}

console.log("hello world"); // this will be executed now because the error is caught by try-catch
console.log("hello world");
console.log("hello world");
