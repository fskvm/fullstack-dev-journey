//* Destructuring is a way to unpack values from arrays or properties from objects into distinct variables.
//? Using arrays
let names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
// let winner = names[0];
// let runnerUp = names[1];
// let loser = names[2];
// console.log(winner); // Alice

//! Using destructuring
let [winner, runnerUp, loser, ...rests] = names; //! Since array we use [] brackets
console.log(winner, runnerUp, loser, rests); // Alice Bob Charlie plus using rest operator to store remaining values in an array


//? Using objects
const student = {
    name: 'Martha',
    age: 22,
    class: 'BSc Computer Science',
    subjects: ['Math', 'Science', 'English'],
    username: "martha22",
    password: "<PASSWORD>",
    city: 'Pune'
}

// let userName = student.username;
// let password = student.password;
// console.log(userName, password); // martha22 <PASSWORD>

let { username: user, password, city: place='Mumbai' } = student; //! Since object we use {} brackets
//todo  console.log(username); // undefined because we renamed it to user variable
console.log(user); // martha22 - note that the property is always searched by its key value, if we don't want to use the key value as variable, we can rename it like this
console.log(password); // <PASSWORD> - we assigned it to password variable which is same as key value
//todo console.log(city); // undefined because we renamed it to place variable
console.log(place); // Pune - we can also assign a default value to a variable if the key value is not present in the object, here we assigned Mumbai as default value



