function getComputerChoice() {
    let num = Math.random();
    let computerChoice = 0;
    if (num <= 0.33) {
        computerChoice = 'rock';
    } else if (num > 0.33 && num <= 0.66) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

// function getHumanChoice() {
//     let humanChoice = prompt('Choose between rock, paper or scissors:');
//     return humanChoice.toLowerCase();
// }

function playRound(humanChoice, computerChoice) {
    const divResult = document.querySelector(".result");
    if (humanChoice === computerChoice) {
        divResult.textContent = `Draw! ${humanChoice} ties ${computerChoice}.`;
        return 'draw';
    } else if (
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper' ||
        humanChoice === 'rock' && computerChoice === 'scissors'
    ) {
        divResult.textContent = `You Win! ${humanChoice} beats ${computerChoice}.`;
        return 'win';
    } else {
        divResult.textContent = `You Lose! ${humanChoice} lose to ${computerChoice}.`;
        return 'lose';
    }
}

let humanScore = 0;
let computerScore = 0;

const divButtons = document.querySelector(".buttons");

divButtons.addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON') {
        const computerSelection = getComputerChoice();
        let humanSelection = '';
        const text = e.target.textContent;
        
        switch (text) {
            case 'Rock':
                humanSelection = 'rock';
                break;
            case 'Paper':
                humanSelection = 'paper';
                break;
            case 'Scissors':
                humanSelection = 'scissors';

        };

        let result = playRound(humanSelection, computerSelection);

        if (result === 'win') {
            humanScore += 1
        } else if (result === 'lose') {
            computerScore += 1
        };

        const divCurrentResult = document.querySelector(".currentResult");
        divCurrentResult.textContent = `YOU: ${humanScore}\nCOMPUTER: ${computerScore}`;

        const divResult = document.querySelector(".result");

        if (humanScore === 5 || computerScore === 5) {
            const buttons = divButtons.querySelectorAll("button");
            buttons.forEach(button => {
                button.disabled = true;
            });

            if (humanScore == 5) {
                divResult.textContent = `Game Over, You Win!`;
                divResult.style.backgroundColor = "greenyellow";
            } else {
                divResult.textContent = `Game Over, You Lost!`;
                divResult.style.backgroundColor = "rgb(252, 85, 85)";
            };
            const resetBtn = document.createElement("button");
            resetBtn.textContent = 'Reset';
            const resetBtnClick = resetBtn.addEventListener("click", () => {
                location.reload();
            });
            const divResetBtn = document.querySelector(".resetBtn");
            divResetBtn.appendChild(resetBtn);
        };
    };
});


























// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 1; i <= 5; i++) {

//         const computerSelection = getComputerChoice();
//         const humanSelection = getHumanChoice();
        
//         let result = playRound(humanSelection, computerSelection);

//         console.log('Computer: ', computerSelection);
//         console.log('User: ', humanSelection);

//         if (result === 'win') {
//             humanScore += 1
//         } else if (result === 'lose') {
//             computerScore += 1
//         } 

//         // console.log('Computer: ', computerScore);
//         // console.log('User: ', humanScore);
//         console.log('');
//     }

//     if (humanScore < computerScore) {
//         console.log('You lost! The final score was: YOU', humanScore, 'X COMPUTER', computerScore)
//     } else if (humanScore > computerScore) {
//         console.log('You win! The final score was: YOU', humanScore, 'X COMPUTER', computerScore)
//     } else {
//         console.log('Draw! The final score was: YOU', humanScore, 'X COMPUTER', computerScore)
//     }

// }

// playGame()

