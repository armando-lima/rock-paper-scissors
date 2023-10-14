let playerCounter = 0;
let computerCounter = 0;

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
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerCounter++;
  } else if (playerSelection === computerSelection) {
    return;
  } else {
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

//https://michalosman.github.io/rock-paper-scissors/
//https://mooniidev.github.io/rock-paper-scissors-game/
//https://www.photopea.com/