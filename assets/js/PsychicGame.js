// javascript

function resetGame() {
    chosenLetter = "";
    guessedLetters = [];
    const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    randomLetter = getRandomLetter(LETTERS);
    updateGameState();
    return LETTERS;
}

function getRandomLetter(paramLetters) {
    return paramLetters[getRandomInteger(0, paramLetters.length)];
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function updateGameState() {
    pWins.textContent = "Wins: " + wins;
    pLosses.textContent = "Losses: " + losses;
    let guessesRemaining = guessLimit - guessedLetters.length;
    pRemaining.textContent = "Guesses Remaining: " + guessesRemaining;
    pGuesses.textContent = "Current Guesses: " + guessedLetters.toString();
}

function guessLetter(paramKey) {
    for (let i = 0; i < remainingLetters.length; i++) {
        if (remainingLetters[i] === paramKey) {
            chosenLetter = remainingLetters.splice(i, 1).toString();
            guessedLetters.push(chosenLetter);
            log();
            compareLetters();
            log();
            return;
        }
    }
    message = paramKey + " is NOT a remaining letter";
    alert(message);
}

function compareLetters() {
    if (chosenLetter === randomLetter) {
        wins++;
        message = "You WIN!!!\nThe letter was: " + randomLetter;
    } else if (guessedLetters.length >= guessLimit) {
        losses++;
        message = "You LOSE!!!";
    } else {
        updateGameState();
        return;
    }
    alert(message);
    remainingLetters = resetGame();
}

function log() {
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses Reamining: " + (guessLimit - guessedLetters.length));
    console.log("Current Guesses: " + guessedLetters.toString());
    console.log("Letters Remaining: " + remainingLetters.toString());
    console.log("Chosen: " + chosenLetter);
    console.log("Random: " + randomLetter);
    console.log("");
}

let pWins = document.getElementById("wins");
let pLosses = document.getElementById("losses");
let pRemaining = document.getElementById("remaining");
let pGuesses = document.getElementById("guesses");

let wins = 0;
let losses = 0;
let remaining = 0;
let guesses = 0;

let guessLimit = 10;
let chosenLetter = "";
let randomLetter = "";
let guessedLetters = [];
let remainingLetters = resetGame();

log();

document.onkeyup = function (eventKeyUp) {
    guessLetter(eventKeyUp.key.toUpperCase());
};

//log();