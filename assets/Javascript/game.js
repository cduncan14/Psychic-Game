//Variables
// var winstxt = document.getElementsByid = "Wins";
// var Losstxt = document.getElementsByid = "Loss";
// var Gametxt = document.getElementsByid = "Game";
// var Guesstxt = document.getElementsByid = "Guess";
var wins = 0;
var Guess = 0;
var Loss = 0;
var compGuess = 1;
var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var guessesSoFar = [];
var Games = 0;

function getNewCG() {
    this.compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    this.guessesSoFar = [];
    console.log("try");
}

getNewCG();

document.onkeyup = function (event) {
    
    //if(Guess == 1) {
    //   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //}

    var userGuess = event.key.toUpperCase();
    //console.log(computerGuess)
    if ((isNaN(userGuess) == true)) {
        if ((Guess == 9)) {
            Loss = Loss+1;
            Guess = 0;
            getNewCG();
            Games = Games+1;
        }
        else if ((userGuess == compGuess)) {
            wins = wins+1;
            Guess = 0;
            getNewCG();
            Games = Games+1;
        }
        else if ((userGuess != compGuess)) {
            Guess = Guess+1;
            guessesSoFar.push(userGuess);
        }
    console.log("Wins: " + wins + " Guesses: " + Guess + " Losses: " + Loss);
    console.log("Computer Guess: " + compGuess + " Your Guess: " + userGuess);
    console.log("Guesses so Far: " + guessesSoFar)
    document.getElementById("Guess").innerText = guessesSoFar;
    document.getElementById("Wins").innerText = wins;
    document.getElementById("Loss").innerText = Loss;
    document.getElementById("Game").innerText = Games;
    }
    if ((isNaN(userGuess) == false)) {
        console.log("Please Input a Letter! :)");
    } 
};
