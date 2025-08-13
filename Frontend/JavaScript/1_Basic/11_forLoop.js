//* Using for loop to print table of n

let n = prompt("Enter a number");
n = parseInt(n);
for(let i = n; i <= n*10; i += n) {
    console.log(i);
}