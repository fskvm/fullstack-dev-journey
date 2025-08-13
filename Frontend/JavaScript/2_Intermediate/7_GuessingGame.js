//* you can ignore the parseInt function by excluding the use of strick quality operator (===) and using loose equality operator (==) instead.

const maxNum = parseInt(prompt("Enter the Maximum number for the guessing game:"));

const randomNum = Math.floor(Math.random() * maxNum) + 1;

let guess = prompt(`Guess a number between 1 and ${maxNum} : `);

while(true) {
    if(guess === "quit"){
       console.log("quitting the game");
       break;
    }

    //Converting guess to number for comparison
    const guessNum = parseInt(guess);

    if(guessNum === randomNum) {
        console.log(`Congratulations! You guessed the number ${randomNum} correctly!`);
        break;
    }
    else if(guessNum < randomNum) {
        guess = prompt("Hint: Too Low! Try again or type 'quit' to exit.");
    }
    else {
        guess = prompt("Hint: Too High! Try again or type 'quit' to exit.")
    }
}