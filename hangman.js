// dependency for inquirer npm package
var inquirer = require("inquirer");

var words = ['puppy', 'coffee', 'scissor', 'grass', 'pretzel', 'christmas', 'orchestra', 'psychology', 'javascript'];
var dashArr
var guessesLeft


// provide blank spaces to fill out
// for (var i = 0; i < word.length; i++) {
// function Word(word) {
//     this.word = word
// }
// function Letter() {

// }

function hangman(answers) {
    // console.log(answers);

    var userInput = answers.letter;
    // console.log(userInput);
    var guess = false;
    for (var i = 0; i < word.length; i++) {
        // if the user guess matches the
        // check letter against the word in array
        if (userInput === word[i]) {
            // if guess is correct replace dash with letter in the correct spot
            dashArr.splice(i, 1, userInput);
            guess = true;
        }
        // letter in the word
        // print true 

        // otherwise print false
    }
    if (guess == false) {
        guessesLeft--;
        console.log("Guesses Left: ", guessesLeft);
    }
    if (guessesLeft === 0) {
        console.log("You have lost.");
        resetGame();
    } else {

        if (!dashArr.includes("_")) {
            console.log(dashArr);
            console.log("You have won!");
            resetGame();

        } else {
            prompt();
        }

    }



    // console.log(dashArr);
    // correct guess or incorrect guess

    // var newLetter = new Letter(message.name);
    // printInfo method is run to show that the newguy object was successfully created and filled
    // newLetter.printInfo();
};
function prompt() {
    console.log(dashArr);
    inquirer.prompt([
        {
            name: "letter",
            message: "Guess a letter. "

        }
    ]).then(hangman);
}
function resetGame() {
    word = words[Math.floor(Math.random()*words.length)];
    dashArr = [];
    guessesLeft = 9;
    for (var i = 0; i < word.length; i++) {
        // console.log(word[i]);
        dashArr.push("_");
    }
    // var matchedLetters = [];
    // var guessedLetters = [];
    // var guessesLeft: 0,
    // var totalGuesses: 0,
    // var letterGuessed: null,
    prompt();
}

resetGame();





// }
