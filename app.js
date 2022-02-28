function getUserInput() {
    let userInput = prompt("Rock, Paper, or Scissors?");
    let choice = userInput.toLowerCase();
    return choice;
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
