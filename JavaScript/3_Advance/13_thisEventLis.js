let btn =  document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

//? this in event listeners refers to the element that triggered the event
btn.addEventListener("click", function(){
    console.log(this); // 'this' refers to the button element that was clicked
    console.dir(this);
    console.dir(this.innerText);
})

//todo - Rather than writing similar functions for each element, we can use a single function with help of 'this'
function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "yellow";
}

btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);