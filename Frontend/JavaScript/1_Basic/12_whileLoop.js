const favMovie = "avatar";
let guess = prompt("Guess my Favorite Movie(Hint: Creatures are blue): ");
guess = guess.toLowerCase();

while ((guess !== favMovie) && (guess !== "quit")) {
    guess = prompt("Try again if not please enter 'quit' to exit: ");
    guess = guess.toLowerCase();
}
if (guess === favMovie) {
    console.log("You guessed it right, Congrats!");
} else {
    console.log("You quit the game, better luck next time!");
}

