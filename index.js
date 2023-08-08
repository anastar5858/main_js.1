const initGame = () =>{
    let computerScore = 0;
    let playerScore = 0;
    let count = 1;
    const choices = ["rock","paper","scissors"]
    // computer play by using math random
    const computerPlay = () =>{    
        randomNumber = Math.floor(Math.random() * choices.length)
        return choices[randomNumber]
    }
    
    // playing rounds
    const playingRule = (playerSelection, computerSelection) =>{
        if (playerSelection === computerSelection){
            console.log("tie!")
        } else if(playerSelection === "rock"){
            if (computerSelection === "scissors"){
                console.log("rock")
                playerScore++;
                console.log("You win! Rock beats Scissors")
            } else if (computerSelection === "paper"){
                computerScore++;
                console.log("You lose! Paper beats Rock")
            }
        } else if(playerSelection === "paper"){
            if (computerSelection === "rock"){
                playerScore++;
                console.log("You win! Paper beats Rock")
            } else if (computerSelection === "scissors"){
                computerScore++;
                console.log("You lose! Scissors beats Paper")
            }
        } else if (playerSelection === "scissors"){
            if (computerSelection === "paper"){
                playerScore++;
                console.log("You win! Scissors beats Paper")
            } else if (computerSelection === "rock"){
                computerScore++;
                console.log("You lose! Rock beats Scissors")
            }
        }
        
    }
    
    //validate input from user
    const promtUser = () =>{
        var response = window.prompt("Please enter your choice of ROCK, PAPER, SCISSORS, or EXIT to stop game");
        //if statement to handle null return value when user press without enter value
        if (response === null){
            return count = 6;
        } else if(response === ""){
            alert("Please input the right format")
        } else{
            if(response.toLowerCase() === "exit") {
                count = 6;
            } else{
                while(!choices.includes(response.toLowerCase())){
                    alert("Please input the right format")
                    response = window.prompt("Please enter appropriate choices among ROCK, PAPER, SCISSORS or EXIT to stop game");
                }
                count++
                return response;
            }
            
        }   
    }
    
    //main game start here
    console.log("WELCOME A NEW GAME")
    const gameStart = () =>{
        while(count < 6){
            console.log(`=====ROUND [${count}]=====`)
            playerSelection = promtUser()
            computerSelection = computerPlay()
            if(playerSelection === undefined){
                continue;
            }
            playingRule(playerSelection,computerSelection)
        }

        console.log ("*****END-OF-GAME*****")
        // determine winner
        const winner = playerScore > computerScore? "player":"computer"
        console.log (`player scores (${playerScore}) : computer scores (${computerScore})`)
        console.log(`The WINNER : ${winner}`)
        console.log("To play again, please enter : initGame() to the console")
    }
    
    
    gameStart()
}

initGame()




