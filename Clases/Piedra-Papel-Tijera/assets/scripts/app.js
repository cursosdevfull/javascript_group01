'use strict';

function startGame() {
  console.log('Game is starting...');
}

const game = {
  title: 'Juego Piedra, Papel y Tijera',
  start: function start() {
    console.log('Game is starting...');
  },
};

startBtn.addEventListener('click', game.start);
// startGame();
