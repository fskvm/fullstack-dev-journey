//! 1,
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

//! 2 - to find digit count of number using for loop without converting in string

let count = 0;
let number = 287152;

for(let i = number; i > 0; i = Math.floor(i/10)){
    count++;
}
console.log(count);

//? or

let countt = 0;
while (number > 0) {
    countt++;
    number = Math.floor(number/10);
}
console.log(countt);

//! 3

let number2 = 287152;
let sum = 0;

let temp= number2;

while(temp > 0){
   let digit = temp % 10;
   sum += digit;
   temp = Math.floor(temp/10);
}
console.log(sum);

//? OR

let summ = 0;
for (let temp = number2; temp > 0; temp = Math.floor(temp/10)) {
    let digit = temp % 10;
    summ += digit;
}
console.log(summ);

//! 4

let n = 5;
let factorial = 1;

for(let i = 1; i <= n; i++){
    factorial *= i;
}
console.log(factorial);

//! 5

let arr1 = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;

for(let i = 0; i <= arr1.length; i++){
    if(largest < arr1[i]){
        largest = arr1[i];
    }
}
console.log(largest);