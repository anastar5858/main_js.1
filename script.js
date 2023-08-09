// Computer Choice
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
  const playerChoice = playerSelection.toLowerCase();
  let round = 1;
  
  if (playerChoice === computerSelection) {
    return `It's a tie!\nYou both played ${playerChoice}`;
  } else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "paper")
  ) {
    return `You win this round!\n${playerChoice} beats ${computerSelection}`;
  } else if (
    (computerSelection === "rock" && playerChoice === "scissors") ||
    (computerSelection === "paper" && playerChoice === "rock") ||
    (computerSelection === "scissors" && playerChoice === "paper")
  ) {
    return `Computer wins this round.\n${computerSelection} beats ${playerChoice}`;
  } else {
    return `Please enter a valid option`
  }
}


// Game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;
  console.log("Win 5 rounds to win the game.")

  while (playerScore < 5 && computerScore < 5) {
    let playerSelection = prompt(`Enter your choice: Rock, Paper, or Scissors`)
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection, playerScore, computerScore);

    console.log(result);


    if (result.includes('You win this round!')) {
      playerScore++;
      console.log("Round: " + round + "\nYour score: " + playerScore + ", Computer's score:" + computerScore)
      round++;
    } else if (result.includes('Computer wins this round.')) {
      computerScore++;
      console.log("Round: " + round + "\nYour score: " + playerScore + ", Computer's score:" + computerScore)
      round++;
    }
    if (playerScore == 5) {
      console.log("Congradulations! You won the game! \nYour score: " + playerScore + ", Computer's score:" + computerScore)
    }

  }
}

document.addEventListener('DOMContentLoaded', () => game())

