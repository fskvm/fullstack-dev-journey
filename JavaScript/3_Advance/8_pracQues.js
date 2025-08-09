/*

Add the following elements to the container using only JavaScript and the DOM methods:
1) A <p> element with red text that says:
"Hey I'm red!"
2) An <h3> element with blue text that says:
"I'm a blue h3!"
3) A <div> element with a black border and pink background color. Inside this <div>, add:
- An <h1> element that says: "I'm in a div"
- A <p> element that says: "ME TOO!"

*/

let p = document.createElement("p");
p.append("Hey I'm red!");
p.classList.add("red");
let body = document.querySelector("body");
body.appendChild(p);


let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.setAttribute("class", "blue");
body.append(h3);

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p2 = document.createElement("p");

h1.append("I'm in a div");
p2.append("ME TOO!");
div.classList.add("bg");

div.append(h1, p2); //! We can append multiple elements at once also

body.append(div);