'use strict';

//DOM Element Selection
const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
//messageEl.textContent = 'Hello from Javascript';

const scoreEl = document.querySelector('.score');
console.log('Score Element:', scoreEl);
//scoreEl.textContent = '50';

const numberEl = document.querySelector('.number');
//numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');
//highscoreEl.textContent = 100;

const guessEl = document.querySelector('.guess');
//guessEl.value = 12;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number:', secretNumber);

//track the current score
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized!');

//Basic Game logic
document.querySelector('.check').addEventListener('click', function () {
        //once button is clicked, this function will be executed
    console.log('Check button is clicked!');
    const guess = Number(document.querySelector('.guess').value);
    console.log('Players guessed:', guess);
    
    //check if our guess input value is empty
    if (!guess) {
        document.querySelector('.message').textContent = 'Please input a number!';
        return;
    }

    if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!';
    return; // stop here
  }

   if (guess === secretNumber) {
    console.log('User Guessed Correctly!');
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'You Win!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.body.style.backgroundColor = 'green';
  } else if (guess > secretNumber) {
    console.log('Too High!');
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent =
        'You Lost the Game, press again!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'maroon';
      document.querySelector('.message').textContent = '🎉 Game Over!';
      document.querySelector('.guess').value = '';
    }
  } else if (guess < secretNumber) {
    console.log('Too Low!');
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent =
        'You Lost the Game, press again!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'maroon';
      document.querySelector('.message').textContent = '🎉 Game Over!';
      document.querySelector('.guess').value = '';
    }
  }
});
 
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //restart message display
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  console.log('Game Reset! New Secret Number:', secretNumber);
  document.body.style.backgroundColor = '';
});