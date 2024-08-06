'use strict';

const numberEl = document.querySelector(".number");
const userGuess = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const messageEl = document.querySelector(".message");

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);



let playerName = prompt("Please enter your name to start the game:");

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    messageEl.textContent = message;
}

checkButton.addEventListener("click", function() {
    const guess = Number(userGuess.value);
    console.log(guess);
    if (!guess) {
        displayMessage(`🚫⛔️ No Number Entered!`);
        score--;
        document.querySelector(".score").textContent = score;
    } else if (guess === randomNumber) {
        displayMessage(`🎉 Correct Number!`);
        numberEl.textContent = randomNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        numberEl.style.width ='30rem'
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== randomNumber) {
        if (score > 1) {
            displayMessage(guess > randomNumber);
            messageEl.textContent=`Too Low`
            score--;
            document.querySelector(".score").textContent = score;
        } else if (score > 1) {
                displayMessage(guess < randomNumber);
                messageEl.textContent=`Too High`
                score--;
                document.querySelector(".score").textContent = score;
             
        }
        else {
            displayMessage(`💥 You lost the game!`);
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "#FF6347";
        }
    }
});
document.querySelector('.again').addEventListener("click", function(){
    score=20;
    randomNumber=Math.trunc(Math.random() * 20 + 1);
    console.log(randomNumber);
    messageEl.textContent="Start Guessing 🤔🤔...";
    document.querySelector(".score").textContent=score;
    numberEl.textContent="?";
    userGuess.value="";
    document.querySelector("body").style.backgroundColor="#222";
    numberEl.style.width="15rem";

})
