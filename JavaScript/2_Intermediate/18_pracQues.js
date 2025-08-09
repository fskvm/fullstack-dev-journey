//* 1) Write a JavaScript function that returns array elements larger than a number.

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElementsLargerThan(arr, num) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(getElementsLargerThan(arr, num)); // [8, 9, 10, 6, 7]

//* 2) Write a JavaScript function to extract unique characters from a string.

let str = "abbcccdeffghiiijklllmmno";
function getUniqueChar(str){
    let result = "";
    for(let i = 0; i < str.length; i++){
       // if(result.indexOf(str[i]) === -1){
       //     result += str[i];
       // }
       // ! or using includes method
       if(!result.includes(str[i])){
              result += str[i];
       }
    }
    return result;
}
console.log(getUniqueChar(str)); // "abcdeghilmno"

//* 3) Write a JavaScript function that accepts a list of country name as input and returns the longest country name.
let countries = ["India", "United States of America", "Canada", "Australia", "Germany"];

  function longestName(countries){
      let longest = "";
      for(let i = 0; i < countries.length; i++){
          if(countries[i].length > longest.length){
              longest = countries[i];
          }
      }
      return longest;
  }
console.log(longestName(countries)); // "United States of America"

//* 4) Write a JavaScript function to count the numbere of vowels in a String Argument.
let str2 = "Akhtar Raza";
function countVowels(str){
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < str2.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels(str2)); // 4

//* 5) Write a JavaScript function to generate a random number within a range (start and end).
function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1) + start);
}

console.log(getRandomNumber(5, 10));