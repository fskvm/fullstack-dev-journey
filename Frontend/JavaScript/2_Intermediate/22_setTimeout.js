//* setTimeout(callback, delay) - used to execute a function after a specified delay. Here the timeout is in milliseconds,
//*, So we need to multiply seconds by 1000 for second. It is only executed once.

console.log("hey there");
setTimeout( () => {
    console.log("Apna College")
}, 4000); // 4000 milliseconds = 4 seconds
console.log("Welcome to");

