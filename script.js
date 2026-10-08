// Global score variables
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

// Choices array
const hand = ['rock', 'paper', 'scissors'];

// Function to get computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * hand.length);
  return hand[randomIndex];
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `It's a tie! You both chose ${humanChoice}.`;
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

// Handle a button click
function handleChoice(humanChoice) {
  if (roundsPlayed >= maxRounds) {
    document.getElementById("final").innerText = "Game over! Please reset to play again.";
    return;
  }

  const computerChoice = getComputerChoice();
  const roundResult = playRound(humanChoice, computerChoice);

  roundsPlayed++;
  document.getElementById("result").innerText = roundResult;
  document.getElementById("score").innerText =
    `Score: You ${humanScore} - Computer ${computerScore} (Round ${roundsPlayed}/${maxRounds})`;

  if (roundsPlayed === maxRounds) {
    if (humanScore > computerScore) {
      document.getElementById("final").innerText = "🎉 You are the final winner!";
    } else if (computerScore > humanScore) {
      document.getElementById("final").innerText = "💻 Computer wins the game!";
    } else {
      document.getElementById("final").innerText = "🤝 It's a draw!";
    }
  }
}

// Reset the game
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  document.getElementById("result").innerText = "";
  document.getElementById("score").innerText = "";
  document.getElementById("final").innerText = "";
}

// Attach event listeners once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rock").addEventListener("click", () => handleChoice("rock"));
  document.getElementById("paper").addEventListener("click", () => handleChoice("paper"));
  document.getElementById("scissors").addEventListener("click", () => handleChoice("scissors"));
  document.getElementById("reset").addEventListener("click", resetGame);
});
