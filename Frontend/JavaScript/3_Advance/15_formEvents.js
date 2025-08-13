let form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submission")

    //todo - Extracting the form data - we use the value property of the input elements
    // let user= document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    // console.dir(user)  to see the properties of the input element

    //! Or if we multiply elements, we don't need use the querySelector for each element with their id's ==> Using Form object with its elements property
    //? elements property returns a collection of all the form elements we can access them by index or name
    console.dir(form);

    let user = form.elements[0];
    let pass = form.elements[1];

    console.log(user.value); //! innerText is not used for input elements, instead we use value
    console.log(pass.value);
    alert(`Hi ${user.value}, your password is ${pass.value}`);


})