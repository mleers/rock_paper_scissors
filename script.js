let playerSelection;
let playerScore = 0;
let computerScore = 0;
let gameWinner = '';
let gameOver = false;
const gameButtons = document.querySelectorAll('button');

const computerPlay = () => {
	let randomPick = Math.floor(Math.random() * 3); // random assignment to play options
	return (randomPick === 0) ? 'Rock' : (randomPick === 1) ? 'Paper' : 'Scissors';
}

gameButtons.forEach((gameButton) => {
	gameButton.addEventListener('click', function(event) {
		playerSelection = event.target.textContent;
		if (gameOver === true) return; // only play again if previous round finished
		playRound(playerSelection);
	});
});

function playRound(playerSelection) {
	let computerSelection = computerPlay(); // run once each round
	let bothPlays = playerSelection + ' vs. ' + computerSelection;
	let endRoundMessage;  // win or loss message per round

	if (playerSelection === computerSelection) {
		bothPlays = 'tie';
	}

	// compare for each case and for tie, cleaner than if statements
	switch (bothPlays) {
		case 'Rock vs. Scissors' : 
		case 'Paper vs. Rock' : 
		case 'Scissors vs. Paper' :
        endRoundMessage = `You win! ${playerSelection} beats ${computerSelection}`;
		break;

		case 'tie' : 
        endRoundMessage = 'Tie, replay to continue';
		break;

		default : 
        endRoundMessage = `You lost! ${computerSelection} beats ${playerSelection}`;
		break;
	}
	view.displayResults(endRoundMessage);
	score(endRoundMessage);
}

const score = (roundResult) => {
	if (roundResult.startsWith("You win")) {
		playerScore++;
	} else if (roundResult.startsWith("You lost")) {
		computerScore++;
	} 
	view.displayScore(playerScore, computerScore);

	if (playerScore === 5 || computerScore === 5) {
		determineWinner();
		gameOver = true;
	}
};

const determineWinner = () => {
	if (playerScore === 5) {
		gameWinner = 'You are the winner!';
		view.displayWinner(gameWinner);
	} else if (computerScore === 5) {
		gameWinner = 'The computer wins the game!';
		view.displayWinner(gameWinner);
	}
	view.displayPlayAgain();
};


const view = {
	displayResults: function(endRoundmessage) {
		const resultsDiv = document.querySelector('#results');
		resultsDiv.textContent = endRoundmessage;
	},
	displayScore: function(playerScore, computerScore) {
		const playerScoreTd = document.querySelector('#your-score');
		const computerScoreTd = document.querySelector('#computer-score');
		playerScoreTd.textContent = playerScore;
		computerScoreTd.textContent = computerScore;
	},
	displayWinner: function(gameWinner) {
		const scoreBoard = document.querySelector('#scoreboard');
		const winnerDiv = document.createElement('div');
		winnerDiv.setAttribute('id', 'winner');
		winnerDiv.textContent = gameWinner;
		scoreBoard.appendChild(winnerDiv);
	},
	displayPlayAgain: function() {
		const playAgainButton = document.createElement('button');
		const scoreBoard = document.querySelector('#scoreboard');
		playAgainButton.setAttribute('id', 'play-again-button');
		playAgainButton.textContent = 'Play Again';
		scoreBoard.appendChild(playAgainButton);
		playAgainButton.addEventListener('click', restartGame);
	},
	removePlayAgain: function() {
		const playAgainButton = document.querySelector('#play-again-button');
		const scoreBoard = document.querySelector('#scoreboard');
		scoreBoard.removeChild(playAgainButton);
	},
	removeWinner: function() {
		const scoreBoard = document.querySelector('#scoreboard');
		const winnerDiv = document.querySelector('#winner');
		scoreBoard.removeChild(winnerDiv);
	}
};

const restartGame = () => {
	gameOver = false;
	playerScore = 0;
	computerScore = 0;
	gameWinner = '';

	view.displayResults('First to score 5 points wins!');
	view.displayScore(playerScore, computerScore);
	view.removeWinner();
	view.removePlayAgain();
};