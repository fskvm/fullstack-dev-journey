//* Arrow Functions: `this` has lexical (parent) scope
//* Function Declarations and Function Expressions: `this` is determined by the calling object (dynamic scope)

const student = {
    name: "Aman",
    marks: 95,
    prop: this, // `this` refers to the global object in this context which is `window` in browsers
    getName: function() {
        console.log(this); //! VIP - this = student
        return this.name;
    },

    //? BELOW, this is useless because we cannot access properties of `student` using `this` inside an arrow function
    getMarks: () => {
        console.log(this); //! VIP - this = student ka this = window (hindi used)
        return this.name;  // This will return `undefined` because `this` does not refer to the `student` object
    },

    //? BELOW, this is useful because we can access properties of `student` using `this` inside a function expression
    getInfo1: function(){
        setTimeout(() => {
            console.log(this); //! VIP - this = student (yaha call to window hi lagaraha tha but arrow function ki wajah se lexical scope use ho raha hai)
        },2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this); //! VIP - this = window (yaha call to window hi lagaraha hai kyuki function expression use ho raha hai)
        },2000);
    },
}
console.log(student.getName());
console.log(student.getMarks());