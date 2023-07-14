const buttons = document.querySelectorAll("button");
const content = document.createElement("div");
const container = document.querySelector(".container");

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

//function to play single round
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
   return
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return 
    } else {
      playerScore++;
      return 
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      return 
    } else {
      playerScore++;
      return 
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return 
    } else {
      playerScore++;
      return 
    }
  }
  return "Invalid choice! Please choose rock,paper,scissors";
};

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    displayResult(result);
    displayScore();
    checkWinner();
  });
});

const displayResult = (result) => {
  content.textContent = result;
  container.appendChild(content);
};
// function to display score
const displayScore = () => {
  const scoreElement = document.createElement("p");
  scoreElement.textContent = `Player: ${playerScore} score - computer: ${computerScore} score`;
  container.appendChild(scoreElement);
};
//function to check the winner of the game
const checkWinner = () => {
  if (playerScore === 5) {
    displayResult("Congratulation! You win the game");
    disableButtons();
  } else if (computerScore === 5) {
    displayResult("Computer wins the game!");
    disableButtons();
  } 
};
const disableButtons = () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });
};
