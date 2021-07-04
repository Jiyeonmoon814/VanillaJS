const choices = document.querySelectorAll('.choice');
const modal = document.querySelector('.modal');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const restart = document.querySelector('#restart');
const scoreboard = {
    player:0,
    computer:0
}

//play game
function play(e) {
    restart.style.display='inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
}

//Get computers choice 
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    }else if(rand<=0.67){
        return 'paper';
    } else {
        return 'scissors';
    }
}

//event listeners 
choices.forEach(choice => choice.addEventListener('click',play));