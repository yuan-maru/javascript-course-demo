'use strict';

console.log('Pig Game Ready!');

//game state variables
let scores, currentScore, activePlayer, playing;

// Select Player 0 (player 1)
const player0El = document.querySelector('.player--0');

// Select Player 1 (player 2)
const player1El = document.querySelector('.player--1');


// Select score 0 element
const score0El = document.querySelector('#score--0');

// Select score 1 element
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');

const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

const btnRollEl = document.querySelector('.btn--roll');

// game initialization function

const init = function () {
    //start with both players having zero total score
    scores = [0, 0];

    //set current score to 0
    currentScore = 0;

    //set active player to 0 (player 1)
    activePlayer = 0;

    playing = true;

    //reset all the display
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

  diceEl.classList.add('hidden');
};

init();


btnRollEl.addEventListener('click', function () {
    if (playing) {
        // add dice logic
        const dice = Math.trunc(Math.random() * 6) + 1;
        
        diceEl.classList.remove('hidden');

        diceEl.src = `dice-${dice}.png`

        if (dice !== 1) {
            currentScore += dice;

            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //handle rollin a 1
            currentScore = 0;

            document.getElementById(`current--${activePlayer}`).textContent = 0;
        }
    }
});