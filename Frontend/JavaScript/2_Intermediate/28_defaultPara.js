//* Default Parameter - this feature allows you to set default values for function parameters if no value or undefined is passed.

function sum(a, b = 3){
    return a + b;
}
console.log(sum(2,4)); // 6
console.log(sum(2)); // 5 - if b is not provided, it defaults to 3

//! Wrong Way to define the default parameter, always define the default parameter at the end of the parameter list like mentioned above.
function mul(a = 1, b){
    return a * b;
}
console.log(mul(2,4)); // 8
console.log(mul(2)); // NaN - thought a = 1 default, but the argument is always passed to the first parameter, so b remained undefined hence number * undefined is NaN
console.log(mul()); // NaN - both a and b are undefined, so 1 * undefined is NaN
