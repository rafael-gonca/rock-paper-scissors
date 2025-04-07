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

function getHumanChoice() {
    let humanChoice = prompt('Choose between rock, paper or scissors:');
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('Draw!', humanChoice, 'ties ', computerChoice, '.');
        return 'draw';
    } else if (
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper' ||
        humanChoice === 'rock' && computerChoice === 'scissors'
    ) {
        console.log('You Win!', humanChoice, 'beats', computerChoice, '.');
        return 'win';
    } else {
        console.log('You Lose!', humanChoice, 'lose to', computerChoice, '.');
        return 'lose';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {

        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        
        let result = playRound(humanSelection, computerSelection);

        console.log('Computer: ', computerSelection);
        console.log('User: ', humanSelection);

        if (result === 'win') {
            humanScore += 1
        } else if (result === 'lose') {
            computerScore += 1
        } 

        // console.log('Computer: ', computerScore);
        // console.log('User: ', humanScore);
        console.log('');
    }

    if (humanScore < computerScore) {
        console.log('You lost! The final score was: YOU', humanScore, 'X COMPUTER', computerScore)
    } else if (humanScore > computerScore) {
        console.log('You win! The final score was: YOU', humanScore, 'X COMPUTER', computerScore)
    } else {
        console.log('Draw! The final score was: YOU', humanScore, 'X COMPUTER', computerScore)
    }

}

playGame()

