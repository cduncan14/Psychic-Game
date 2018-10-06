// Varabiles
var winstxt = document.getElementsByClassName = "wins";
var Losstxt = document.getElementsByClassName = "Loss";
var Gametxt = document.getElementsByClassName = "Game";
var Guesstxt = document.getElementsByClassName = "Guess";
var wins = 0;
var Guess = 0;
var Loss = 0;
var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


document.onkeyup = function (event) {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var userGuess = event.key.toUpperCase();
    console.log(computerGuess)
    if ((userGuess == computerChoices)) {
        if ((Guess == 6)) {
            Loss+1;
        }
        else if ((userGuess == "W")) {
            wins+1;
        }
        else if ((userGuess != computerGuess)) {
            Guess+1;
        }
    }
    console.log("Wins: " + wins + " Guesses: " + Guess + " Loss: " + Loss);
    console.log("Computer Guess: " + computerGuess + " Your Guess: " + userGuess)
};
