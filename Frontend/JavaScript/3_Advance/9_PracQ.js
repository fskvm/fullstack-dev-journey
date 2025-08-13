//* 1)Create a new input and button element on the page using JavaScript only.
//*     Set the text of the button to: "Click me"

let input = document.createElement('input');
let button = document.createElement('button');

button.innerText = "Click me";
document.querySelector("body").append(input, button);



//* Add the following attributes to the elements:
//*     - Change the placeholder value of the input to: "username"
//*     - Change the id of the button to: "btn"

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

//*  3)Access the button using querySelector and the button id.
//*     Change the button background color to blue and text color to white.


let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

//* 4) Create an <h1> element on the page and set its text to: "DOM Practice"
//*    Underline it and change its color to purple.
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
document.querySelector("body").append(h1);
h1.classList.add("h1Style");

//* 5) Create a <p> tag on the page and set its text to:
//*     "Apna College Delta Practice"
//*     Make the word Delta bold.

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);


