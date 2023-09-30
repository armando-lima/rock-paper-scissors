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