//! Array methods
//? It also supports chaining methods like string methods.
let name = ["ak", "sam", "ravi"];
console.log(name.reverse().indexOf("ak")); // Output: 2

//todo 1 push("with_argument") - adds an element to the 'end' of the array. we can add multiple elements at once.
let arr = [1, 2, 3];
arr.push("Akhtar raza",4);
console.log(arr)

//todo 2 pop() - removes the 'last' element of the array.
let lastElement = arr.pop();
console.log(arr);

//todo 3 unshift("with_argument") - adds an element to the 'beginning' of the array. we can add multiple elements at once.
arr.unshift(-1, 0);
console.log(arr);

//todo 4 shift() - removes the 'first' element of the array and returns it.
let firstElement = arr.shift();
console.log(arr);

//todo 5 indexOf("element") - returns the index of the first occurrence of the element in the array. If the element is not found, it returns -1.
let arr1 = [1, 2, 3, 2, 5, 6, 7, 2, 9];
console.log(arr1.indexOf(2)); // Output: 1
//todo 6 lastIndexOf("element") - returns the index of the last occurrence of the element in the array. If the element is not found, it returns -1.
console.log(arr1.lastIndexOf(2)); // Output: 7

//todo 7 includes("element") - returns true if the element is found in the array, otherwise false.
console.log(arr1.includes(2)); // Output: true
console.log(arr1.includes(10)); // Output: false

//todo 8 concat("array") - concatenates two or more arrays and returns a new array.
let arr2 = [8, 9, 10];
let arr3 = ['Akhtar', 'raza'];
console.log(arr1.concat(arr2, arr3)); // Output: [1, 2, 3, 2, 5, 6, 7, 2, 9, 8, 9, 10, 'Akhtar', 'raza']
//* Remains unchanged
console.log(arr2); // Output: [8, 9, 10]
console.log(arr3); // Output: ['Akhtar', 'raza']
//? As the concat() method does not change the original arrays, we need to assign the result to a new variable or the same variable to see the concatenated result.
arr1 = arr1.concat(arr2, arr3);
console.log(arr1); // Output: [1, 2, 3, 2, 5, 6, 7, 2, 9, 8, 9, 10, 'Akhtar', 'raza']

//todo 9 reverse() - reverses the order of the elements in the array.
console.log(arr1.reverse());

//todo 10 slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
//* With no arguments works nor like string which does not work without arguments.
console.log(colors.slice()); // Output: ['red', 'green', 'blue', 'yellow', 'purple'] that is shallow copy of the whole array
console.log(colors.slice(2)); // Output: ['blue', 'yellow', 'purple']
console.log(colors.slice(2, 3)); // Output: ['blue'] (end index is not included)
console.log(colors.slice(-2)); // Output: ['yellow', 'purple']
console.log(colors.slice(10)); // Output: [] (empty array if start index is out of bounds)

//todo 11 splice(start, deleteCount, "element") - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let fruits = ['apple', 'banana', 'orange', 'grape'];
console.log(fruits.splice(1, 2)); // Output: ['banana', 'orange'] (removes 2 elements starting from index 1)
console.log(fruits);
console.log(fruits.splice(0, 0, 'kiwi', 'mango')); // Output: [] (adds 'kiwi' and 'mango' at the beginning without removing any elements)
console.log(fruits);
console.log(fruits.splice(3, 1, 'pear')); // Output: ['grape'] (replaces 'grape' with 'pear')
console.log(fruits);

//todo 12 sort() - sorts the elements of an array in place and returns the sorted array. By default, it sorts the elements as strings in ascending order.
console.log(fruits.sort()); // Output: ['apple', 'kiwi', 'mango', 'orange', 'pear']
//? But it does not sort integer datatype as number rather than number is converted into string than on basics of unicode it is sorted (avoid for it).
let num = [2,4,5,3,20];
console.log(num.sort()); // Output: [2, 20, 3, 4, 5] (sorted as strings) that is unicode order.


