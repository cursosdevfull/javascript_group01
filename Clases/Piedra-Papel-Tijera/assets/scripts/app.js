'use strict';

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WIN';
const RESULT_COMPUTER_WIN = 'COMPUTER_WIN';

/* const sum = function (a, b) {
  return a + b;
};

const sum2 = (a, b) => a + b; */

const getPlayerChoice = () => {
  const selection = prompt(
    `Elija ${ROCK}, ${PAPER} o ${SCISSOR}`
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(
      `La selección es solo ${ROCK}, ${PAPER} o ${SCISSOR}. Hemos escogido ${DEFAULT_USER_CHOICE} por usted`
    );

    // return DEFAULT_USER_CHOICE;
    return;
  }

  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  return randomValue < 0.34 ? ROCK : randomValue < 0.67 ? PAPER : SCISSOR;
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (pChoice === ROCK && cChoice === SCISSOR) ||
      (pChoice === PAPER && cChoice === ROCK) ||
      (pChoice === SCISSOR && cChoice === PAPER)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN;

let gameIsRunning = false;

startBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log('Game is starting');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;

  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `Su elección: ${
    playerChoice || DEFAULT_USER_CHOICE
  }, la elección de la computadora: ${computerChoice}.\nResultado = `;

  if (winner === RESULT_DRAW) {
    message += 'Empate';
  } else if (winner === RESULT_PLAYER_WIN) {
    message += 'Usted ganó';
  } else {
    message += 'La computadora ganó';
  }

  alert(message);
  gameIsRunning = false;
});
