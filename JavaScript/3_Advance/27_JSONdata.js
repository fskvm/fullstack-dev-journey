//* JSON(JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write.
//? JSON does not undefined and keys are always strings, hence js != JSON.
//? JSON is often used to transmit data between a server and a web application as text through APIs (Application Programming Interface).
//? Before XML (Extensible Markup Language) where used to transmit data, but JSON is more compact and easier to work with in JavaScript.
//? this raw JSON data from - https://catfact.ninja/fact {"fact":"Cats are the world's most popular pets, outnumbering dogs by as many as three to one","length":84}

//todo JSON raw data -  {"fact":"Cats are the world's most popular pets, outnumbering dogs by as many as three to one","length":84}
// we need to wrap this in string to use it in JavaScript, because JSON is not a valid JavaScript object.
// But change the quotes inside data using escape character \ to make it a valid string(if not escape back sequence is not used in data).
// {"fact":"Cats are the world \' s most popular pets, outnumbering dogs by as many as three to one","length":84}
// Now we can easily warp into single quotes without any issues.


//? JSON.parse() is used to convert a JSON string into a JavaScript object.
let jsonString = '{"fact":"Cats are the world\'s most popular pets, outnumbering dogs by as many as three to one","length":84}';
let jsonResponse = JSON.parse(jsonString);
console.log(jsonResponse);
console.log(jsonResponse.fact); //? Now we can access the data like a normal JavaScript object.

//? JSON.stringify() is used to convert a JavaScript object into a JSON string.
let jsObject= {
    name: "Akhtar raza",
    age: 22
}
let jsonData = JSON.stringify(jsObject);
console.log(jsonData);