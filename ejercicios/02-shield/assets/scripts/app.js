const ATTACK_VALUE = 14;
const MONSTER_ATTACK_VALUE = 15;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt(
  'Ingrese el máximo de vida para el jugador y para mounstro',
  '100'
);

let choseMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(choseMaxLife) || choseMaxLife <= 0) {
  choseMaxLife = 100;
}

let currentMonsterHealth = choseMaxLife;
let currentPlayHealth = choseMaxLife;
let hasBonusLife = true;
let hasShield = true;

adjustHealthBars(choseMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = 'MONSTER';
      break;
    case LOG_EVENT_MONSTER_ATTACK:
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target = 'PLAYER';
      break;
    case LOG_EVENT_GAME_OVER:
      break;
    default:
      logEntry = {};
  }

  /*   if (ev === LOG_EVENT_PLAYER_ATTACK || ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (ev === LOG_EVENT_MONSTER_ATTACK || ev === LOG_EVENT_PLAYER_HEAL) {
    logEntry.target = 'PLAYER';
  } */

  battleLog.push(logEntry);
}

function reset() {
  currentPlayHealth = choseMaxLife;
  currentMonsterHealth = choseMaxLife;
  hasBonusLife = true;
  resetGame(choseMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayHealth -= playerDamage;

  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayHealth
  );

  if (currentPlayHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('Murió pero el bonus lo revivió');
  }

  if (currentMonsterHealth <= 0 && currentPlayHealth > 0) {
    alert('Ganó');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'JUGADOR GANÓ',
      currentMonsterHealth,
      currentPlayHealth
    );
  } else if (currentPlayHealth <= 0 && currentMonsterHealth > 0) {
    alert('Perdió');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'JUGADOR PERDIÓ',
      currentMonsterHealth,
      currentPlayHealth
    );
  } else if (currentMonsterHealth <= 0 && currentPlayHealth <= 0) {
    alert('Empate');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'EMPATE',
      currentMonsterHealth,
      currentPlayHealth
    );
  }

  if (
    (currentMonsterHealth <= 0 && currentPlayHealth > 0) ||
    (currentPlayHealth <= 0 && currentMonsterHealth > 0) ||
    (currentMonsterHealth <= 0 && currentPlayHealth <= 0)
  ) {
    reset();
  }
}

function attackMonsterHandler(mode) {
  let maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  let logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
  /*   if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
  }
 */
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayHealth);
  endRound();
}

function attackHandler() {
  attackMonsterHandler('ATTACK');
}

function strongAttackHandler() {
  attackMonsterHandler('STRONG_ATTACK');
}

function healPlayerHandler() {
  if (currentPlayHealth <= 0 || currentMonsterHealth <= 0) {
    return;
  }
  let healValue;
  if (currentPlayHealth >= choseMaxLife - HEAL_VALUE) {
    alert('No puedes tener más cura que el máximo de vida');
    healValue = choseMaxLife - currentPlayHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayHealth
  );
  endRound();
}

function printLogHandler() {
  console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
