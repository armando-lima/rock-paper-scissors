let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomIndex];
}

function getPlayerChoice(button) {
    return button.id;
  }

function playRound(button) {
  const playerSelection = getPlayerChoice(button);
  const computerSelection = getComputerChoice();
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")
  ) {
    result.innerText = `You lose this round! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else if (playerSelection === computerSelection) {
    result.innerText = `It is a tie! Both you and the computer selected ${computerSelection}`;
  } else {
    result.innerText = `You win this round! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }
  score.innerText = `Player score: ${playerScore}\nComputer score: ${computerScore}`
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playRound(button);
  })
);

const result = document.createElement('div');
document.querySelector('body').appendChild(result);

let score = document.createElement('div');
document.querySelector('body').appendChild(score);