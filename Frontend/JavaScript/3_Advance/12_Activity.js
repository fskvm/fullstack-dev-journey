let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let randomColor = generateRandNum();
    let h3 = document.querySelector("h3");
    h3.innerText = randomColor;
    h3.style.color = randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});

function generateRandNum() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

//todo Event listener can work not only on buttons but also on other elements like paragraphs, divs, etc.
let para = document.querySelector("#para");
para.addEventListener("click", function() {
    console.log("Paragraph clicked!");
});
let div2 = document.querySelector(".box");
div2.addEventListener("mouseenter", function() {
    console.log("Mouse entered the box!");
})