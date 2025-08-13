
//* DOM level 0 or inline event handlers --> refer to an older way of defining event handlers directly within HTML or JavaScript
//*       Event handlers are assigned directly as properties of DOM objects (like elements), hence these are property-based.
//*       multiple event handlers can be assigned to the same event, but only the last one will be executed, Therefore no support for multiple event handlers.



let btns = document.querySelectorAll('.btn');
for(let btn of btns){
    btn.onclick = sayHey; //! don't use parentheses here because it will call the function immediately. we want to assign the function reference
    btn.onclick = sayBye; //todo-  Drawback - This will override the previous onclick event. Hence, only one function can be assigned to a similar event handler at a time.
    btn.onmouseenter = function() {
        console.log('Mouse entered the button');
    };
}

function sayHey(){
    alert('Button clicked!');
}

function sayBye(){
    alert('button clicked! bye');
}