//* 1 get sum up to n
function getSum(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.log(getSum(55));

//* 2 concatenate of strings in array
function concat(str){
    let result = "";
    for(let i = 0; i < str.length; i++){
        result += str[i];
    }
    return result;
}
welcome = ["Hello", " ", "Akhtar", "!"];
console.log(concat(welcome));