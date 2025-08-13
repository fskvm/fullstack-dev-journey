//*  Navigation - Navigation refers to accessing and traversing between nodes (elements) in the DOM using properties like
//? element.parentElement - Gets the parent elements.
//? element.children - Returns a live HTMLCollection of child elements
//? element.childElementCount - Returns the number of child elements
//? element.firstElementChild - Retrieves the first child element
//? element.lastElementChild - Retrieves the last child element
//? element.previousElementSibling - Gets the previous sibling that is an element
//? element.nextElementSibling - Gets the next sibling that is an element

let h4 = document.querySelector('h4');
console.log(h4.parentElement);

let ul = document.querySelector('ul');
console.log(ul.children);

let box = document.querySelector('.box');
console.log(box.childElementCount);
console.log(box.firstElementChild);
console.log(box.lastElementChild);

let img = document.querySelector('img');
console.log(img.previousElementSibling);
console.log(img.nextElementSibling);



