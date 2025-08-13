let gameSequence = [];
let userSequence = [];
let btns = ["red", "purple", "green", "yellow"];
let isGameActive = false;
let level = 0;
let h2 = document.querySelector("h2");
let highScore = 0;

let highScoreUp = document.querySelector("#highScoreDisplay");

document.addEventListener("keypress", () => { //todo - 0 only when key is pressed
    if(isGameActive === false){
        console.log("Game has Started");
        isGameActive = true;
        levelUp();  //todo - 1
    }
});

function levelUp(){
    userSequence = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random() * 4);
    let randColor = btns[randIndex];
    gameSequence.push(randColor);
    console.log(gameSequence); //! Hint in console
    let randBtn = document.querySelector(`.${randColor}`);

    btnFlash(randBtn); //todo - 2
}

function btnFlash(btn){ //todo - firstly for 2 then 4
   btn.classList.add("flash");
   setTimeout(() => {
       btn.classList.remove("flash");
   }, 250);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress); //todo - 3 only when btn is clicked
}

function btnPress(){
    btnFlash(this); // todo - 4 Flash the button that is pressed
    let btnColor = this.classList[1]; //! we accessing only the second class which is color
    userSequence.push(btnColor);

    checkSequence(userSequence.length - 1); //todo - firstly for 5 then 5'' call for next button (we are passing the last index of userSequence to checkSequence)
}

function checkSequence(index) {
    if(userSequence[index] === gameSequence[index]){ //todo - 5' This checks if the user's current input matches the corresponding game sequence item at the same index.
        if(userSequence.length === gameSequence.length) { //todo 5'' - Code execution returns to where `checkSequence()` was called `btnPress()`, waiting for additional user input via more button clicks.
            setTimeout(levelUp, 1000); //todo - 6 (The entire sequence has been correctly completed)

        }
    } else { //todo - if false then this will be executed

        if(level - 1 > highScore){
            highScore = level - 1;
            updateHighScore();
        }
        h2.innerHTML = `Game Over! Your score is <b>${level - 1}</b> <br>Press any key to restart!`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250)
        gameReset(); //todo - 7 (The user has made an incorrect input, triggering a game over scenario)
    }
}
function updateHighScore(){
    highScoreUp.innerText = `High Score: ${highScore}`;
}

function gameReset(){
    isGameActive = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}