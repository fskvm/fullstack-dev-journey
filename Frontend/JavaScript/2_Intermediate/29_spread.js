//* Spread Operator (in short => Expands)- Breaks apart arrays or objects into individual elements. Spread operator allows to iterable such as an array or string. It is denoted by three dots.
//todo -  Function calls, array/object literals
let arr = [1, 2, 3, 4, 100];
console.log(Math.max(arr[0], arr[1], arr[2], arr[3], arr[4])); // 100
// or using a spread operator
console.log(Math.max(...arr)); // 100
console.log(...arr); // we have printed the elements of the array

let str = "Hello World";
console.log(...str); // we have printed the characters of the string
//! or
console.log(..."Akhtar Raza"); // A k h t a r   R a z a

//* Spread with Array literal
let newArr = [...arr, 5, 6, 7];
console.log(newArr); // [ 1, 2, 3, 4, 100, 5, 6, 7 ]

let newChar = [...str, "!", "!!"];
console.log(newChar); // [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '!' ]

let odd = [1, 3, 5];
let even = [2, 4, 6];

let num = [...odd, ...even]; // [ 1, 3, 5, 2, 4, 6 ] Order is maintained
console.log(num);

//* Spread with Object literal
let data = {
    email: "ironman@gmail.com",
    name: "akh",
}
let dataCopy = {...data, id: 123};
console.log(dataCopy);

let obj1 = {...arr}; // so for the key it uses the index of the array
console.log(obj1); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 100 }
