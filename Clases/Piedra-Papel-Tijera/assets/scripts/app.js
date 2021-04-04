'use strict';

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WIN';
const RESULT_COMPUTER_WIN = 'COMPUTER_WIN';

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

const getComputerChoice = function () {
  const randomValue = Math.random();

  return randomValue < 0.34 ? ROCK : randomValue < 0.67 ? PAPER : SCISSOR;
};

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (pChoice === ROCK && cChoice === SCISSOR) ||
    (pChoice === PAPER && cChoice === ROCK) ||
    (pChoice === SCISSOR && cChoice === PAPER)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

let gameIsRunning = false;

startBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log('Game is starting');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log('player', playerChoice);
  console.log('computer', computerChoice);
  console.log(winner);
  gameIsRunning = false;
});
