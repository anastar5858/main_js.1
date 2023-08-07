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
        return userInput;
    }
}

// Score system
let userScore = 0;
let computerScore = 0;

function scoreSystem(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("It's a tie!\nCurrent score" + "\nYou: " + userScore + " Computer: " + computerScore);
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        console.log("You win this round! \nCurrent score" + "\nYou: " + userScore + " Computer: " + computerScore);
    } else {
        computerScore++;
        console.log("Computer wins this round. \nCurrent score" + "\nYou: " + userScore + " Computer: " + computerScore);
    }
}

// Game loop
while (userScore < 5 && computerScore < 5) {
    const userChoice = userInput();
    const computerChoice = computerInputConvert();

    if (userChoice) {
        console.log("Your choice: " + userChoice);
        console.log("Computer's choice: " + computerChoice);

        scoreSystem(userChoice, computerChoice);
    }
}

// Determine the winner
if (userScore > computerScore) {
    console.log("You win the game!");
} else if (userScore < computerScore) {
    console.log("You lose the game.");
} else {
    console.log("It's a tie!");
}
