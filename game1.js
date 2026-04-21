const score = {
    wins: 0,
    losses: 0,
    ties: 0
}

function playGame(userChoice) {

    let computer = '';
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computer = 'rock';
    } 
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computer = 'paper';
    } 
    else {
        computer = 'scissors';
    }

    console.log(computer);

    let result = '';

    if (userChoice === computer) {
        result = 'Tie.';
    } 
    else if (
        (userChoice === 'rock' && computer === 'scissors') ||
        (userChoice === 'paper' && computer === 'rock') ||
        (userChoice === 'scissors' && computer === 'paper')
    ) {
        result = 'You win!';
    } 
    else {
        result = 'You lose.';
    }

    if(result === "You win!"){
        score.wins = score.wins+1;
    }
    else if(result === "You loose."){
        score.losses = score.losses+1;
    }
    else if(resut === "Tie"){
        score.ties = score.ties+1;
    }

    alert(`You picked ${userChoice}. Computer picked ${computer}. ${result}
        wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}