/* const numbers = [1, 2, 3];
console.log(numbers);

const otherNumbers = Array(4, 6);
console.log(otherNumbers);

const oneMoreWayNumbers = Array.of(3, 9);
console.log(oneMoreWayNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems); */

/* const hobbies = ['Cocinar', 'Aprender'];
const personalData = [30, 'Sergio', { moreDetail: [] }];

const analyticsData = [
  [1, 1.6],
  [-8.2, 3.4],
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]); */

const hobbies = ['Cocinar', 'Aprender'];
hobbies.push('Ver tele');
hobbies.unshift('Jugar nintendo switch');
const hobbie = hobbies.pop();
hobbies.shift();

console.log(hobbies);
