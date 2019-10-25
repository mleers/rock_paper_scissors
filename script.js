let playerScore = 0;
    let computerScore = 0;

    let computerPlay = () => {
        moves = ["rock", "paper", "scissors"];
        computerSelection = moves[Math.floor(Math.random()*moves.length)];
        return computerSelection;
    }


    let playRound = (playerSelection, computerSelection) => {
        

        if (playerSelection.toLowerCase() == "rock" &&  computerSelection == "scissors") {
                playerScore += 1;
                return `You played ${playerSelection.toLowerCase()} and beat Computer's ${computerSelection}! Score: ${playerScore} to ${computerScore}`;   
         }

         else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
                playerScore += 1;
                return `You played ${playerSelection.toLowerCase()} and beat Computer's ${computerSelection}! Score: ${playerScore} to ${computerScore}`;
                
        }

        else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
                playerScore += 1;
                return `You played ${playerSelection.toLowerCase()} and beat Computer's ${computerSelection}! Score: ${playerScore} to ${computerScore}`;
                
        }

        else if (computerSelection == "rock" &&  playerSelection.toLowerCase() == "scissors") {
                computerScore += 1;
                return `You played ${playerSelection.toLowerCase()} and lost to Computer's ${computerSelection}! Score: ${playerScore} to ${computerScore}`;   
         }

         else if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock") {
                computerScore += 1;
                return `You played ${playerSelection.toLowerCase()} and lost to Computer's ${computerSelection}! Score: ${playerScore} to ${computerScore}`;
                
        }

        else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") {
                computerScore += 1;
                return `You played ${playerSelection.toLowerCase()} and lost to Computer's ${computerSelection}! Score: ${playerScore} to ${computerScore}`;
                
        }
        
        else if (playerSelection == computerSelection) {
            playerScore, computerScore += 1;
            return `Tie! You played ${playerSelection} and Computer also played ${computerSelection}! Score: ${playerScore} to ${computerScore}`;
        }   
    }

    let game = () => {
        for (let x = 0; x < 5; x++) {
            console.log(playRound(prompt("Pick 'rock', 'paper' or 'scissors'"), computerPlay()))   
    }

        if (playerScore > computerScore) {
            console.log("Congrats you beat the computer")
        }

        else if (playerScore < computerScore) {
            console.log("Computer wins, better luck next time")
        }

        else if (playerScore === computerScore) {
            console.log("Tie")
        }
    }
    game();