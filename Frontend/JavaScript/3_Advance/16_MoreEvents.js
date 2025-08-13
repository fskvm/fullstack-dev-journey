//* change Event - It fires only when the element loses focus after the value has changed (only for input, select, and textarea elements)
//* input Event -  It triggers on every keystroke or value change as it happens (only for input, select, and textarea elements)


let user = document.getElementById("user");
user.addEventListener("change", function(){
    console.log("change event fired");
    console.log("final value = ", this.value);
});

user.addEventListener("input", () => {
    console.log("input event fired");
    console.log("current value = ", user.value);
})

let inp = document.getElementById("text");
let p = document.getElementsByTagName("p");
inp.addEventListener("input", () => {
    console.log(inp.value);
    p[0].innerText = inp.value;
})