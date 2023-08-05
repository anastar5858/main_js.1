// declare iife to protect the scope
const initiateGame = (function () {
    return mainGame = () => {
        // iife scope variables
        const validChoices = ['rock', 'paper', 'scissors'];
        const choiceWinnerMap = {paper: 'scissors', scissors: 'rock', rock: 'paper'};
        const scores = {computer: 0, player: 0};
        const interfaceMessages = {
            draw: 'We are both dumb not counted',
            playerWinRound: 'You turned out clever',
            computerWinRound: 'Nothing new',
            playerWinMatch: 'Fair game I need my developer to make me more intelligent **terminating',
            computerWinMatch: 'Hehe bad luck I will stay here',
            cannotForfeit: 'Sorry you are stuck until one of us prevails',
            requestGame: 'Wanna play a game of Rock, Paper, Scissors with an intelligent Evil AI for 5 score rounds?',
            initiateGameInstruction: 'You can always try to conquer me by typing initiateGame() in your console'
        };
        // hoisting functions in the iife scope
        const provideInstructions = () => {
            alert(`You have to use the console to check for results I'm so evil`);
            playGame();
        }
        const computerRandomChoice = () => validChoices[Math.floor(Math.random() * validChoices.length)];
        const displayMessage = (message) => console.log(message);
        const updateScores = (winner) => scores[winner]++;
        const displayChoices = (computerChoice, playerChoice) => {
            console.log(`Choices:\nComputer: ${computerChoice}\nPlayer: ${playerChoice}`);
          };
        const displayScores = () => console.log('Scores:', scores);
        const declareWinner = () => {
            const winnerMessage = scores.computer > scores.player ? interfaceMessages.computerWinMatch : interfaceMessages.playerWinMatch;
            displayMessage('Winner is!! Sound the drums');
            displayMessage(winnerMessage);
            initiateGame();
        };
        const playGame = () => {
            const userChoice = prompt('Choose your option')?.toLowerCase();
            if (!userChoice) console.log(interfaceMessages.cannotForfeit)
            if (!validChoices.includes(userChoice)) return playGame();
            const computerChoice = computerRandomChoice();
            // set scores
            if (userChoice === computerChoice) {
                displayMessage(interfaceMessages.draw);
            } else if (choiceWinnerMap[userChoice] === computerChoice) {
                displayMessage(interfaceMessages.computerWinRound);
                updateScores('computer');
            } else {
                displayMessage(interfaceMessages.playerWinRound);
                updateScores('player'); 
            }
            displayChoices(computerChoice, userChoice);
            displayScores();
            // check scores
            if (scores.computer + scores.player === 5) {
                declareWinner();
                return
            }
            playGame();
        }
        const initiateGame = () => {
            scores.computer = 0;
            scores.player = 0;
            // ask the user to play
            const startGame = confirm(interfaceMessages.requestGame);
            if (startGame) return provideInstructions();
            alert(interfaceMessages.initiateGameInstruction);
        }
        initiateGame();
    }
})();
initiateGame();