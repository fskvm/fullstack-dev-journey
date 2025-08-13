//*  classList - returns the class name(s) of an element as a DOMTokenList object
let heading = document.querySelector('h1');
console.log(heading.classList);
let links = document.querySelector("div");
console.log(links.classList);

//*  Methods of classList are add()- to add new classes, remove()- to remove classes, contains()- to check if a class exists, toggle()- to toggle a class add or remove it
//*      replace()- to replace a class with another class


//! The main difference to use classList compared to setAttribute() is that classList.add() can add multiple classes without overwriting the existing ones
//!     while setAttribute() sets the class attribute to a new value(but we can add multiple class space separated) and overwrites all existing classes

heading.classList.add("green", "underline");
heading.setAttribute("class", "green underline"); //? you can see the bgColor is removed to check make this a comment

heading.classList.remove("green");
console.log(heading.classList.contains("underline")); //? returns true or false hence, true 
heading.classList.toggle("underline"); //? removes underline as it exists

heading.classList.toggle("underline"); //? adds
heading.classList.toggle("green"); //? adds
heading.classList.toggle("bgColor"); //? adds as it was removed by setAttribute() before

let box = document.querySelector(".box");
box.classList.add("bgColor");
box.classList.replace("bgColor", "red");

