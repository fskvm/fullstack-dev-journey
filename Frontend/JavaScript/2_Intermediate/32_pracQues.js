//* 1. Square and sum the array elements using the arrow function and then find the average of the array
let nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur, 0);

let avg = sum / nums.length;
console.log(avg);

//* 2. Create a new array using the map function whose each element is equal to the original element plus 5.
let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map( num => num + 5));

//* 3. Create a new array whose elements are in uppercase of words present in the original array.
let words = ["hello", "world", "javascript", "is", "fun"];
console.log(words.map( word => word.toUpperCase()));

//* 4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
//*   The function should return a new array with the original array values and all the additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(arg => arg * 2)];
console.log(doubleAndReturnArgs([1, 2, 3], 4, 5, 6)); // [1, 2, 3, 8, 10, 12]

//* 5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys
//*    and values of the first object and second object

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4})); // { a: 1, b: 2, c: 3, d: 4 }

