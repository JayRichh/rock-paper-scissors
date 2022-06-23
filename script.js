'use strict'

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper.";
        } else {
            return "You win! Paper beats rock.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors.";
        } else {
            return "You win! Scissors beats paper.";
        }
    }
}

function game() {
    let playerSelection = prompt("Rock, paper, or scissors?");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    alert(result);
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    while (playerScore < 3 && computerScore < 3) {
        round++;
        game();
        if (round % 2 === 0) {
            playerScore++;
        } else {
            computerScore++;
        }
    } if (playerScore === 3) { 
        alert("You win!");
    } else { 
        alert("You lose!");
    }   playAgain();
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
}

function playAgain() {
    let playAgain = prompt("Would you like to play again? (y/n)");
    if (playAgain === "y") {
        reset();
        playGame();
    } else {
        alert("Thanks for playing!");
    }
}

document.addEventListener('DOMContentLoaded', playGame() ( playAgain() ));