//* Object update, add, delete

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

person.age = 32; // Update age
console.log(person); // { name: 'John', age: 32, city: 'New York' }

person.gender = "Male"; // Add
console.log(person); // { name: 'John', age: 32, city: 'New York' }

console.log(delete person.name); // true
// or
// delete person.name;

console.log(person); // { age: 32, city: 'New York' }
