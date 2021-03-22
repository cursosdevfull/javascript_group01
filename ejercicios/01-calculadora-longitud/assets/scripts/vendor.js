const userInput = document.getElementById('input-number');
const milesBtn = document.getElementById('btn-miles');
const footsBtn = document.getElementById('btn-foots');
const inchesBtn = document.getElementById('btn-inches');
const yardsBtn = document.getElementById('btn-yards');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
