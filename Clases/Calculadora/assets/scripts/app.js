const defaultResult = 0;
let currentResult = defaultResult;

// currentResult = currentResult + 10;
currentResult = ((currentResult + 10) * 3) / 2 - 1;

// let calculationDescription = '((' + defaultResult + ' + 10) * 3) / 2 - 1';
// let calculationDescription = `((${defaultResult} + 10) * 3) / 2 - 1`;
let calculationDescription = `(
  (${defaultResult} + 10) * 3) 
  / 2 
  - 1`;

// let errorMessage = 'An error \\ ocurred!';
let errorMessage = "An error ' ocurred!";
outputResult(currentResult, errorMessage);
