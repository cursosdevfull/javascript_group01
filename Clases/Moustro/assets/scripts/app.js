const ATTACK_VALUE = 14;
const MONSTER_ATTACK_VALUE = 15;

let choseMaxLife = 100;
let currentMonsterHealth = choseMaxLife;
let currentPlayHealth = choseMaxLife;

adjustHealthBars(choseMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
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

attackBtn.addEventListener('click', attackHandler);
