// declare iife to protect the scope
const initiateGame = (function () {
    // first ask users for device (mobile / phones)
    const userDevice = prompt(`Are you on a phone or laptop?`)?.toLowerCase();
    let askedIndicator = false;
    return mainGame = () => {
        // iife scope variables
        const validChoices = ['rock', 'paper', 'scissors'];
        const choiceWinnerMap = {paper: 'scissors', scissors: 'rock', rock: 'paper'};
        const scores = {computer: 0, player: 0};
        const interfaceMessages = {
            draw: 'We are both equal not counted.',
            playerWinRound: 'You turned out clever.',
            computerWinRound: 'Nothing new I win.',
            playerWinMatch: 'Fair game I need my developer to make me more intelligent **terminating.',
            computerWinMatch: 'Hehe bad luck I will stay here',
            cannotForfeit: 'Sorry you are stuck until one of us prevails',
            requestGame: 'Wanna play a game of Rock, Paper, Scissors with an intelligent Evil AI for 5 score rounds?',
            initiateGameInstruction: 'You can always try to conquer me by typing initiateGame() in your console.'
        };
        // hoisting functions in the iife scope
        const laptopInstructionsProvider = () => {
                // provide instructions to open the console
                alert(`You have to use the console to check for results I'm so evil.`);
                alert(`You can use the following options to open the console tada!`);
                alert(`Click the three-dot icon in the top right corner of the browser window.
                \nFrom there, choose More Tools > Developer Tools.\nnavigate to the console tab.`);
                alert(`Press (Option+Command+i) on mac or (Ctrl+Shift+I) on Windows to` +
                ` open the developer tools and navigate to console tab.`);
                alert(`Enter the command 'initiateGame()'`);
                askedIndicator = true;
                return
        }
        const computerRandomChoice = () => validChoices[Math.floor(Math.random() * validChoices.length)];
        const displayMessage = (message) => userDevice === 'laptop' ? console.log(message) : alert(message);
        const updateScores = (winner) => scores[winner]++;
        const displayChoices = (computerChoice, playerChoice) => {
            userDevice === 'laptop' ? console.log(`Choices:\nComputer: ${computerChoice}\nPlayer: ${playerChoice}`)
            : alert(`Choices:\nComputer: ${computerChoice}\nPlayer: ${playerChoice}`);
          };
        const displayScores = () => userDevice === 'laptop' ? console.log('Scores:\n', scores) : alert(`Scores:\n\tComputer: ${scores.computer}\n\tHuman: ${scores.player}`);
        const declareWinner = () => {
            const winnerMessage = scores.computer > scores.player ? interfaceMessages.computerWinMatch : interfaceMessages.playerWinMatch;
            displayMessage('Winner is!! Sound the drums');
            displayMessage(winnerMessage);
            initiateGame();
        };
        const playGame = () => {
            const userChoice = prompt('Choose your option')?.toLowerCase();
            if (!userChoice) displayMessage(interfaceMessages.cannotForfeit)
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
            if (userDevice === 'laptop' && askedIndicator === false) return laptopInstructionsProvider();
            if(askedIndicator === true || userDevice !== 'laptop') {
                // ask the user to play
                const startGame = confirm(interfaceMessages.requestGame);
                if (startGame) return playGame();
                if (userDevice === 'laptop') alert(`You can always try to conquer me again using initiateGame()`);
            }
        }
        initiateGame();
    }
})();
initiateGame();