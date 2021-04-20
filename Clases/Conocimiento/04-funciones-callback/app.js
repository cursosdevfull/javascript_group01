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

const showResult = (total) => alert(`El resultado de la operación es ${total}`);

sum(showResult, 10, 30, 'a', false, 40);
subtract(showResult, 10, 30, 'a', false, 40);
