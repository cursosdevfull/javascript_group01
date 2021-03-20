const defaultResult = 0;
let currentResult = defaultResult;
currentResult = ((currentResult + 10) * 3) / 2 - 1;

function add(num1, num2) {
  const result = num1 + num2;
  return result;

  alert('hola a todos');
}

/* const additionalResult = add(10, 20);
currentResult = additionalResult; */
currentResult = add(10, 20);
alert('value ' + result);

let calculationDescription = `((${defaultResult} + 10) * 3) / 2 - 1`;
outputResult(currentResult, calculationDescription);
