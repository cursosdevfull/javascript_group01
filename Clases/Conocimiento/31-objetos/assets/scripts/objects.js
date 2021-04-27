let person = {
  name: 'Sergio',
  'name and lastname': 'Sergio Hidalgo',
  age: 30,
  hobbies: ['cocinar', 'estudiar', 'cultivar'],
  greet: function () {
    alert('hola');
  },
  21: 'juego de cartas',
};

console.log(person);

delete person.age;

person.isAdmin = true;

console.log(person);

console.log(person['name and lastname']);

const keyRoles = 'main roles';

person[keyRoles] = 'admin,auditor';

console.log(person[21]);
