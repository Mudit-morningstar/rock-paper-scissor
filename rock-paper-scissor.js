const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const para = document.createElement('p');


rockBtn?.addEventListener('click',()=> {
    let computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
});

paperBtn?.addEventListener('click',()=> {
    let computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
})

scissorBtn?.addEventListener('click',()=> {
    let computerSelection = getComputerChoice();
    playRound("scissor", computerSelection);
})



// const game = (() => {
//     let winCounter = 0;
//     let result = "";
//     for(let i = 0; i < 5; i++) {
//         let computerSelection = getComputerChoice();
//         let userSelection = prompt(`Please enter your choice (rock, paper or scissor)\n Win Counter: ${winCounter}\n ${result}`);
//         result =  playRound(userSelection, computerSelection);
//         if(result === win) {
//             winCounter+=1;
//             console.log(win);
//         } else if(result === lose) {
//             console.log(lose);
//         } else {
//             i--;
//             console.log(tie)
//         }
//     }

//     if(winCounter >= 3) {
//         console.log("Congratulations!!, You've won the game. Refresh the tab to play again")
//     } else {
//         console.log("Sad!! You've lost the game. Refresh the tab to try again")
//     }
// })


const choices = ["rock", "paper", "scissor"];


const win = "Woho!! You Won";
const lose = "Oh Ho!! You lost";
const tie = "Hey!! It's a tie";
let user_win = 0;
let computer_win = 0;

const getComputerChoice = (() => {
    index = Math.floor(Math.random() * 3);
    return choices[index];
})

const playRound = ((userChoice, computerChoice) => {
    userSelectionClean = userChoice.toLowerCase().trim();

    if(user_win > 5){
        
    }

    if(userSelectionClean === "rock") {
        if(computerChoice === "rock"){
            return tie;
        }
        else if(computerChoice === "paper"){
            return lose;
            computer_win++;
        } else {
            return win;
            user_win++;
        }
    } else if(userSelectionClean === "paper") {
        if(computerChoice === "rock"){
            return win;
            user_win++;
        }
        else if(computerChoice === "paper"){
            return tie;
        } else {
            return lose;
            computer_win++;
        }
    } else if(userSelectionClean === "scissor") {
        if(computerChoice === "rock"){
            return lose;
        }
        else if(computerChoice === "paper"){
            return win;
            user_win++;
        } else {
            return tie;
            computer_win++;
        }
    } else {
        return "Please select out of rock paper and scissor"
    }
})



