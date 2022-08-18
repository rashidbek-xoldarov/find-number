'use strict';

let secretNumber = Math.floor(Math.random() * 20);
let score = 20;
let highscore = 0;
const checkBtn = document.querySelector('.check');
console.log(secretNumber);

const againBtn = document.querySelector('.again');

checkBtn.addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  const message = document.querySelector('.message');

  if (Number(guess) < 0) {
    message.innerHTML = 'Enter number greater 0';
  } else if (Number(guess) === secretNumber) {
    document.querySelector('.number').innerHTML = guess;
    message.innerHTML = 'Correct number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highscore = Number(guess);
    document.querySelector('.highscore').textContent = highscore;
    checkBtn.setAttribute('disabled', true);
  } else if (Number(guess) !== secretNumber) {
    if (score > 1) {
      message.innerHTML = `This is too ${
        Number(guess) > secretNumber ? 'high 😉' : 'low 🤦‍♂️'
      }`;
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      message.innerHTML = 'You lost game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  window.location.reload();
});
