//* Async Function - In JavaScript, an async function is a function that is declared with the `async` keyword and then further used with .then() and catch() methods to handle asynchronous operations.

async function saveDataa(data) {
    const internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
        return `Data saved successfully: ${data}`;
    } else {
        throw new Error("Data not saved!"); //! We use throw to reject the promise in async function
        //! The `new` keyword is used to create (or instantiate) a new object from a constructor. In this case, the constructor is `Error`.
        //! The `Error` object is a built-in constructor in JavaScript that represents an error.
        //! Always use this when throwing errors for better debugging(stack trace), maintainability etc.

        //? or

        //? throw "Data not saved!"; //it just returns string but not an Error object doesn't use this
    }
}

saveDataa("Akhtar")
    .then(result => {
        console.log("Data 1:", result);
        return saveDataa("Raza"); //! returning will allow chaining below .then
    })
    .then(result => {
        console.log("Data 2:", result);
        return saveDataa("is a Great");
    })
    .then(result => {
        console.log("Data 3:", result);
        return saveDataa("Developer");
    })
    .then(result => {
        console.log("Data 4:", result);
    })
    .catch(error => {
        console.log(error.message);
        console.log(error.name);
        console.log(error.stack);
    })
    .finally(() => {
        console.log("All operations completed.");
    })


//todo we can also use async function as arrow function
let demo = async () => {
    return console.log(5);
}
demo(); //? this will return a promise that resolves to 5

//* VIP - why 5 log first before saveDataa ? because demo is an async function, and it returns a promise that resolves immediately
//*       as we don't have any await in it. So, synchronous code always runs first, and promise-based asynchronous code (microtasks queue)
//*       runs after the synchronous code is done. This is why `5` (from `demo()`) appears in the output before the results of . `saveDataa`