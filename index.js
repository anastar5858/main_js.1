function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerSelection === 'Scissors') ||
        (playerChoice === 'paper' && computerSelection === 'Rock') ||
        (playerChoice === 'scissors' && computerSelection === 'Paper')
    ) {
        return `Congrats, you win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `Sorry :( You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    console.log('Get 5 score and finish the game.')
    while(playerScore !== 5){
      const playerSelection = prompt(`Round ${round}: Enter your choice: Rock, Paper, or Scissors`);
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
  
      console.log(result);
  
      if (result.includes('win')) {
        playerScore++;
        console.log('Your score: ' + playerScore)
        round++;
      } else if (result.includes('lose')) {
        computerScore++;
        console.log('Computer score: ' + computerScore)
      }
      if(playerScore == 5) {
        console.log('Finally your score is 5!')
      }

    }
  }
  document.addEventListener('DOMContentLoaded', () => game())

  