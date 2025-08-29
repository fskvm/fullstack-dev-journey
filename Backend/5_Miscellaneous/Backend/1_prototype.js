//todo - Object Oriented Programming in JS
// To structure code better and make it reusable
// 1) Prototype
// 2) New Operator
// 3) Constructors
// 4) Classes
// 5) Keywords (extends, super)

//* Object Prototypes - Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//* It is like a single template object that all objects inherit methods and properties from without having their own copy of the template.

//* arr.__proto__ (reference)

//* Array.prototype (actual)
//* String.prototype (actual)

//? Every object in JavaScript has a built-in prototype. The prototype is itself an object, So the prototype will have its own prototype, making what's called a prototype chain.
//? The chain ends when we reach a prototype that has null for its own prototype.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr1.sayHello = () => {
    console.log("Hello by arr1");
};

//? if we add a method to arr2, it will not be available to arr1 - It is a inefficient way of doing it.
arr2.sayHello = () => {
    console.log("Hello by arr2");
};

console.log(arr1.sayHello === arr2.sayHello); //! False because both have different memory locations.
console.log("abc".toUpperCase === "xyz".toUpperCase); //! True because both are pointing to the same method in the prototype, hence reducing the memory usage.

//? To put the method to a single object, we can use a prototype.
console.log(arr1.__proto__); //! The __proto__ property returns a reference to the prototype of the specified object.
arr1.__proto__.push = (n) => {
    console.log("Pushing " + n);
};

arr1.push(7); //? we have changed the prototype of arr1, so now arr1.push is available to all objects.
console.log(Array.prototype);
console.log(String.prototype);

//* __proto__ vs prototype
function Animal() {}
Animal.prototype.speak = function() {
    console.log("Roar");
};

const lion = new Animal();

// `prototype` is on the constructor
console.log(Animal.prototype); // { speak: [Function] }

// `__proto__` is on the instance
console.log(lion.__proto__); // same as Animal.prototype, but it is a reference to the actual object.

// True because a lion inherits from Animal.prototype
console.log(lion.__proto__ === Animal.prototype); // true

