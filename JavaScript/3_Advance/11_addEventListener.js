//* DOM Level 2 Event Model - It added `addEventListener` and `removeEventListener` methods,
//*             allowed events to pass through different phases (capturing and bubbling), and introduced a standard event object.
//*            These changes made event handling easier, more flexible, and fixed the limitations of the older DOM Level 0 model.
//! this supported the multiple event listeners on the same element for the same event type.
//? element.addEventListener(eventType, callback);  ==> This method-based approach is preferred over property-based because it’s more flexible and scalable

let btns = document.querySelectorAll('.btn');
for(let btn of btns){
    // btn.onclick = sayHey;
    // btn.onclick = sayBye;
    btn.addEventListener('click', sayHey);
    btn.addEventListener('click', sayBye); //? Now both functions will be called when the button is clicked.
    btn.addEventListener('dblclick', () => console.log('double clicked')); //? to see this comment down the above two lines
}

function sayHey(){
    alert('Button clicked!');
}

function sayBye(){
    alert('button clicked! bye');
}
