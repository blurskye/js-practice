//ch 5
var readline = require('readline-sync');

prompt = readline.question;

user_input = NaN;
list = []
user_input = prompt("enter a number to the list\nenter 0 to stop\n>")
while (user_input !== 0) {
    user_input = parseInt(prompt(">"))
    list.push(user_input)

}

console.log("the list is ".concat(list).concat("\n"))
console.log(`numbers divisible by 10 are ${list.filter((number) => { return number % 10 == 0 ? true : false })}`)
console.log(`${list.map((number) => { return number ** 2 })}`)

//ex 5
list = [1, 3, 4, 5, 6, 7, 8, 9]
console.log(list.reduce((accum, current) => { return accum * current }))