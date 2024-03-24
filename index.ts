#! /usr/bin/env node

// Make computer generate a random number
// Take input from user to guess the random number
// Compare computer generated random number with user input number and generate result

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 +1);
const answers = await inquirer.prompt([{
    name: "GuessedNumber",
    type: "number",
    message: "Please guess a number between 1-10: ",
}]);

if (answers.GuessedNumber===randomNumber){
    console.log("Congratulations! You have guessed the correct number");
}
else {
    console.log("Sorry, your number is incorrect");
}

