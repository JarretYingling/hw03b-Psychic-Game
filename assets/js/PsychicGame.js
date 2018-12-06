// javascript

function getRandomLetter(allLetters) {
    return allLetters[getRandomInteger(0, allLetters.length)];
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function compareLetters() {
    if (chosenLetter === randomLetter) {
        matchYes();
        return;
    } 
    matchNo();
}

function matchYes() {
    winGame();
}

function matchNo() {
    if (guessedLetters.length >= guessLimit) {
        loseGame();
    };
}

function winGame() {
    wins++;
    message = "You WIN!!!";
    alert(message);
    remainingLetters = resetGame();
}

function loseGame() {
    losses++;
    message = "You LOSE!!!";
    alert(message);
    remainingLetters = resetGame();
}

function resetGame() {
    chosenLetter = "";
    guessedLetters = [];
    let allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    randomLetter = getRandomLetter(allLetters);
    return allLetters;
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

function log() {
    console.log("Chosen: " + chosenLetter);
    console.log("Random: " + randomLetter);
    console.log("Remaining: " + remainingLetters.toString());
    console.log("Guessed: " + guessedLetters.toString());
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
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

let chosenLetter = "";
let randomLetter = "";
let guessedLetters = [];
let remainingLetters = resetGame();

let guessLimit = 25;

log();

let message = "";

document.onkeyup = function (eventKeyUp) {
    guessLetter(eventKeyUp.key.toUpperCase());
};

//log();