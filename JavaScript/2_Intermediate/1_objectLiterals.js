
//*  Object literals {curly braces} - Used to store data in key-value pairs. Array and object return the object type. Objects are mutable and ordered is not maintained not like arrays.
//! Mostly used by const keyword to prevent reassignment of memory address. But properties can be changed.
const student = {
    name: "John Doe",
    age: 20,
    subjects: ["Math", "Science", "English"],
    address: "123 Main St, Cityville",
}

console.log(student);

//? Real world example of post
const post = {
    username: "John Doe",
    title: "My First Post",
    content: "This is the content of my first post.",
    likes: 100,
    comments: [ // array
        { username: "Jane", comment: "Great post!" },
        { username: "Mike", comment: "Thanks for sharing!" }
    ]
}
console.log(post);