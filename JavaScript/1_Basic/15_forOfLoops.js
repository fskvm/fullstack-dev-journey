
//!  for of loops - used to iterate over iterable objects like arrays, strings, maps, sets, etc.

let heros = ["Iron Man", "Spider", "Thor", "Hulk", "Captain America"];

for (let hero of heros) {
    console.log(hero);
}

let str = "ApnaCollege";
for (let char of str) {
    console.log(char);
}

//? the below code is equivalent to(Captain America) the above for of loop if type is not mentioned for hero, making it as global variable.
//? if type is mentioned, it will be local variable.
// console.log(hero); // error: hero is not defined

//todo    for of loop with nested arrays
let heros2 = [["Iron Man ", "Spider", "Thor", "Hulk", "Captain America"],["Batman", "Superman", "Flash", "Green Lantern"]];

for(let list of heros2) {
    for(let hero of list) {
        console.log(hero);
    }
}

//* for Internet Explorer, for of loop is not supported, so use for in loop instead.

for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}