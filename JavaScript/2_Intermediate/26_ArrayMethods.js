//* Array Methods that takes a callback as an argument. Hence, they are called Higher Order Functions.
//? They are forEach, map, filter, some, every, reduce, reduceRight, find, findIndex, and sort.

//todo  1. forEach - Executes a callback for every element (no return value).
//!     Not used now a days, use for ..of Loop instead.

let arr = [1, 2];

let print = function (el) {
    console.log(el);
};
arr.forEach(print);

//! or function definition

arr.forEach(function (el) {
    console.log(el);
});

//! or arrow function

arr.forEach(el => console.log(el));

//! or Most Common for of loop

for (let el of arr) {
    console.log(el);
}

//? - forEach with objects inside an array
let arr2 = [
    { name: "John", marks: 90 },
    { name: "Jane", marks: 94 },
    { name: "Doe", marks: 80 }
];

arr2.forEach( el => {
    console.log(el);
    console.log(el.marks);
});

//todo  2. map - Returns a new array with the results of the callback.
let double = arr.map(el => {
    return el * 2;
});
console.log(double); // [2, 4]

//! or if not return
let double2 = arr.map(el => {});
console.log(double2); // [undefined, undefined] as no return value is given

let gpa = arr2.map(el => el.marks/10);
console.log(gpa); // [9, 9.4, 8]

//todo  3. filter - Returns a new array with elements that is true for the test condition. if false, it is not included in the new array.
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = arr3.filter(el => el % 2 === 0);
let odd = arr3.filter(el => el % 2 !== 0);
console.log(`Even: ${even} and Odd: ${odd}`); // Even: 2,4,6,8,10 and Odd: 1,3,5,7,9

//todo 4. Every(works like AND) - Returns true if all elements pass the test condition, Otherwise false. Hence returns a boolean value either T or F.
console.log([2, 4, 6].every(el => el % 2 === 0)); // true
console.log([2, 4, 5].every(el => el % 2 === 0)); // false

//todo 5. Some(works like OR) - Returns true if at least one element passes the test condition, Otherwise false. Hence returns a boolean value either T or F.
console.log([2, 4, 6].some(el => el % 2 === 0)); // true
console.log([1, 3, 9, 2].some(el => el % 2 === 0)); // true

//todo 6. Reduce - Executes a callback for each element, accumulating the result into a single value can be any type.
//!       Syntax: array.reduce(callback function with 2 variable for( accumulator , element ) , initialValue);
//?       The initialValue is optional, if not provided, the first element of the array is used as the initial value. Therefore, the iteration starts from the second element.
let sum = arr3.reduce((result, el) => {
    return result + el;
}); // the initial value is the first element of the array
console.log(sum); // 55
sum = arr3.reduce((result, el) => result + el, 10); // the initial value is 10
console.log(sum); // 65

//todo 7. ReduceRight - Same as reduce, but iterates from right to left.
let sumRight = arr3.reduceRight((result, el) => {
    return result + el;
}); // the initial value is the last element of the array and iterates from right to left that is from last second index to first index
console.log(sumRight); // 55

//todo 8. Find - Returns the first element that passes the test condition, Otherwise undefined.
let firstGreaterThan5 = arr3.find(el => el > 5);
console.log(firstGreaterThan5); // 6
let firstGreaterThan10 = arr3.find(el => el > 10);
console.log(firstGreaterThan10); // undefined, as no element is greater than 10

//todo 9. FindIndex - Returns the index of the first element that passes the test condition, Otherwise -1.
let indexGreaterThan5 = arr3.findIndex(el => el > 5);
console.log(indexGreaterThan5); // 5, as the first element greater than 5 is at index 5
let indexGreaterThan10 = arr3.findIndex(el => el > 10);
console.log(indexGreaterThan10); // -1, as no element is greater than 10

//todo 10. Sort - Sorts the array in place and returns the sorted array. It takes a callback function that defines the sort order.
let arr4 = [5, 2, 9, 1, 5, 6];
arr4.sort((a, b) => a - b); // Ascending order
console.log(arr4); // [1, 2, 5, 5, 6, 9]
arr4.sort((a, b) => b - a); // Descending order
console.log(arr4); // [9, 6, 5, 5, 2, 1]
//? - Sorting an array of objects
let arr5 = [
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "Doe", age: 30 }
];
arr5.sort((a, b) => a.age - b.age); // Sort by age in ascending order
console.log(arr5); // [{ name: "Jane", age: 22 }, { name: "John", age: 25 }, { name: "Doe", age: 30 }]
// arr5.sort((a, b) => b.age - a.age); // Sort by age in descending order
// console.log(arr5); // [{ name: "Doe", age: 30 }, { name: "John", age: 25 }, { name: "Jane", age: 22 }]