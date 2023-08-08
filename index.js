const game = (function () {
  function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function playRound(playerSelection, computerSelection) {
    const winner = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (winner[playerChoice] === computerChoice) {
      return `Congrats, you win! ${playerSelection} beats ${computerSelection}`;
    } else if (!winner[playerChoice]) {
      return "Did you make typo mistake? Please type valid choices (Rock, Paper, Scissors)"  
    } 
    else {
      return `Sorry :( You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }

  function finalResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
      return "Congrats!! Do you have a magic ball?";
    } else {
      return "AAhhhh!! Never mind, come and try again :/";
    }
  }

  function mainGame() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    console.log("Get 5 score and finish the game.");

    while (round < 6) {
      const playerSelection = prompt(
        `Round ${round}: Enter your choice: Rock, Paper, or Scissors`
      );
      if (playerSelection === null) {
        console.log(
          "Game has been canceled by the user. To start the game please call the game function from console or refresh the page."
        );
        break;
      }
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);

      console.log(result);

      if (result.includes("win")) {
        playerScore++;
        round++;
      } else if (result.includes("lose")) {
        computerScore++;
        round++;
      }
      console.log(
        "Computer score:",
        computerScore,
        "\nYour score:",
        playerScore
      );
    }
    if (!(round < 6)) {
      console.log(finalResult(playerScore, computerScore));
    }
  }
  return mainGame;
})();

game();
