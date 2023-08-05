// declare iife to protect the scope
const mainGame = (function () {

})();
// global variables
const validChoices = ['rock', 'paper', 'scissors'];
const choiceWinnerMap = {paper: 'scissors', scissors: 'rock', rock: 'paper'};
const scores = {computer: 0, player: 0};
const interfaceMessages = {draw: 'We are both dumb not counted', playerWinRound: 'You turned out clever', computerWinRound: 'Nothing new',
playerWinMatch: 'Fair game I need my developer to make me more intelligent **terminating', computerWinMatch: 'Hehe bad luck i will stay here',
cannotForfeit: 'Sorry you are stuck until one of us prevails'
}
// no user manipulation to these objects
Object.freeze(choiceWinnerMap);
Object.freeze(interfaceMessages);
Object.freeze(validChoices);
// hoisting functions
const provideInstructions = () => {
    alert(`You have to use the console to check for results I'm so evil`);
    playGame();
}
const computerRandomChoice = () => validChoices[Math.floor(Math.random() * validChoices.length)];
const winnerDeclarer = (msg) => {
    console.log(msg);
    // ask to play again
    initiateGame();
}
const playGame = () => {
    const userChoice = prompt('Choose your option')?.toLowerCase();
    if (!userChoice) console.log(interfaceMessages.cannotForfeit)
    while(!validChoices.includes(userChoice)) {
        playGame();
        return;
    }
    const computerChoice = computerRandomChoice();
    // set scores
    if (userChoice === computerChoice) {
        console.log(interfaceMessages.draw)
    } else if (choiceWinnerMap[userChoice] === computerChoice) {
        console.log(interfaceMessages.computerWinRound, scores.computer)
        scores.computer++;
    } else {
        console.log(interfaceMessages.playerWinRound, scores.player)
        scores.player++; 
    }
    console.log(`Choices:\nComputer: ${computerChoice}\nPlayer: ${userChoice}`)
    console.log('Scores', scores)
    // check scores
    if (scores.computer + scores.player === 5) {
        // declare winner
        console.log('winner is!! sound the drums')
        scores.computer > scores.player ? winnerDeclarer(interfaceMessages.computerWinMatch) : winnerDeclarer(interfaceMessages.playerWinMatch)
        return
    }
    playGame();
    return
}
const initiateGame = () => {
    scores.computer = 0;
    scores.player = 0;
    // ask the user to play
    const startGame = confirm(`Wanna play a game of 
    Rock, Paper, Scissors with an intelligent Evil AI for 5 score rounds?`);
    if (startGame) provideInstructions();
    alert('You can always try to conquer me by typing initiateGame() in your console');
}
initiateGame();
// freeze the main function
// preventing adding properties that are able to manipulate scores object
// e.g initiateGame.setScore = () => scores.computer = 10;
Object.freeze(initiateGame);
Object.freeze(playGame);
Object.freeze(winnerDeclarer);
Object.freeze(computerRandomChoice);
Object.freeze(provideInstructions);