//* Function Vs Method
/* Function: A block of code designed to perform a particular task, which can be called and executed when needed.
           Independent (not tied to any object/class) and called directly by its name.

   Method: A function that is associated with an object or class. Called via object/class using dot notation

   All methods are functions, but not all functions are methods.

   - In JavaScript, If a function is present inside an object, it is called a method.
     Otherwise, it is a function.

   - In Python, A method is a function that is defined within a class and uses the `self` parameter to refer to the instance of the class.
     Otherwise, it is a function defined outside any class and does not use `self`, therefore, called directly by its name.

    - In Java, every block of code is inside a class, so what we call a “function” is actually a method.
      If it's static, it's like a function—called without creating an object; if non-static, it's tied to object behavior.

 */

//* Methods in JavaScript - array and strings are objects, so they have multiple methods which we used before.
const calculation = {
    //! Older Syntax to define methods
    add: function(a, b){ //? function_name is not required as we use the key as the name to call the method
        return a + b;
    },
    //! Newer Syntax to define methods (ES6+)
    sub(a, b){  //? we can omit the `function` keyword and the colon
        return a - b;
    },
    pi: 3.14159265359
}

console.log(calculation.add(5, 3)); // 8
console.log(calculation.sub(5, 3)); // 2
console.log(calculation.pi); // 3.14159265359