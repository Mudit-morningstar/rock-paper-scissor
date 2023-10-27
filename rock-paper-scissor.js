const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const score = document.querySelector(".score");
const result = document.querySelector(".result");
const para = document.createElement("p");
const resultPara = document.createElement("p");


rockBtn.addEventListener('click', ()=> {
    let computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    score.append(para);
    result.append(resultPara)
});

paperBtn.addEventListener('click',()=> {
    let computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
    score.append(para);
    result.append(resultPara)
})

scissorBtn.addEventListener('click',()=> {
    let computerSelection = getComputerChoice();
    playRound("scissor", computerSelection);
    score.append(para);
    result.append(resultPara)
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


const win = "You Won";
const lose = "You lose";
const tie = "It's a tie";
let user_win = 0;
let computer_win = 0;

const getComputerChoice = (() => {
    index = Math.floor(Math.random() * 3);
    return choices[index];
})

const playRound = ((userChoice, computerChoice) => {
    userSelectionClean = userChoice.toLowerCase().trim();

    if(user_win >= 5){
        resultPara.textContent = "Wohooo!!! You Won"
        return 
    } else if(computer_win >= 5) {
        resultPara.textContent = "Oh Ho!! You Lost";
        return
    }

    if(userSelectionClean === "rock") {
        if(computerChoice === "rock") {
            para.textContent = user_win;
            resultPara.textContent = tie
            return tie;
        }
        else if(computerChoice === "paper"){
            computer_win++;
            para.textContent = user_win;
            resultPara.textContent = lose
            return lose;
            
        } else {
            console.log(win);
            user_win++;
            para.textContent = user_win;
            resultPara.textContent = win
            return win;
            
        }
    } else if(userSelectionClean === "paper") {
        if(computerChoice === "rock"){
            user_win++;
            para.textContent = user_win;
            resultPara.textContent = win
            return win;
            
        }
        else if(computerChoice === "paper"){
            para.textContent = user_win;
            resultPara.textContent = tie
            return tie;
        } else {
            computer_win++;
            para.textContent = user_win;
            resultPara.textContent = lose
            return lose;
            
        }
    } else if(userSelectionClean === "scissor") {
        if(computerChoice === "rock"){
            para.textContent = user_win;
            resultPara.textContent = lose
            return lose;
        }
        else if(computerChoice === "paper"){
            user_win++;
            para.textContent = user_win;
            resultPara.textContent = win
            return win;
            
        } else {
            computer_win++;
            para.textContent = user_win;
            resultPara.textContent = tie
            return tie;
        }
    } else {
        para.textContent = user_win;
        return "Please select out of rock paper and scissor"
    }
    
})



