const dataCSV = 'sergio;40;backend\njosset;23;devops\npierina;26;frontend';

const users = dataCSV.split('\n').map((person) => {
  const [name, age, job] = person.split(';'); // ["sergio", 40, "backend"]
  return { name, age, job };
});

console.log('users', users);

// [{name: ..., age: ..., job: ...}]
