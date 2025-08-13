//* Promises - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//? A Promise has two parameters as a callback function:
//? 1. resolve(Success) - A function that is called when the asynchronous operation completes successfully.
//? 2. reject(failure) - A function that is called when the asynchronous operation fails.

//! let myPromise = new Promise((resolve, reject) => {
//!           if(true)
//!              resolve("Success")
//!           else
//!              reject("Failure")
//!           });

//!  myPromise
//!    .then((result) => console.log(result)) - o/p Success
//!    .catch((error) => console.log(error)) -  o/p Failure

//todo Properties and Methods of Promise Object
// 1) There are 3 states - fulfilled, rejected, pending(if we have set timeout for promise then initially till timing it will be in pending state then fulfilled or rejected).
// 2) value - The result of that was resolved.
// 3) Methods -
//    - .then() - Attaches a callback for when the Promised transitions to a fulfilled state.
//    - .catch() - Attaches a callback for when the Promised transitions to a rejected state.
//    - .finally() - Attaches a callback that executes regardless of the promise's outcome



//* Example


//? Or Case: In the below, if we do not use the return keyword, we can not chain .then() or .catch() outside the function.
//? Better approach is to use return.

function saveData(data){
    return new Promise((res, rej) => {
//! let promise = new Promise((res, rej) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            res("Data saved successfully!");
        } else {
            rej("Data not saved!");
        }
    });

//! promise
//!  .then((result) => console.log(result))
//!  .catch((error) => console.log(error))
}


//? let request = saveData("Akhtar");
//? console.log(request); // request is a Promise object
//? request.then((result) =>{
//?     console.log("Result:", result);
//? })
//? .catch((error) => {
//?     console.log("Error:", error);
//? })

//! or more better way rather than using variable to store a promise object, we can directly use it like below:

saveData("Akhtar")
.then((result) => {
    console.log("Result:", result);
})
.catch((error) => {
    console.log("Error:", error);
})

//todo Parameters - result is the value we passed in resolve()
//                  error is the value we passed in reject()