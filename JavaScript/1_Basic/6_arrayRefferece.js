//* Array Reference - Arrays in JavaScript are reference types, meaning that when you assign an array to another variable, both variables point to the same array in memory.
//* This can lead to unexpected behavior if you modify the array through one variable, as the changes will be reflected in the other variable as well.

//! String and Array Comparison
console.log("a" == "a"); // true
console.log("a" === "a"); // true

console.log([1] == [1]);
// This will false because [1] and [1] are two different array objects in memory.
console.log([1] === [1]);
// This will also false for the same reason as above.

let num = [1 , 2]; // here num stores the reference(memory address) of the array object in memory
let num2 = num; // num2 noe references the same array object in memory as num
console.log(num === num2); // true
console.log(num[0] === num2[0]); // true, both num and num2 point to the same array object, so they share the same elements
console.log(num[1] === num2[0]); // false, num[1] is 2 and num2[0] is 1
