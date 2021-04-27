const listNames = ['Claudia', 'Susana', 'Ariel'];

const listNamesCopy = [...listNames]; // "Claudia", "Susana", "Ariel"

listNames.push('Alfredo');

console.log(listNames, listNamesCopy);

const prices = [20, 3, 23.3, 78.3, 89.45];
const priceHighest = Math.max(...prices);
const priceLowest = Math.min(...prices);

console.log(priceHighest, priceLowest);

const namesMen = ['Carlos', 'Victor', 'Francisco'];
const namesWomen = ['Andrea', 'Claudia'];

const listNamesSorted = [...namesMen, ...namesWomen].sort();
const newListNamesSorted = namesMen.concat(namesWomen).sort();
console.log('listNamesSorted', listNamesSorted);
console.log('newListNamesSorted', newListNamesSorted);
