const game = (() => {
    let winCounter = 0;
    let result = "";
    for(let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let userSelection = prompt(`Please enter your choice (rock, paper or scissor)\n Win Counter: ${winCounter}\n ${result}`);
        result =  playRound(userSelection, computerSelection);
        if(result === win) {
            winCounter+=1;
            console.log(win);
        } else if(result === lose) {
            console.log(lose);
        } else {
            i--;
            console.log(tie)
        }
    }

    if(winCounter >= 3) {
        console.log("Congratulations!!, You've won the game")
    } else {
        console.log("Sad!! You've lost the game. Refresh the tab to try again")
    }
})


const choices = ["rock", "paper", "scissor"];


const win = "Wohoo!! You Won";
const lose = "Oh Ho!! You lost";
const tie = "Hey!! It's a tie";

const getComputerChoice = (() => {
    index = Math.floor(Math.random() * 3);
    return choices[index];
})

const playRound = ((userChoice, computerChoice) => {
    userSelectionClean = userChoice.toLowerCase().trim();

    if(userSelectionClean === "rock") {
        if(computerChoice === "rock"){
            return tie;
        }
        else if(computerChoice === "paper"){
            return lose;
        } else {
            return win
        }
    } else if(userSelectionClean === "paper") {
        if(computerChoice === "rock"){
            return win;
        }
        else if(computerChoice === "paper"){
            return tie;
        } else {
            return lose
        }
    } else if(userSelectionClean === "scissor") {
        if(computerChoice === "rock"){
            return lose;
        }
        else if(computerChoice === "paper"){
            return win;
        } else {
            return tie
        }
    } else {
        return "Please select out of rock paper and scissor"
    }
})

window.onload = game();


