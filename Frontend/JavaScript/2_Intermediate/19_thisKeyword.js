//* this keyword -  this keyword refers to an object that is executing the current (piece of code) Method.

const student = {
    name: "John",
    age: 20,
    eng: 93,
    math: 89,
    phy: 90,
    getAvg(){
        console.log(this); //! this will refer to the student object because getAvg is a method of the student object.
        let avg = (this.eng + this.math + this.phy) / 3; //todo  this refers to the student object, so we can access its properties.
        console.log(`${this.name} has an average of ${avg}`);
    }
}

//* widow object is the global object in browsers that contains all the global variables and functions.
function getWindow(){
    console.log(this); //! this will refer to the window object in browsers
}

student.getAvg();
getWindow(); //? this will refer to the window object in browsers
//! or
window.getWindow(); //? this will also refer to the window object in browsers