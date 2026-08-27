// Global score variables
let humanScore = 0;
let computerScore = 0;

// Choices array
const hand = ['rock', 'paper', 'scissors'];

// Function to get computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * hand.length);
  return hand[randomIndex];
}

// Function to get human's choice
function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:");
  return choice.toLowerCase();
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

// Function to play the game (3 rounds)
function playGame() {
  for (let i = 0; i < 3; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }

  if (humanScore > computerScore) {
    return "You win the game!";
  } else if (computerScore > humanScore) {
    return "You lose the game!";
  } else {
    return "The game is a tie!";
  }
}

// Start the game
console.log(playGame());