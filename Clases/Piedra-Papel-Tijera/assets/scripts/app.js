'use strict';

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = function () {
  const selection = prompt(
    `Elija ${ROCK}, ${PAPER} o ${SCISSOR}`
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(
      `La selección es solo ${ROCK}, ${PAPER} o ${SCISSOR}. Hemos escogido ${DEFAULT_USER_CHOICE} por usted`
    );

    return DEFAULT_USER_CHOICE;
  }

  return selection;
};

let gameIsRunning = false;

startBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log('Game is starting');
  const playerChoice = getPlayerChoice();
  console.log(playerChoice);
});
