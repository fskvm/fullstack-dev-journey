//! String Methods

//? Strings are immutable, meaning that they cannot be changed after they are created.

//! String method Chaining is a technique where multiple string methods are called in a single expression, allowing for more concise and readable code.
//? to reverse a string, you can use the split(), reverse(), and join() methods together.
//todo 16  split() -  Splits a string into an array of substrings based on a specified separator. it is used for both string and array methods.
//todo 15  reverse() - It is not string method, but it is an array method that reverses the order of elements in an array.
//todo 17  join() - Joins the elements of an array into a string, using a specified separator. it is used for both string and array methods.
let str = "Akhtar raza";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // Output: "azar rathkA"

//todo 1   length() - Returns the length of a string.
let myString = "Hello, World!";
console.log(myString.length); // Output: 13

//todo 2  replace() - Replaces a specified value with another value in a string but only replaces the first occurrence of the specified value.
let originalString = "java is a programming language. java is widely used.";
let newString = originalString.replace("java", "JavaScript");
console.log(newString); // Output: "JavaScript is a programming language. java is widely used."
let newString2 = originalString.replace("a", "1");
console.log(newString2); // Output: "j1va is a programming language. Java is widely used."



//todo 3  charAt() - Returns the character at a specified index in a string.
let myString2 = "Hello, World!";
console.log(myString2.charAt(0)); // Output: "H"

//todo 4  charCodeAt() - Returns the Unicode value of the character at a specified index in a string.
let myString3 = "Hello, World!";
console.log(myString3.charCodeAt(0)); // Output: 72 (Unicode value of "H")



//todo 5  trim() - Removes whitespace from both ends and creates a new string not modifies the original string.
let password = "   secret123  ";
let trimmedPassword = password.trim();
console.log(password) // The original string remains unchanged
console.log(trimmedPassword)


//todo 6  toUpperCase() - Converts all characters in a string to uppercase.
let name = "john";
let upperCaseName = name.toUpperCase();
console.log(upperCaseName); // Output: "JOHN"

//todo 7  toLowerCase() - Converts all characters in a string to lowercase.
let name2 = "JOHN";
let lowerCaseName = name2.toLowerCase();
console.log(lowerCaseName); // Output: "john"


//todo 8  indexOf() - Returns the index of the first occurrence of a specified value in a string, or -1 if not found.
//todo 9  lastIndexOf() - Returns the index of the last occurrence of a specified value in a string, or -1 if not found.

let text = "Hello world, welcome to the world of programming";

// indexOf() - finds FIRST occurrence from LEFT to RIGHT
console.log(text.indexOf("world"));     // Output: 6
console.log(text.indexOf("World"));     // Output: -1 (case-sensitive search)

// lastIndexOf() - finds LAST occurrence from RIGHT to LEFT
console.log(text.lastIndexOf("world")); // Output: 30



//todo 10  includes() - Checks if a string contains a specified substring, returning true or false.
console.log(text.includes("welcome")); // Output: true


//todo 11  startsWith() - Checks if a string starts with a specified substring, returning true or false.
console.log(text.startsWith("He")); // Output: true

//todo 12  endsWith() - Checks if a string ends with a specified substring, returning true or false.
console.log(text.endsWith("programming")); // Output: true



//todo 13  slice() - Extracts a section of a string and returns it as a new string.
let strr = "apna college";
let slicedStr = strr.slice(0, 4); // Extracts characters from index 0 to 3(3+1 last index is always excluded)

let slicedStr2 = strr.slice(5); // Extracts characters from index 5 to the end.
//! or
let slicedStr3 = strr.slice(5, 12); // Extracts characters from index 5 to 11(11+1 last index is always excluded)

let slicedStr4 = strr.slice(-6); // Extracts length of string that is 12 - 6 = 6th index to the end.
console.log(slicedStr, slicedStr2, slicedStr3, slicedStr4); // Output: "apna", "college", "college", "ollege"

//todo 14  substring() - Similar to slice(), but does not support negative indices and swaps the start and end indices if the start is greater than the end.
let strr2 = "apna college";
let substringStr = strr2.substring(0, 4); // Extracts characters from index 0 to 3(3+1 last index is always excluded)
let substringStr2 = strr2.substring(5); // Extracts characters from index 5 to the end.
let substringStr3 = strr2.substring(5, 12); // Extracts characters from index 5 to 11(11+1 last index is always excluded)
let substringStr4 = strr2.substring(12, 5); // Swaps the start and end indices, extracting characters from index 5 to 11(11+1 last index is always excluded)

//todo 18  concat() - Joins two or more strings together and returns a new string.
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ",str2)); // Output: "Hello World" as concat() does not add space by default, so we need to add it manually.

//todo 19  repeat() - Returns a new string that repeats the original string a specified number of times.
let repeatStr = "Hello";
let repeatedStr = repeatStr.repeat(3); // Repeats the string 3 times
console.log(repeatedStr); // Output: "HelloHelloHello"