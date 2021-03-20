const defaultResult = 0;
let currentResult = defaultResult;
currentResult = ((currentResult + 10) * 3) / 2 - 1;

function add(num1, num2) {
  const result = num1 + num2;
  alert('Result ' + result);
}

add(10, 20);
add(5, 3);

let calculationDescription = `((${defaultResult} + 10) * 3) / 2 - 1`;
outputResult(currentResult, calculationDescription);
