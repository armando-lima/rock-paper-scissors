let playerCounter = 0;
let computerCounter = 0;
let counter = 0;

function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomIndex];
}

function getPlayerChoice(button) {
    return button.id;
  }

function playRound(button) {
  const playerSelection = getPlayerChoice(button);
  const computerSelection = getComputerChoice();
  playerChoice.innerText = `You chose ${playerSelection}.`
  computerChoice.innerText = `The computer chose ${computerSelection}.`
  computerImg.src = `images/` + computerSelection + `.png`;
  playerImg.src = `images/` + playerSelection + `.png`;
  counter++;
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result.innerText = `Round ${counter}\nOh no! The computer managed to win this round :(.`;
    computerCounter++;
  } else if (playerSelection === computerSelection) {
    result.innerText = `Round ${counter}\nIt's a draw!`;
  } else {
    result.innerText = `Round ${counter}\nPlayer wins this round! Congratulations! :D`;
    playerCounter++;
  }
  playerScore.innerText = `Player score: ${playerCounter}`;
  computerScore.innerText = `Computer score: ${computerCounter}`;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playRound(button);
  })
);

const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const playerImg = document.querySelector('.playerChoiceImg');
const computerImg = document.querySelector('.computerChoiceImg');
const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');
const result = document.querySelector('.result');