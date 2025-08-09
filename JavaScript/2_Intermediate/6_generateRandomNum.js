//* Random Number Generator in range 1 to 10
// step 1
let randomNumber = Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive) - 0.47658768976755875
// step 2
randomNumber = randomNumber * 10; // Scales the random number to a range of 0 to 9 or whatever range you need - 4.765876897675587
// step 3
randomNumber = Math.floor(randomNumber); // Rounds down to the nearest whole number - 4
// step 4
randomNumber = randomNumber + 1; // Adjusts the range to be between 1 and 10 - output 5

console.log(randomNumber);

//! or

console.log(Math.floor(Math.random() * 10) + 1); // Generates a random number between 1 and 10 in one line

//todo Practice Exercise
// range 1 to 100
console.log(Math.floor(Math.random() * 100) + 1); // Generates a random number between 1 and 100
// range 1 to 5
console.log(Math.floor(Math.random() * 5) + 1); // Generates a random number between 1 and 5
// range 57 to 59
console.log(Math.floor(Math.random() * 3) + 57); // Generates a random number between 57 and 59