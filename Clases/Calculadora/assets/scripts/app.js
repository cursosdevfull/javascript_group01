const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  //currentResult = currentResult + userInput.value;
  currentResult = currentResult + parseInt(userInput.value);
  // currentResult = currentResult + parseFloat(userInput.value);
  //currentResult = currentResult + +userInput.value;
  // currentResult = currentResult.toString() + parseInt(userInput.value);
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
