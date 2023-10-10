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
    console.log(
      `You lose this round! ${computerSelection} beats ${playerSelection}`
    );
    computerScore++;
  } else if (playerSelection === computerSelection) {
    console.log(
      `It is a tie! Both you and the computer selected ${computerSelection}`
    );
  } else {
    console.log(
      `You win this round! ${playerSelection} beats ${computerSelection}`
    );
    playerScore++;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playRound(button);
  })
);
