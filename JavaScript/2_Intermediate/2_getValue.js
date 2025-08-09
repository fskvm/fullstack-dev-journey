//* To access the object value using the key

const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
}
//? 1) using dot notation - most used
console.log(obj.name); // John


//? 2) using bracket notation - used when we have a variable
console.log(obj["age"]); // 30
//! console.log(obj[city]); ReferenceError: city is not defined, so use quotes

//! if we want to count the age
let updatedAge = "age";
console.log(obj[updatedAge]); // 30
//? But won't work with dot notation
console.log(obj.updatedAge); // undefined

//* Js automatically converts the key to string
//* if the key is a number, it will be converted to string , null to string, undefined to string, true/false to string

const obj2 = {
    1: 'one',
    2: 'two',
    true: 'a',
    null: 'e',
    undefined: 'd'
}

//todo Rare case, but useful to know when you have numeric keys or boolean keys
console.log(obj2[1]); //! one (here 1 is a number which is converted to string and all the rest are same)
console.log(obj2["1"]); // one
console.log(obj2[2]); // two
console.log(obj2["2"]); // two
console.log(obj2[true]); // a
console.log(obj2["true"]); // a
console.log(obj2[null]); // e
console.log(obj2["null"]); // e
console.log(obj2[undefined]); // d
console.log(obj2["undefined"]); // d

//* for dot operation , number will not work
console.log(obj2.true);
// console.log(obj2.1); // SyntaxError: Unexpected number