function getUserInput() {
    let choices = ["rock", "paper", "scissors"]
    let userInput = prompt("Rock, Paper, or Scissors?");
    let choice = userInput.toLowerCase();
    
    if (choices.includes(choice)) {
        return choice
    } else {
        alert("That isn't a valid selection.")
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerGuess() {

    let num = getRandomInt(3);

    if (num == 0) {
        return "rock"
    } if (num == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound() {
    let userChoice = getUserInput();
    let compChoice = computerGuess();

    if (userChoice == "rock") {
        if (compChoice == "rock") {
            alert(`Tie! You both picked ${userChoice}`)
        } if (compChoice == "scissors") {
            alert(`You win! You picked ${userChoice} and the computer picked ${compChoice}!`)
        } if (compChoice == "paper") { 
            alert(`You lose! You picked ${userChoice} and the computer picked ${compChoice}!`)
            
        }
    }

    if (userChoice == "paper") {
        if (compChoice == "paper") {
            alert(`Tie! You both picked ${userChoice}`)
        } if (compChoice == "scissors") {
            alert(`You lose! You picked ${userChoice} and the computer picked ${compChoice}!`)
        } if (compChoice == "rock") { 
            alert(`You win! You picked ${userChoice} and the computer picked ${compChoice}!`)
            
        }
    }

    if (userChoice == "scissors") {
        if (compChoice == "scissors") {
            alert(`Tie! You both picked ${userChoice}`)
        } if (compChoice == "paper") {
            alert(`You win! You picked ${userChoice} and the computer picked ${compChoice}!`)
        } if (compChoice == "rock") { 
            alert(`You lose! You picked ${userChoice} and the computer picked ${compChoice}!`)
            
        }
    }

    
}

