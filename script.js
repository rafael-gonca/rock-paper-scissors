function getComputerChoice() {
    let num = Math.random();
    let computerChoice = 0;
    if (num <= 0.33) {
        computerChoice = '🪨';
    } else if (num > 0.33 && num <= 0.66) {
        computerChoice = '📜';
    } else {
        computerChoice = '✂️';
    }
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    const divResult = document.querySelector(".result");
    if (humanChoice === computerChoice) {
        divResult.textContent = `Draw! ${humanChoice} ties ${computerChoice}.`;
        return 'draw';
    } else if (
        humanChoice === '📜' && computerChoice === '🪨' ||
        humanChoice === '✂️' && computerChoice === '📜' ||
        humanChoice === '🪨' && computerChoice === '✂️'
    ) {
        divResult.textContent = `Round Win! ${humanChoice} beats ${computerChoice}.`;
        return 'win';
    } else {
        divResult.textContent = `Round Lose! ${humanChoice} lose to ${computerChoice}.`;
        return 'lose';
    }
}

let humanScore = 0;
let computerScore = 0;

const divButtons = document.querySelector(".buttons");

const buttons = divButtons.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
    buttons.forEach(b => b.style.backgroundColor = 'bisque')
    button.style.backgroundColor = 'rgb(212, 169, 117)';
    })
})

divButtons.addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON') {
        const computerSelection = getComputerChoice();
        let humanSelection = '';
        const text = e.target.textContent;
        
        switch (text) {
            case '🪨':
                humanSelection = '🪨';
                break;
            case '📜':
                humanSelection = '📜';
                break;
            case '✂️':
                humanSelection = '✂️';

        };

        let result = playRound(humanSelection, computerSelection);

        if (result === 'win') {
            humanScore += 1
        } else if (result === 'lose') {
            computerScore += 1
        };

        const divCurrentResult = document.querySelector(".currentResult");
        divCurrentResult.textContent = `YOU: ${humanScore} | COMPUTER: ${computerScore}`;

        const divResult = document.querySelector(".result");

        if (humanScore === 5 || computerScore === 5) {
            const buttons = divButtons.querySelectorAll("button");
            buttons.forEach(button => {
                button.disabled = true;
            });

            if (humanScore == 5) {
                divResult.textContent = `Game Over, You Win!`;
                divResult.style.backgroundColor = "rgb(38, 156, 58)";
            } else {
                divResult.textContent = `Game Over, You Lost!`;
                divResult.style.backgroundColor = "rgb(252, 85, 85)";
            };
            const resetBtn = document.createElement("button");
            resetBtn.classList.add('reset')
            resetBtn.textContent = 'Play Again';
            const resetBtnClick = resetBtn.addEventListener("click", () => {
                location.reload();
            });
            const divResetBtn = document.querySelector(".resetBtn");
            divResetBtn.appendChild(resetBtn);

            
        };
    };
});

