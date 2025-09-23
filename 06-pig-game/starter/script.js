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

const btnHoldEl = document.querySelector('.btn--hold');

const btnNewEl = document.querySelector('.btn--new');

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

    player0El.classList.remove('player--winner');

    player1El.classList.remove('player--winner');

    player0El.classList.add('player--active');

    player1El.classList.remove('player--active');
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
           switchPlayer();
           console.log('Active Player: ', activePlayer);

           console.log (
           'Player 0 active: ',
           player0El.classList.contains('player---active')
        );
           console.log (
           'Player 1 active: ',
           player1El.classList.contains('player---active')
        );
        }
    }
});

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    
    activePlayer = activePlayer === 0 ? 1 : 0;
    
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

btnHoldEl.addEventListener('click', function () {
    if (playing && currentScore > 0) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});

btnNewEl.addEventListener('click', init);