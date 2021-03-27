const ATTACK_VALUE = 14;
const MONSTER_ATTACK_VALUE = 15;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

let choseMaxLife = 100;
let currentMonsterHealth = choseMaxLife;
let currentPlayHealth = choseMaxLife;

adjustHealthBars(choseMaxLife);

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayHealth > 0) {
    alert('Ganó');
  } else if (currentPlayHealth <= 0 && currentMonsterHealth > 0) {
    alert('Perdió');
  } else if (currentMonsterHealth <= 0 && currentPlayHealth <= 0) {
    alert('Empate');
  }
}

function attackMonsterHandler(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
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
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
