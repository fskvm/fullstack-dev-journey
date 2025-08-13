//* obj.getAttribute("attr") - returns the value of the attribute
//* obj.setAttribute("attr", "value") - sets the value of the attribute

let img = document.querySelector('img');

//? Let's get the value of the id attribute
console.log(img.getAttribute('id')); // mainImg
img.setAttribute('id', 'spiderMan'); // void - does not return anything just updates if try to print this statement, it will return undefined
console.log(img.getAttribute('id')); // spiderMan
//! Note that in above - The style given to the id of 'mainImg' will not be applied to the img element as it is different id as the one in the CSS file.
//! line 6 of css which 55% will not be applied now

//? Let's change the source of the image
img.setAttribute('src', 'creation_3.jpeg');

//? Let's add a new attribute to the image like class if not set
console.log(img.getAttribute('class')); // null
img.setAttribute('class', 'images');
console.log(img.getAttribute('class')); // images




//todo - Manipulating Style using 'style property' but these are only "inline styles" not the ones in the CSS file.
//! The Naming convention in javaScript is camelCase for style properties
//! for example - background-color in CSS will be backgroundColor in JavaScript

let heading = document.querySelector('h1');
heading.style.backgroundColor = 'red';
heading.style.color = 'white';
console.dir(heading.style); //? we can check the inside the style property of the element all the inline styles applied to it


let links = document.querySelectorAll('.box a');

for(let link of links){
    link.style.color = 'green';
}
//! or
for(let i = 0; i<links.length; i++){
    links[i].style.color = 'green';
}