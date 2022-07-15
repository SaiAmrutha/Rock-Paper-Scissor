const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice // let helps us to declare variables that are limited to some scope of a block statement
let computerChoice
let result

//generating user choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {   //if we want to click any of the buttons event listener will listen to the click
    userChoice = e.target.id  //displaying the events target id where ids are rock,paper,scissor
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

//generating computer choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1  // instead of 3 we can also use possibleChoices.length() which will return 3
    // +1 for getting the number values 1,2,3 instead of 0,1,2
    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    if (randomNumber === 3){
        computerChoice = 'scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'It\'s a draw!'
    }
    if (computerChoice === 'rock' && userChoice ==='paper'){
        result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissor'){
        result = 'You lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissor'){
        result = 'You win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You lost!'
    }
    if (computerChoice === 'scissor' && userChoice === 'rock'){
        result = 'You win!'
    }
    if (computerChoice === 'scissor' && userChoice === 'paper'){
        result = 'You lost!'
    }
    resultDisplay.innerHTML = result
}