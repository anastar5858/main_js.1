// Random Number

function getRandomNumber(min, max) {
    const random = Math.random();
    const randomNumber = Math.floor(random * (max - min + 1)) + min;
    return randomNumber;
  }
  

// Assign random number

function computerPlay() {
    const playOptions = getRandomNumber(1, 3);

    if (playOptions === 1) {
        return 'Rock';
      } else if (playOptions === 2) {
        return 'Paper';
      } else {
        return 'Scissors';
      }
}

const computerChoice = computerPlay();
console.log("Computer's choice: " + computerChoice);





