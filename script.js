// Random Number
function getRandomNumber(min, max) {
    const random = Math.random();
    const randomNumber = Math.floor(random * (max - min + 1)) + min;
    return randomNumber;
  }
  

// Assign random number
function computerInputConvert() {
    const computerPlayOption = getRandomNumber(1, 3);

    if (computerPlayOption === 1) {
        return 'rock';
      } else if (computerPlayOption === 2) {
        return 'paper';
      } else {
        return 'scissors';
      }
}


// Alert input box
function userInput() {
  let userInput = prompt("Please enter rock, paper or scissors");

  if (userInput === null || userInput === "") {
    console.log("User canceled the prompt.");
    return;
  }

  userInput = userInput.toLowerCase(); 

  if (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") {
    console.log("Please enter a valid option");  
    return;  
} else {
    return userInput
}
}


// Score system
let userScore = 0;
let computerScore = 0;

const userChoice = userInput();
const computerChoice = computerInputConvert();

function scoreSystem(userChoice, computerChoice) {
  if (computerChoice === "rock" && userInput === "paper") {
    userScore++;
    console.log("You win!" + "\nYou: " + userScore + " Computer: " + computerScore);
  } else if (computerChoice === "paper" && userInput === "rock") {
    computerScore++;
    console.log("You lose." + "\nYou: " + userScore + " Computer: " + computerScore);
  } else if (computerChoice === "paper" && userInput === "scissors") {
    userScore++;
    console.log("You win!" + "\nYou: " + userScore + " Computer: " + computerScore);
  } else if (computerChoice === "scissors" && userInput === "paper") {
    computerScore++;
    console.log("You lose." + "\nYou: " + userScore + " Computer: " + computerScore);
  } else if (computerChoice === "rock" && userInput === "paper") {
    userScore++;
    console.log("You lose." + "\nYou: " + userScore + " Computer: " + computerScore);
  } else if (computerChoice === "rock" && userInput === "scissors") {
    computerScore++;
    console.log("You lose." + "\nYou: " + userScore + " Computer: " + computerScore);
  } else if (computerChoice === "scissors" && userInput === "rock") {
    userScore++;
    console.log("You win!" + "\nYou: " + userScore + " Computer: " + computerScore);
  } else {
    console.log("It's a tie!" + "\nYou: " + userScore + " Computer: " + computerScore);
  } 
}


//Game loop

while (userScore < 5 && computerScore < 5) {
  const userChoice = userInput();
  const computerChoice = computerInputConvert();

  console.log("Your choice: " + userChoice);
  console.log("Computer's choice: " + computerChoice);

  scoreSystem(userChoice, computerChoice);
}


// Determine the winner
if (userScore > computerScore) {
  console.log("You win the game!");
} else if (userScore < computerScore) {
  console.log("You lose the game.");
} else {
  console.log("It's a tie!");
}