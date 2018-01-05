// dependency for inquirer npm package
var inquirer = require("inquirer");

var word = "coffee";
var dashArr = [];
for (var i = 0; i < word.length; i++) {
    console.log(word[i]);
    dashArr.push("_");
}

console.log(dashArr);
// provide blank spaces to fill out
// for (var i = 0; i < word.length; i++) {
    inquirer.prompt([
    {
        name: "letter",
        message: "Guess a letter. " + dashArr.join(" ") + " "

    }
]).then(function (answers) {
    // console.log(answers);

    var userInput = answers.letter;
    // console.log(userInput);

    for (var i = 0; i < word.length; i++) {
        // if the user guess matches the
        // check letter against the word in array
        if (userInput === word[i]) {
            // if guess is correct replace dash with letter in the correct spot
            dashArr.splice(i, 1, userInput);
            console.log(true, word[i]);
        } else {
            console.log(false, word[i]);
        }
        // letter in the word
        // print true 

        // otherwise print false
    }
    console.log(dashArr);
    // correct guess or incorrect guess

    // var newLetter = new Letter(message.name);
    // printInfo method is run to show that the newguy object was successfully created and filled
    // newLetter.printInfo();
});


