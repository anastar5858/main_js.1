const initiateGame = (function () {
    let userDevice = prompt(`Are you on a phone (P) or laptop (L)?`)?.toLowerCase().trim();
    let askedIndicator = false;
    // https://dirask.com/posts/JavaScript-calculate-Levenshtein-distance-between-strings-pJ3krj
    const calculateLevenshteinDistance = (a, b) => {
        const aLimit = a.length + 1;
        const bLimit = b.length + 1;
        const distance = Array(aLimit);
        for (let i = 0; i < aLimit; ++i) {
            distance[i] = Array(bLimit);
        }
        for (let i = 0; i < aLimit; ++i) {
            distance[i][0] = i;
        }
        for (let j = 0; j < bLimit; ++j) {
            distance[0][j] = j;
        }
        for (let i = 1; i < aLimit; ++i) {
            for (let j = 1; j <  bLimit; ++j) {
                const substitutionCost = (a[i - 1] === b[j - 1] ? 0 : 1);
                distance[i][j] = Math.min(
                    distance[i - 1][j] + 1, // deletion
                    distance[i][j - 1] + 1, // insertion
                    distance[i - 1][j - 1] + substitutionCost // substitute
                );
            }
        }
        return distance[a.length][b.length];
    };
    return mainGame = () => {
        if ((userDevice !== 'laptop' && userDevice !== 'l') && (userDevice !== 'phone' && userDevice !== 'p')) {
            userDevice = prompt(`Are you on a phone (P) or laptop (L)?`)?.toLowerCase().trim();
            mainGame()
            return
        }
        const validChoices = ['rock', 'paper', 'scissors', 'r', 'p', 's'];
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
        const laptopInstructionsProvider = () => {
                alert(`You have to use the console to check for results I'm so evil.\n\n`
                + `You can use any of the following options to open the console tada! sometimes i'm nice:\n`
                + `\t1. Click the three-dot icon in the top right corner of the browser window.`
                + `From there, choose More Tools > Developer Tools. navigate to the console tab.\n`
                + `\t2. Press (Option+Command+i) on mac or (Ctrl+Shift+I) on Windows to` +
                ` open the developer tools and navigate to console tab.\n\n`
                + `Finally enter the command 'initiateGame()' ahh lot of steps`);
                askedIndicator = true;
                return
        }
        const computerRandomChoice = () => validChoices[Math.floor(Math.random() * validChoices.length)];
        const displayMessage = (message) => userDevice === 'laptop' || userDevice === 'l' ? console.log(message) : alert(message);
        const updateScores = (winner) => scores[winner]++;
        const displayChoices = (computerChoice, playerChoice) => {
            userDevice === 'laptop' || userDevice === 'l' ? console.log(`Choices:\nComputer: ${computerChoice}\nPlayer: ${playerChoice}`)
            : alert(`Choices:\nComputer: ${computerChoice}\nPlayer: ${playerChoice}`);
          };
        const displayScores = () => userDevice === 'laptop' || userDevice === 'l' ? console.log('Scores:\n', scores) : alert(`Scores:\n\tComputer: ${scores.computer}\n\tHuman: ${scores.player}`);
        const declareWinner = () => {
            const winnerMessage = scores.computer > scores.player ? interfaceMessages.computerWinMatch : interfaceMessages.playerWinMatch;
            displayMessage('Winner is!! Sound the drums');
            displayMessage(winnerMessage);
            initiateGame();
        };
        const playGame = () => {
            let userChoice = prompt('Choose your option (Rock, Paper, Scissors) or user (R, P, S).')?.toLowerCase();
            userChoice === 'r' ? userChoice = 'rock' : userChoice === 's' 
            ? userChoice = 'scissors' : userChoice === 'p' 
            ? userChoice = 'paper' : userChoice = userChoice;
            if (userChoice === undefined) {
                displayMessage(interfaceMessages.cannotForfeit);
                const quit = confirm(`Unless you really want to quit :( don't make the AI cry.` +
                `You'll have to reload or manually restart haha`);
                if (quit) return;
            }
            if (!validChoices.includes(userChoice)) {
                if (!userChoice) return playGame();
                const potentialOption = validChoices.filter((choice) => (calculateLevenshteinDistance(choice, userChoice) < 2))[0];
                let confirmation;
                if (potentialOption !== undefined && userChoice.length > 1 ) {
                    confirmation = confirm(`I think you meant ${potentialOption} correct`);
                    if (confirmation) userChoice = potentialOption;
                }
                if (!confirmation || potentialOption === undefined) {
                    displayMessage(`Unknown option!!!`);
                    return playGame();
                }
            }
            let computerChoice = computerRandomChoice();
            computerChoice === 'r' ? computerChoice = 'rock' : computerChoice === 's' 
            ? computerChoice = 'scissors' : computerChoice === 'p' 
            ? computerChoice = 'paper' : computerChoice = computerChoice;
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
            if (scores.computer + scores.player === 5) {
                declareWinner();
                return
            }
            playGame();
        }
        const initiateGame = () => {
            scores.computer = 0;
            scores.player = 0;
            if ((userDevice === 'laptop' || userDevice === 'l') && askedIndicator === false) return laptopInstructionsProvider();
            if(askedIndicator === true || (userDevice !== 'laptop' && userDevice !== 'l')) {
                const startGame = confirm(interfaceMessages.requestGame);
                if (startGame) return playGame();
                if (userDevice === 'laptop' || userDevice === 'l') alert(`You can always try to conquer me again using initiateGame()`);
            }
        }
        initiateGame();
    }
})();
initiateGame();