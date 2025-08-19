
//* We can create a function to export in other files, but we need to export it first
//? To use it in other files, we need to import it and add "type": "module" in package.json (if we don't have create using node init)
export const add = (a,b) => a+b;
export const sub = (a,b) => a-b;
export const mul = (a,b) => a*b;
export const div = (a,b) => a/b;
export const PI = 3.14;
