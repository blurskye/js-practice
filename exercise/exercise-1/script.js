//exercise 1
//random number guesser

var readline = require('readline-sync');

prompt = readline.question;

user_input = parseInt(prompt("guess the number between 100 and 1\n>"));
let random_number = (Math.ceil(Math.random() * 100));
console.log(`debugger's line, random number is ${random_number}`)

while (user_input !== random_number) {
    if (user_input > random_number) {
        console.log("your guess is a little too high\n")
    }
    else {
        console.log("your guess is a little too low")
    }
    user_input = parseInt(prompt(">"))

}
console.log("you win")