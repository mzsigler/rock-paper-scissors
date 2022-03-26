let playerScore = 0;
let computerScore = 0; 

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissors')


const playerScoreDisplay = document.getElementById("player-score");
const computeScoreDisplay = document.getElementById("computer-score");
const results = document.getElementById('results');


playerScoreDisplay.innerText = `Player: ${playerScore}`;
computeScoreDisplay.innerText = `Computer: ${computerScore}`;
results.innerText = `Hey good job, you have ${playerScore} points and the computer has ${computerScore} points.`




function scoreChecker() {
    if (playerScore == 5) {
        results.innerText = `You win! You made it to 5 points, the computer has ${computerScore}.`;
     }
     if (computerScore == 5) {
        results.innerText = `You lost! The computer made it to 5 points and you have ${playerScore}.`;

     }
}

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
            computeScoreDisplay.innerText = `Computer ${computerScore}`;
            results.innerText = `You lose! You picked ${userChoice} and the computer picked ${computerChoice}!`;
            scoreChecker();
            
        }
    }

    if (userChoice == "paper") {
        if (computerChoice == "paper") {
            results.innerText = `Tie! You both picked ${userChoice}.`;

        } if (computerChoice == "scissors") {
            computerScore++;
            computeScoreDisplay.innerText = `Computer ${computerScore}`;
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
            computeScoreDisplay.innerText = `Computer ${computerScore}`;
            results.innerText = `You lose! You picked ${userChoice} and the computer picked ${computerChoice}!`;
            scoreChecker();
            
        }
    }

    
}

let computerChoice = computerPicker();

rockButton.addEventListener('click', function() {
    playRound("rock")
});

paperButton.addEventListener('click', function() {
    playRound('paper')
});

scissorButton.addEventListener('click', function() {
    playRound('scissors')
});