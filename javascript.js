function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}