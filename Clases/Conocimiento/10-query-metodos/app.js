const ul = document.querySelector('ul');
// ul.innerHTML = ul.innerHTML + '<li>Item 4</li>';
ul.innerHTML += '<li>Item 4</li>';

const div = document.querySelector('div');
div.insertAdjacentHTML('afterend', 'texto');
