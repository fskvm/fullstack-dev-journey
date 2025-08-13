//* Rest Operator (in short => collects) Gathers multiple elements into a single array. It is denoted by three dots (...).
//todo    Function parameters, destructuring.

function printArguments(...args) {
    for (let i = 0; i < args.length; i++){ //! here rest operator collects all the arguments and stores them in an array.
        console.log("you gave us: " , args[i]);
    }
}

printArguments(1,2,3,4,5,3,43,53,535,35,53,53,43,4,34,3,43,43,53,4545,4,);

//todo   Arguments are collection of all the arguments passed to a function, but it is not an array. It is an array-like object,
// which means it has a length property and can be accessed by index, but it does not have array methods like forEach, map, filter, etc.
function minn(a,b,c,d){
// function min() {    or  we can ignore parameter if using arguments.
    console.log(arguments);
    console.log(arguments[3]);
    console.log(arguments.length);
}
minn(1,2,3,4);

function sum(...args) {
    return args.reduce((result, el) => result + el);
}
console.log(sum(1,2,3,4,5,6,7,8,9,10)); // 55

//todo   if we want to pass extra arguments which is not included in the array, we need to define the parameters first, then use rest operator.

function min(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if (el < min) {
            return el;
        } else {
            return min;
        }
    });
}

console.log(min("Find the minimum value", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Find the minimum value

