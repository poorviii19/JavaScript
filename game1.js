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

    alert(`You picked ${userChoice}. Computer picked ${computer}. ${result}`);
}