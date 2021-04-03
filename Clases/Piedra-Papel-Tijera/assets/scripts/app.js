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

console.log(typeof startGame);
console.dir(startGame);

startBtn.addEventListener('click', game.start);
// startGame();
