let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

function getPlayerChoice() {
    let playerChoice = prompt("Please input your choice: Rock / Paper / Scissor").toLowerCase();
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissor") {
        console.log("Wrong input. Please select one of the following: Rock / Paper / Scissor");
        playerChoice = prompt("Please input your choice: Rock / Paper / Scissor").toLowerCase();
    }
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissor")
        || (playerSelection === "scissor" && computerSelection === "rock")) {
        console.log(`You lose this round! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }
    else if (playerSelection === computerSelection){
        console.log(`It is a tie! Both you and the computer selected ${computerSelection}`);
    }
    else{
        console.log(`You win this round! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    }

}

function game(){
    for (let i = 0; i < 5; i++){
        playRound(getPlayerChoice, getComputerChoice);
    }
    if (playerScore > computerScore){
        console.log(`You win! Your score: ${playerScore}\nComputer score: ${computerScore}`);
    }
    else{
        console.log(`You lose! Your score: ${playerScore}\nComputer score: ${computerScore}`);
    }
    playerScore = 0;
    computerScore = 0;
}

game();
