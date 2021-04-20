/* const listItemsSelected = document.querySelectorAll('li'); */
const listItemsSelected = document.getElementsByTagName('li');
console.log(listItemsSelected);
for (const listItem of listItemsSelected) {
  console.dir(listItem);
}

const h1 = document.querySelector('h1');
h1.textContent = 'Nuevo texto';
h1.style.color = 'white';
h1.style.backgroundColor = 'red';

const li = document.querySelector('li:first-of-type');
li.textContent = 'Cambiado';
