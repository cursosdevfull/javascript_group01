const numbers = [1, 2, 3];
console.log(numbers);

const otherNumbers = Array(4, 6);
console.log(otherNumbers);

const oneMoreWayNumbers = Array.of(3, 9);
console.log(oneMoreWayNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);
