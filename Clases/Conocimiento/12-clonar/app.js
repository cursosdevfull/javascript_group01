const newLi = document.createElement('li');
const content = document.createTextNode('Hola');
newLi.append(content);

const liFirst = document.querySelector('li:first-of-type');
const clone = liFirst.cloneNode(true);

const ul = liFirst.parentElement;
ul.append(newLi, clone);
