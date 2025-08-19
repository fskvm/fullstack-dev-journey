//? require VS import(we can use any one)

//? 1) "We can't selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.
//? 2) Loading is synchronous for 'require' but can be asynchronous for 'import'."

//* We can use require or import (so we have comment the require, you can uncomment and see)
//? This uses a require
// const giveMeAJoke = require('give-me-a-joke');

import {add, PI} from "./Math.js"
//? This uses an import (not work till we add "type": "module" in package.json (for creating json we use "node init"))
import { generate, count } from "random-words";

// To get a random dad joke
// giveMeAJoke.getRandomDadJoke (function(joke) {
//      console.log(joke);
// });


// To get a random word
console.log(count());
console.log(generate());

// Using Math.js file functions
console.log(add(2,5));
console.log(PI);