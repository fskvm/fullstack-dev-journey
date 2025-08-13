//! Const Arrays -
// JavaScript allows you to declare arrays with the `const` keyword, but it does not make the array immutable.
// You can still modify the element of the array, but you cannot reassign the array itself.
// Here the reference comes in role when you declare an array with `const`, you cannot change the reference to the array, but you can change the elements of the array.

arr1 = [1, 2, 3];
const arr = [1, 2, 3];
// arr = [4, 5, 6]; // This will throw an error because you cannot reassign a const variable
// arr = arr1; This will also throw an error because you cannot reassign a const variable
let arr2 = arr;
console.log(arr2);
arr2.push(4);
console.log(arr2); // [1, 2, 3, 4]
console.log(arr); // [1, 2, 3, 4] - The original array is also modified
arr.splice(0,4);
console.log(arr); // [] - The original array is now empty.
