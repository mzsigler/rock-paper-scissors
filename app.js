// Instantiate scores. 

let playerScore = 0;
let computerScore = 0; 

// Grab my buttons and store them in a const. 

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissors')
const resetButton = document.getElementById('reset-button');

// same for elements I will need to update. 

const playerScoreDisplay = document.getElementById("player-score");
const computeScoreDisplay = document.getElementById("computer-score");
const results = document.getElementById('results');

// Display my scores and the initial message. 

playerScoreDisplay.innerText = `Player: ${playerScore}`;
computeScoreDisplay.innerText = `Computer: ${computerScore}`;
results.innerText = `Click a button to play. Best out of five wins.`;

// Add event listeners to all the buttons so they work. 

rockButton.addEventListener('click', function() {
    playRound("rock")
});

paperButton.addEventListener('click', function() {
    playRound('paper')
});

scissorButton.addEventListener('click', function() {
    playRound('scissors')
});

resetButton.addEventListener('click', function() {
    reset();
});

// This resets the game if you want to manually start over. Happens automatically when someone wins 5 rounds.

function reset() {
    playerScore = 0;
    computerScore = 0; 
    computeScoreDisplay.innerText = `Computer: ${computerScore}`;
    playerScoreDisplay.innerText = `Player: ${playerScore}`;
}

// This runs after every round to see if either player has reached a score of 5. 

function scoreChecker() {
    if (playerScore == 5) {
        results.innerText = `You win! You made it to 5 points, the computer had ${computerScore}.`
        reset();
     }

     if (computerScore == 5) {
        results.innerText = `You lost! The computer made it to 5 points and you had ${playerScore}.`
        reset();
     }
}

// This generates a random number and uses that number to randomly make a choice for the computer. 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPicker() {

    let num = getRandomInt(3);

    if (num == 0) {
        return "rock"
    } if (num == 1) {
        return "paper"
    } if (num == 3) {
        return "scissors"
    }
}

// The game logic. 

function playRound(userChoice) {

    let computerChoice = computerPicker();


    if (userChoice == "rock") {
        if (computerChoice == "rock") {
            results.innerText = `Tie! You both picked ${userChoice}.`;

        } if (computerChoice == "scissors") {
            playerScore++;
            playerScoreDisplay.innerText = `Player: ${playerScore}`;
            results.innerText = `You win! You picked ${userChoice} and the computer picked ${computerChoice}!`
            scoreChecker();

        } if (computerChoice == "paper") { 
            computerScore++;
            computeScoreDisplay.innerText = `Computer: ${computerScore}`;
            results.innerText = `You lose! You picked ${userChoice} and the computer picked ${computerChoice}!`;
            scoreChecker();
            
        }
    }

    if (userChoice == "paper") {
        if (computerChoice == "paper") {
            results.innerText = `Tie! You both picked ${userChoice}.`;

        } if (computerChoice == "scissors") {
            computerScore++;
            computeScoreDisplay.innerText = `Computer: ${computerScore}`;
            results.innerText = `You lose! You picked ${userChoice} and the computer picked ${computerChoice}!`;
            scoreChecker();

        } if (computerChoice == "rock") { 
            playerScore++;
            playerScoreDisplay.innerText = `Player: ${playerScore}`;
            results.innerText = `You win! You picked ${userChoice} and the computer picked ${computerChoice}!`
            scoreChecker();
            
        }
    }

    if (userChoice == "scissors") {
        if (computerChoice == "scissors") {
            results.innerText = `Tie! You both picked ${userChoice}.`;

        } if (computerChoice == "paper") {
            playerScore++;
            playerScoreDisplay.innerText = `Player: ${playerScore}`;
            results.innerText = `You win! You picked ${userChoice} and the computer picked ${computerChoice}!`
            scoreChecker();

        } if (computerChoice == "rock") { 
            computerScore++;
            computeScoreDisplay.innerText = `Computer: ${computerScore}`;
            results.innerText = `You lose! You picked ${userChoice} and the computer picked ${computerChoice}!`;
            scoreChecker();
            
        }
    }

    
}



