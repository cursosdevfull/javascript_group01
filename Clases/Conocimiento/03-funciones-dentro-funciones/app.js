const sum = (...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);

  let accum = 0;
  for (const number of numbers) {
    accum += validateNumber(number);
  }

  return accum;
};

console.log(sum(10, 30, 'a', false, 40));
