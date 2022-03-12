let computerSelection;
let playerChoice;
const weapon_img = document.querySelector('.weapon_img')
const weapon_img2 = document.querySelector('.weapon_img2')
let i = 1
let playerScore = 0
let computerScore = 0
let scoreComputer = document.querySelector('#scoreComputer')
let scorePlayer = document.querySelector('#scorePlayer')
let result = document.querySelector('#result')


function changeImage(weapon) {
    playerChoice = weapon
    computerSelection = computerPlay()
    playRound(playerChoice, computerSelection)
    console.log("Jucatorul a ales " + playerChoice)
    console.log("Computerul a ales " + computerSelection)
    if (weapon == 'rock') {
        weapon_img.src = "../Rock paper scrissors/rock.png"
    }
    if (weapon == 'paper') {
        weapon_img.src = "../Rock paper scrissors/paper.png"
    }
    if (weapon == 'scissors') {
        weapon_img.src = "../Rock paper scrissors/scissors.png"
    }
}

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3) + 1;

    if (computerSelection == 1) {
        computerSelection = "rock";
        weapon_img2.src = "../Rock paper scrissors/rock.png"
    }
    else if (computerSelection == 2) {
        computerSelection = "paper"
        weapon_img2.src = "../Rock paper scrissors/paper.png"

    }
    else if (computerSelection == 3) {
        computerSelection = "scissors";
        weapon_img2.src = "../Rock paper scrissors/scissors.png"

    }

    return computerSelection;
}



function playRound(playerChoice, computerSelection) {


    if (playerChoice == computerSelection) {
        console.log("Tie")
        result.textContent = "Tie"

    }
    if (playerChoice == "rock" && playerChoice != computerSelection) {
        if (computerSelection == "paper") {
            console.log("Computer Won!")
            computerScore++;
            scoreComputer.textContent = computerScore
            result.textContent = "Computer Won"
        }

        if (computerSelection == "scissors") {
            console.log("Player Won!")
            playerScore++
            scorePlayer.textContent = playerScore
            result.textContent = 'Player Won'

        }


    }
    if (playerChoice == "paper" && playerChoice != computerSelection) {
        if (computerSelection == "scissors") {
            console.log("Computer Won!")
            computerScore++;
            scoreComputer.textContent = computerScore
            result.textContent = "Computer Won"
        }

        if (computerSelection == "rock") {
            console.log("Player Won!")
            playerScore++
            scorePlayer.textContent = playerScore
            result.textContent = 'Player Won'

        }


    }
    if (playerChoice == "scissors" && playerChoice != computerSelection) {
        if (computerSelection == "rock") {
            console.log("Computer Won!")
            computerScore++;
            scoreComputer.textContent = computerScore
            result.textContent = "Computer Won"
        }

        if (computerSelection == "paper") {
            console.log("Player Won!")
            playerScore++
            scorePlayer.textContent = playerScore
            result.textContent = 'Player Won'

        }


    }
}
if (playerScore == 5) {
    prompt("Player Won 5 Rounds")
}
else if (computerScore == 5) {
    prompt("Computer Won 5 Rounds")
}

