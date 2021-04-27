const prices = [10.2, 32.45, 5.8, 9, 99];

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log('sortedPrices', sortedPrices);

const listNames = ['Carlos', 'Marcos', 'Adriano', 'Julio', 'Pedro'];

const newListNames = listNames.sort((a, b) => {
  if (a > b) {
    return -1;
  } else {
    return 1;
  }
});

console.log('newListNames', newListNames);

const sortPersons = (a, b) => (a.username > b.username ? 1 : -1);

const personaData = [{ username: 'USUARIO 1' }, { username: 'uSUARIO 2' }];

const persons = personaData.sort((a, b) => (a.username > b.username ? 1 : -1));

personaData.sort(sortPersons);

console.log('persons', persons);
