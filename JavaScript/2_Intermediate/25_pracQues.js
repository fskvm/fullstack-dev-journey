//* 1
const square = num => num * num;
console.log(square(5));

//* 2
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Interval cleared");
}, 10000);

//* 3 Average of an array

const arrayAverage = arr => {
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    return sum / arr.length;
}
let arr = [1, 2, 3, 4, 5];
console.log(arrayAverage(arr));

//* 4
let num = 6;
const isEven = num => num % 2 === 0;
console.log(isEven(num));

//* 5 to se what's the output of the following code
const object = {
    message: 'Hello, World!',

    logMessage() {
        console.log(this.message);
    }
};
object.logMessage(); //? This will log 'Hello, World!' because 'this' refers to the object itself.
setTimeout(object.logMessage, 1000); //? This will log 'undefined' because 'this' inside setTimeout does not refer to the object anymore, it refers to the global object (or undefined in strict mode).

//* 6 to se what's the output of the following code
let length = 4;

function callback() {
    console.log(this.length);
    console.log(this.lengths);
}

const object2 = {
    length: 5,
    method(callback) {
        callback(); //? Normal function -> This will call the callback function, which logs 'this.length'. That will refer to the global object (or undefined in strict mode), not the object2.
    },
};
//! NOTE
// These are different
// console.log(length);      // 4
// console.log(window.length); // 0

// To make the global length property:
// window.length = 4; Now explicitly setting window.length
// OR
var lengths = 4;          // 'var' declarations become window properties
object2.method(callback, 1, 2); //? This will log '0' because the callback function is called as a regular function, not as a method of object2. In non-strict mode, 'this' refers to the global object, which has a length property of 0 (or undefined in strict mode).
/*
1. When `callback()` is called inside `object2.method`, it's called as a regular function (not as a method).
2. In regular function calls (without `new`, `call`, `apply`, or `bind`), `this` refers to the global object (in non-strict mode) or (in strict mode). `undefined`
3. Since this code is running in non-strict mode, `this` refers to the global object.
4. The global object has the `length` property we defined at the start (`let length = 4`), so `this.length` is 4.

1. Regular function calls lose their `this` context
2. The value of `this` in a function depends on how the function is called, not where it is defined
3. The extra arguments `1, 2` passed in `object2.method(callback, 1, 2)` don't affect the output as they're not used in the code

*/