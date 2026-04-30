function subscribe(){
     const buttonElement = document.querySelector('.js-sub-button');

        if(buttonElement.innerText === 'Subscribe'){
            buttonElement.innerHTML = 'Subscribed';
            buttonElement.classList.add('is-subscribed');   //when the button will be clicked it will add this class to it
        }else{
            buttonElement.innerHTML = 'Subscribe';
            buttonElement.classList.remove('is-subscribed');
            //it will remove the class when it will be clicked again
        }
}

// .classList gives us control of the clas attribute
// Get score from localStorage or initialize
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();



function playGame(userChoice) {

    let computer = '';
    const randomNumber = Math.random();

    if (randomNumber < 1/3) {
        computer = 'rock';
    } else if (randomNumber < 2/3) {
        computer = 'paper';
    } else {
        computer = 'scissors';
    }

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

    // Update score
    if (result === "You win!") {
        score.wins++;
    } 
    else if (result === "You lose.") {
        score.losses++;
    } 
    else if (result === "Tie.") {
        score.ties++;
    }

    // Save to localStorage
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `
    You ${userChoice} - ${computer} Computer
    `;
}



function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
// Reset function
function resetScore() {
    score = { wins: 0, losses: 0, ties: 0 };
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
}