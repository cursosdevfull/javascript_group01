const hobbies = ['Cocinar', 'Aprender'];
hobbies[1] = 'Cultivar';
hobbies[5] = 'Leer';

console.log(hobbies, hobbies[4]);

hobbies.splice(1, 0, 'Buena comida');
console.log(hobbies);

const elementosEliminados = hobbies.splice(-5, 1);
console.log(elementosEliminados);
console.log(hobbies);
