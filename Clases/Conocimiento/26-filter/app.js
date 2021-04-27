const guessesParty = [
  { name: 'Javier', age: 20 },
  { name: 'Pedro', age: 45 },
  { name: 'Antonio', age: 13 },
  { name: 'Marcela', age: 87 },
  { name: 'Andrea', age: 12 },
];

const listGuessWithBeer = guessesParty.filter((person) => person.age >= 18);
console.log('listGuessWithBeer', listGuessWithBeer);

const listGuessWithSoda = guessesParty.filter(
  (person) => person.age < 18 || person.age > 80
);

console.log('listGuessWithSoda', listGuessWithSoda);

const firstListPersonToVaccum = guessesParty.filter(
  (person) => person.age >= 80
);

console.log('firstListPersonToVaccum', firstListPersonToVaccum);
