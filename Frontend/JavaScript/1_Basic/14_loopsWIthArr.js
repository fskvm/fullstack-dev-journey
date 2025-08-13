//! Loops with Arrays
let arr = ["lion", "tiger", "bear", "wolf", "fox"];
arr.push("cat");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("for backwards");

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
console.log("while backwards");
i = arr.length - 1;
while (i >= 0) {
    console.log(arr[i]);
    i--;
}

//! Nested Loops with nested Arrays
let nestedArr = [["Akhtar raza", `marks:${95}`], ["Ali", `marks:${85}`], ["Ahmed", `marks:${75}`]];
for (let i = 0; i < nestedArr.length; i++) {
    console.log(`Student information for #${i + 1}:`);
    for(let j = 0; j < nestedArr[i].length; j++) {
        console.log(nestedArr[i][j]);
    }
}