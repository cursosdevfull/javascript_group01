const ul = document.querySelector('ul');

const newLi = document.createElement('li');
newLi.textContent = 'item8';

ul.appendChild(newLi);

ul.append('Nuevo texto');

ul.prepend('Agregado al comienzo');

const newLi2 = document.createElement('li');
newLi2.textContent = 'Item 5';
ul.lastElementChild.before(newLi2);

const newLi3 = document.createElement('li');
newLi3.textContent = 'Item 6';
ul.lastElementChild.after(newLi3);

const newLi4 = document.createElement('li');
newLi4.textContent = 'Item 9';
ul.firstElementChild.replaceWith(newLi4);

const newLi5 = document.createElement('li');
newLi5.textContent = 'Item 10';

const newLi6 = document.createElement('li');
newLi6.textContent = 'Item 11';

ul.replaceChild(newLi5, newLi4);

ul.insertBefore(newLi6, ul.children[1]);
