//* What is bubbling and capturing in JavaScript?
//? Bubbling (innermost to outermost) and capturing(outermost to innermost) are two phases of event propagation in the DOM (Document Object Model) when an event occurs on an element.

//! Note VIP: - Bubbling does not depend on event listeners being present. Bubbling happens automatically.
//todo Bubbling: Event bubbles back up from the target to the root.
// This means that the event is first handled by the innermost element (the target) and then moves outward to its parent elements
// eventually reaching the document object. This is the default behavior in JavaScript.

//todo Capturing:  Event travels from the root down to the target.
// This means that the event is first handled by the outermost element (the document) and then moves inward to the target element.
// This is not the default behavior in JavaScript, but it can be enabled by specifying the `useCapture` parameter when adding an event listener.

//! useCapture is the name of the third parameter in the addEventListener method. It set to false by default, we need to set it to true to enable capturing.


//* Bubbling
//! To prevent bubbling, you can use the `event.stopPropagation()` method within the event handler. It won't work for capturing phase.
let div2 = document.querySelector("#bubbling");
let ul2 = document.querySelector("#bubbling1");
let lis2 = document.querySelectorAll(".bubbling2");
div2.addEventListener("click", () => {
    console.log("Div clicked Bubbling");
});

ul2.addEventListener("click", (event) => {
    event.stopPropagation(); // This will stop the event from bubbling up to parent elements
    console.log("Ul clicked Bubbling");
});

for(let li of lis2) {
    li.addEventListener("click", (event) => {
        event.stopPropagation(); // This will stop the event from bubbling up to parent elements
        console.log("Li clicked Bubbling");
    })
}
/* if clicked on li,
    - The event originates in the `<li>` (target element) and **bubbles up the DOM hierarchy**.
    - First, the `<li>` listener is executed because it is the target of the click event.
    - Next, the event bubbles up to its parent, `<ul>`, triggering the `<ul>` listener.
    - Finally, the event bubbles up to the `<div>`, triggering the `<div>` listener.


* */

//* Capturing

let div1 = document.querySelector("#capturing");
let ul1 = document.querySelector("#capturing1");
let lis1 = document.querySelectorAll(".capturing2");
div1.addEventListener("click", () => {
    console.log("Div clicked capturing");
},true);

ul1.addEventListener("click", () => {
    console.log("Ul clicked capturing");
}, true);

for(let li of lis1) {
    li.addEventListener("click", () => {
        console.log("Li clicked capturing");
    },true)
}

/* If clicked on li,
    - The event starts at the top of the DOM tree and moves downward toward the target element (). `<div>``<li>`
    - First, the listener is triggered because it is set to fire in the capturing phase. `<div>`
    - Next, the listener is triggered as the event continues to travel downward. `<ul>`
    - Finally, the listener is triggered as the event reaches the target element. `<li>`

 */



//* Both

let div = document.querySelector("#both");
let ul = document.querySelector("#both1");
let lis = document.querySelectorAll(".both2");

div.addEventListener("click", () => {
    console.log("Div clicked both");
});

ul.addEventListener("click", () => {
    console.log("Ul clicked both");
});

for(let li of lis) {
    li.addEventListener("click", () => {
        console.log("Li clicked both");
    },true)
}

/*  The above output if you click on `<li>` will be:
    If you click on `<li>`, the flow starts from `div`, then moves to `ul`, and finally reaches `li` in the capturing phase.
    However, since `div` and `ul` listeners are set for the default bubbling phase (`useCapture: false`), only the `<li>` listener fires in the capturing phase
    (as it is explicitly set to `true`). After the `<li>` listener fires in the capturing phase, the event then moves into the bubbling phase and begins propagating
    back up the DOM. During this phase, the listeners on `ul` and `div` fire sequentially because they are set to the default (bubbling).

* */

