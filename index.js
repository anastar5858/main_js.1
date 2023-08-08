const game = (function () {
    function computerPlay() {
      const choices = ["Rock", "Paper", "Scissors"];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    function findSimilar(userInput) {
      const options = ['rock', 'paper', 'scissors'];

      for (const option of options) {
        let matchingChars = 0;
        for (let i = 0; i < userInput.length; i++) {
          if (option.includes(userInput[i])) {
            matchingChars++;
          }
        }
  
        if (matchingChars >= 2) {
          return option;
        }
      }
  
      return null;
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
        return { message: "It's a tie!", correctedChoice: null };
      } else if (winner[playerChoice] === computerChoice) {
        return {
          message: `Congrats, you win! ${playerSelection} beats ${computerSelection}`,
          correctedChoice: null,
        };
      } else {
        const similarOption = findSimilar(playerChoice);
        if (similarOption) {
          return {
            message: `Did you mean '${similarOption}' instead of '${playerSelection}'?`,
            correctedChoice: similarOption,
          };
        } else {
          return {
            message: `Sorry :( You lose! ${computerSelection} beats ${playerSelection}`,
            correctedChoice: null,
          };
        }
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
        let playerSelection = prompt(
          `Round ${round}: Enter your choice: Rock, Paper, or Scissors`
        );
        if (playerSelection === null) {
          console.log(
            "Game has been canceled by the user. To start the game please call the game function from console or refresh the page."
          );
          break;
        }
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
  
        console.log(result.message);
  
        if (result.message.includes("win")) {
          playerScore++;
          round++;
        } else if (result.message.includes("lose")) {
          computerScore++;
          round++;
        } else if (result.message.includes("mean")) {
          const similarChoiceConfirmation = confirm(result.message);
          if (similarChoiceConfirmation) {
            const correctedChoice = result.correctedChoice;
            playerSelection = correctedChoice
            if (correctedChoice) {
              result = playRound(correctedChoice, computerSelection);
              console.log(result.message);
              if (result.message.includes("win")) {
                playerScore++;
                round++;
              } else if (result.message.includes("lose")) {
                computerScore++;
                round++;
              }
            }
          }
        }
        console.log("Computer score:", computerScore, "\nYour score:", playerScore);
      }
      if (!(round < 6)) {
        console.log(finalResult(playerScore, computerScore));
      }
    }
    return mainGame;
  })();
  
  game();
  