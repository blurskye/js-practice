// //chapter 5
function driving_age() {
    age = parseInt(prompt("what is your age?"))
    if (age >= 18) {
        alert("you can drive car")
    } else {
        alert("you cant drive a car")
        console.error("cant drive lol, underage")
    }
}
driving_age()

try_again = confirm("would you like to try again?\n y for yes, any key for no")
if (try_again) {
    driving_age()
}

color = prompt("enter color")
document.body.style.background = color;

window.location.href = "https://www.google.com/"