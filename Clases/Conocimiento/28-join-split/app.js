const stringNames = 'jorge;pedro;javier;luis;andrea;carla;silvia';
const listNames = stringNames.split(';');

console.log('listNames', listNames);

const listNamesInUpperCase = listNames.map((el) => el.toUpperCase());

console.log('listNamesInUpperCase', listNamesInUpperCase);

const namesWithHypens = listNamesInUpperCase.join('-');

console.log('namesWithHypens', namesWithHypens);

const dataCSV =
  'sergio;jorge;pedro;javier\nabel;cain;eva;adan\ncarmen;roxana;claudia';

// ["sergio", "jorge", "pedro", "javier"]
const total = dataCSV
  .split('\n')
  .map((el) => el.split(';'))
  .reduce((accum, el) => {
    // el.forEach((it) => accum.push(it));
    accum = accum.concat(el);
    return accum;
  }, [])
  .join('-');

console.log('total', total);

const listBooksInShoppingCart = [
  'NodeJS',
  'Javascript',
  'Angular',
  'NodeJS',
  'NestJS',
  'React',
  'Angular',
  'Vue',
  'Javascript',
  'Vue',
  'Angular',
  'Typescript',
  'Microservicios',
  'Docker',
  'Docker',
  'Kubernetes',
  'React',
  'Typescript',
];

const reportByBook = listBooksInShoppingCart.reduce((accum, el) => {
  accum.hasOwnProperty(el) ? (accum[el] += 1) : (accum[el] = 1);

  /*   if (accum.hasOwnProperty(el)) {
    accum[el] += 1;
  } else {
    accum[el] = 1;
  } */

  return accum;
}, {});

console.log('reportByBook', reportByBook);

// [{title: "NodeJS", quantity: 2 }, {title: "Docker", quantity: 2}, ...]
