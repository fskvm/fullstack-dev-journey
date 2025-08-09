//! Nested Arrays or Multidimensional Arrays - Arrays within Arrays

let arr = [1, 2, 3, 4, 5];
let nestedArr = [1, 2, [3, 4, 5], 6, 7];
console.log(arr[0]); // 1
console.log(nestedArr[2]); // [3, 4, 5]
console.log(nestedArr[2][0]); // 3 that is [row][column] notation
console.log(nestedArr[2][1]); // 4
console.log(nestedArr[2][5]); // undefined

//* Practice Question - to show a Tic Tac Toe game state

let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
game[0][1] = 'O'; // Update the game state
