//npm install prompt-sync command to install node modules to allow user input in terminal and for line 2 to work 
const prompt = require("prompt-sync")()

console.log("Welcome to the computer hardware quiz")

let correctAnswers = 0
const totalQuestions = 3

const question1 = prompt("What is the brain of the computer? ")
const correctAnswer1 = "CPU"

if (answer1.toUpperCase() === correctAnswer1){ //.toUpperCase() method converts lowercase input to Uppercase for optionality
    console.log("You got it correct!")
    correctAnswers++
}else{
    console.log("You got it wrong")
}

const question2 = prompt("What is better 3090ti or 4060? ")
const correctAnswer2 = "3090ti"

if (answer2.toLowerCase() === correctAnswer2){
    console.log("You got it correct!")
    correctAnswers++
}else{
    console.log("You got it wrong")
}

const question3 = prompt("What is the recommended amount of RAM in 2024? ")
const correctAnswer3 = "16GB"

if (answer3.toUpperCase() === correctAnswer3){
    console.log("You got it correct!")
    correctAnswers++
}else{
    console.log("You got it wrong...")
}

const percentage = Math.round((correctAnswers / totalQuestions) * 100)

console.log("You got ",correctAnswers,"questions correct")
console.log("You scored ",percentage.toString() + "%")//toString() method converts the numbers to strings for concatenation
