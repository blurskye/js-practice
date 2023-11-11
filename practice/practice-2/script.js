//qs 1
age = 18;
if (age <= 20 && age >= 10) {
    console.log("age is between 10 and 20")
}
//qs 2
switch (age) {
    case 18:
        console.log("demn legal age😜")
        break
    default:
        console.log("greater than 1 year")
        break
}
//qs 3
function divisibleByTwoAndThree(input_number) {
    if (input_number % 2 == 0 && input_number % 3 == 0) {
        return true;
    }
    return false
}
//qs 4
function divisibleByTwoOrThree(input_number) {
    if (input_number % 2 == 0 || input_number % 3 == 0) {
        return true;
    }
    return false
}

//qs 5
console.log(age >= 18 ? "you can dive" : "you cannot dice")