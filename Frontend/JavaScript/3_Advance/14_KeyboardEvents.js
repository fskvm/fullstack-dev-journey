let inp = document.querySelector('input');
let btn = document.querySelector('button');

//todo - The default argument 'event' in the event listener function contains many properties related to the event
//? Two main properties of the event object are:
//? 1. key
//? 2. code
inp.addEventListener("keydown", (event) => {
    console.log(event); //! KeyboardEvent
    console.log("Key = ",event.key);
    console.log("Code = ",event.code);
    console.log("key was pressed"); //? if you backspace or any button on keyboard input then also it will be counted as keydown event
});
inp.addEventListener("keyup", (event) => {
    console.log("key was released");
});

btn.addEventListener('click', (event) => {
    console.log(event); //! PointerEvent
    console.log("button clicked");
});

let input = document.querySelector("#game");

input.addEventListener("keydown", (e) => {
    console.log("Key pressed:", e.key);
    if(e.code === "KeyW"){
        console.log("Character moves forward");
    }else if(e.code === "KeyS"){
        console.log("Character moves backward");
    }else if(e.code === "KeyA"){
        console.log("Character moves left");
    }else if(e.code === "KeyD"){
        console.log("Character moves right");
    }else{
        console.log("Character does not move");
    }
});
