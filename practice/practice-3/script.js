marks = { "harry": 85, "zues": 76, "artemis": 89, "thor": 32 }

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log(`${marks[Object.keys(marks)[i]]}`);
}
//qs 2

for (let name in marks) {
    console.log(`${name} scored ${marks[name]} in exam`)
}


//qs 4
function mean(...numbers) {
    sum = 0
    console.log(numbers)
    for (let i = 0; i <= numbers.length - 1; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length - 1
    // console.log(sum)
}
console.log(mean(2, 3, 4, 5, 6, 7, 8))