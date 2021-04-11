const section = document.querySelector('section');
// section.style.backgroundColor = 'blue';
section.className = 'red_bg visible';

const button = document.querySelector('button');
button.addEventListener('click', () => {
  /*   if (section.className === 'red_bg visible') {
    section.className = 'red_bg invisible';
  } else {
    section.className = 'red_bg visible';
  } */
  /*   if (section.className === 'red_bg visible') {
    section.classList.add('invisible');
  } else {
    section.classList.remove('invisible');
  } */

  section.classList.toggle('invisible');
});
