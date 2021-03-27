const ATTACK_VALUE = 14;

let choseMaxLife = 100;
let currentMonsterHealth = choseMaxLife;
let currentPlayHealth = choseMaxLife;

adjustHealthBars(choseMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', attackHandler);
