//* setInterval(callback, delay) - Uses a callback function to execute code repeatedly at specified intervals.

// setInterval(() => {
//     console.log("hey, Akhtar raza!");
// }, 2000);

//? To stop the interval, you can use clearInterval() with the interval ID returned by setInterval.

let id = setInterval(() => {
    console.log("hey, Akhtar raza!");
}, 2000);

let id2 = setInterval(() => {
    console.log("hey, Akhtar raza! 2");
}, 1000);

//? To stop the interval after 10 seconds
setTimeout(() => {
    clearInterval(id);
    clearInterval(id2);
    console.log("Interval cleared");
}, 10000);