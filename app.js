const player1 = {
    score: 0,
    button: document.querySelector('#btn1'),
    display: document.querySelector('#player1')
}

const player2 = {
    score: 0,
    button: document.querySelector('#btn2'),
    display: document.querySelector('#player2')
}

const welcomeDiv = document.querySelector('#welcome');
const input1 = document.querySelector('#p1Name.input');
const input2 = document.querySelector('#p2Name.input');
const playBtn = document.querySelector('#play');

const gameDiv = document.querySelector('#game');
const winScore = document.querySelector('#winningScore');
const resetBtn = document.querySelector('#reset');
const newBtn = document.querySelector('#new');

let winningScore = 3;

playBtn.addEventListener('click', () => {
    welcomeDiv.style.display = 'none';
    gameDiv.style.display = 'block';
})

winScore.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

function scoreHandler(player, opponent) {
    player.score++;
    player.display.textContent = player.score;

    if(player.score === winningScore) {
        player.button.disabled = true;
        player.display.style.color = 'green';
        opponent.button.disabled = true;
        opponent.display.style.color = 'red';
    }
}

btn1.addEventListener('click', () => {
    // player1.score++;
    // player1.display.textContent = player1.score;

    // if(player1.score === winningScore) {
    //     player1.button.disabled = true;
    //     player2.button.disabled = true;
    //     player1.display.style.color = 'green';
    //     player2.display.style.color = 'red';
    // }

    scoreHandler(player1, player2);
})

btn2.addEventListener('click', () => {
    // player2.score++;
    // player2.display.textContent = player2.score;

    // if(player2.score === winningScore) {
    //     player2.button.disabled = true;
    //     player1.button.disabled = true;
    //     player2.display.style.color = 'green';
    //     player1.display.style.color = 'red';
    // }

    scoreHandler(player2, player1);
})

resetBtn.addEventListener('click', reset); 

function reset() {
    // score1 = 0;
    // score2 = 0;
    // player1.textContent = 0;
    // player2.textContent = 0;
    // btn1.disabled = false;
    // btn2.disabled = false;
    // player1.style.color = 'black';
    // player2.style.color = 'black';

    for(player of [player1, player2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.button.disabled = false;
        player.display.style.color = 'black';
    }
}

newBtn.addEventListener('click', () => {
    welcomeDiv.style.display = 'block';
    gameDiv.style.display = 'none';
    input1.value="";
    input2.value="";
    reset()
})