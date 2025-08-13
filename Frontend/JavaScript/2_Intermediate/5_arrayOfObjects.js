//* Array of Objects

const classInfo = [
    {
        name: "Alice",
        age: 20,
        grade: 'A'
    },
    {
        name: "Bob",
        age: 22,
        grade: 'B'
    },
    {
        name: "Charlie",
        age: 21,
        grade: 'C'
    }
]

console.log(classInfo[0]); // Output: { name: 'Alice', age: 20, grade: 'A' }
console.log(classInfo[1].name); // Output: Bob

classInfo[1].gender = 'Female';
console.log(classInfo[1]); // Output: { name: 'Bob', age: 22, grade: 'B', gender: 'Female' }