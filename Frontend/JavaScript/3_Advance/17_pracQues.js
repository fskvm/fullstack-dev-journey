//* 1- Create a button element on the page with the text "Click Me" using JavaScript. Add an event listener to the button
//*     that changes the button's color to green when clicked

let btn = document.createElement("button");
let body = document.querySelector("body");
btn.append("Click Me");
body.append(btn);

let btnn = document.querySelector("button");

btnn.addEventListener("click", function(){
    this.classList.add("bgStyle");
})

//* 2- Create an input element on the page with a placeholder "enter your name" and an H2 heading inside the HTML.
//* The purpose of this input element is to enter a user’s name, so it should only accept letters from a-z, A-Z, and spaces.
//* All other characters should not be detected or allowed.
//* Whenever the user inputs their name, their input should dynamically appear inside the H2 heading.
//* Note: No character apart from the allowed characters should be visible in the heading.

const inp = document.querySelector("input");
const h2 = document.querySelector("h2");

inp.addEventListener("input", ()=>{
    let validValue = "";
    for(let char of inp.value) {
        if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char === ' ')){
            validValue += char;
        }
    }

    inp.value = validValue;
    h2.innerText = inp.value;
});

//* 3

// Load event: Triggered when the page has fully loaded
window.addEventListener('load', () => {
    console.log('Page fully loaded!');
    alert('Page has finished loading!');
});

// Mouseout event: Triggered when the mouse leaves the element
const mouseBox = document.getElementById('mouseBox');
mouseBox.addEventListener('mouseout', () => {
    mouseBox.style.backgroundColor = 'lightcoral';
    mouseBox.innerText = 'Mouse out!';
    setTimeout(() => {
        mouseBox.style.backgroundColor = 'lightblue';
        mouseBox.innerText = 'Hover over me';
    }, 1000);
});

// Keypress event: Triggered when a key is pressed in the input field
const keyInput = document.getElementById('keyInput');
keyInput.addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// Scroll event: Triggered when you scroll the page
window.addEventListener('scroll', () => {
    console.log(`You are scrolling! Scroll position: ${window.scrollY}`);
});