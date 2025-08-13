//* 1) To find max number in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
let max = -1;
for(let i of arr) {
    if (i > max) {
        max = i;
    }
}
console.log(max); // 100

//! or using reduce method
let maxNum = arr.reduce((max, el) => {
    if(el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(maxNum); // 100

//* 2) To check if all number in an array are multiples of 10
let arr2 = [10, 20, 30, 40, 50];
let ans = arr2.every(el => el % 10 === 0);
console.log(ans); // true

//* 3) To find min number in an array through a function
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 0.6];
function findMin(arr) {
    return arr.reduce((min, el) => {
        if (el < min) {
            return el;
        } else {
            return min;
        }
    });
}
console.log(findMin(arr3)); // 0.6