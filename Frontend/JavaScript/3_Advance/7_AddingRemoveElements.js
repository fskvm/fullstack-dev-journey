//* document.createElement("tagName") method
let newP = document.createElement("p");
console.dir(newP); // this will return the object of the new element created

//? Setting value of the new element
newP.innerText = "hey, I am a new paragraph";
console.log(newP);
//todo - we have created till now and further we can add this element to the DOM using Methods like
//* document.body.appendChild(element) method - this will add the new element as the last child of parent element.
//* document.body.append() method - as above but it can also take text or HTML string as an argument.
//* document.body.prepend(element) method - this will add the new element as the first child of parent element.

//* document.body.insertAdjacentElement("position", element) method
//* Positions can be "beforebegin", "afterbegin", "beforeend", "afterend"

//? appendChild() method
let body = document.querySelector("body");
body.appendChild(newP); // added
let box = document.querySelector(".box");
box.appendChild(newP); //! note it will remove the element from body and add it to box --> No duplicate element will be created

//? append() method
let btn = document.createElement("button");
newP.append("This is a new text added to the paragraph");
newP.append(btn);
btn.append("Click me"); //! note that we include multiple elements at once by separating them with commas

//? prepend() method
box.prepend(newP); // this will add the newP as the first child of box, here it is shifted from the end to the start

//? insertAdjacentElement() method
let btn2 = document.createElement("button");
btn2.innerText = "Click me too";
let p = document.querySelector("p");
p.insertAdjacentElement("beforebegin", btn2); // this will add the btn2 before the p element
p.insertAdjacentElement("afterbegin", btn2); // this will add the btn2 as the first child of p element
p.insertAdjacentElement("beforeend", btn2); // this will add the btn2 as the last child of p element
p.insertAdjacentElement("afterend", btn2); // this will add the btn2 after the p element

//todo - parent.removeChild(element) method - Used on parent element to remove a child element, it requires both parent and child elements to be specified.
//todo - element.remove() method - Called directly on the element to be removed, it does not require the parent element.

let btn3 = document.createElement("button");
btn3.innerText = "Remove me";
body.prepend(btn3);

body.removeChild(btn3);

let btn4 = document.createElement("button");
btn4.append("Remove me too");
body.append(btn4);

btn4.remove();

