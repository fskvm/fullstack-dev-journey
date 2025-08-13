let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');
btn.addEventListener('click', () => {
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = ""; // to clear the input field after adding the item

    let delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add('delete');

    item.appendChild(delBtn);
});

//! BUG
// let delBtns = document.querySelectorAll('.delete');
// for(let delBtn of delBtns) {
//     delBtn.addEventListener('click', function(){
//         let item = this.parentElement;
//         item.remove();
//     });
// }

//! There is a bug in the above code. The delete button is not working for dynamically added items.
//? Because - Static elements: They have event listeners because they exist when the script first runs.
//?           Dynamically added elements: Do not have event listeners because they are created after the script execution.

//* Solution: Event Delegation - It is a technique where instead of adding event listeners to individual child elements
//*                   (like the `delete` buttons), you delegate the handling of events to a common parent element.
//*           - To use delegation, there must always be a parent, grandparent, or some ancestor element that exists 'when the script runs'.
//*           - Even if a `button` doesn’t have an immediate parent (e.g., if it’s a direct child of `<body>`), you can still use delegation by attaching
//*             the listener to a higher-level ancestor (`body`, `document`, or even `window`).
/*
    - You add a single event listener to the parent element (e.g., the `<ul> or <li> too`).
    - Whenever an event occurs (like a `click`), the event bubbles up from the target element (e.g., a `button`) to the parent (due to Event Propagation in JavaScript).
*/
//todo - target - It refers to the element that triggered the event and we can its check value by nodeName.


//! Use this
ul.addEventListener('click', function(event){
    if(event.target.nodeName === "BUTTON" && event.target.classList.contains('delete')){ //? BUTTON is taken from nodeName, we checking this logic as a list item i.e. 'LI'(nodeName) may get deleted by mistake if we click on it.
        let item = event.target.parentElement;
        item.remove();
    }
});

