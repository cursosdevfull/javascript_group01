const sum = (resultHandler, ...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);

  let accum = 0;
  for (const number of numbers) {
    accum += validateNumber(number);
  }

  resultHandler(accum);

  return accum;
};

const subtract = (resultHandler, ...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);

  let accum = 0;
  for (const number of numbers) {
    accum -= validateNumber(number);
  }

  resultHandler(accum);

  return accum;
};

const showResult = (message, total) => alert(message, total);

sum(
  showResult.bind(this, 'El resultado de la suma es '),
  10,
  30,
  'a',
  false,
  40
);
subtract(
  showResult.bind(this, 'El resultado de la resta es '),
  10,
  30,
  'a',
  false,
  40
);
