/////////////////////
/* const sum = (a, b, c, d, e) => a + b + c + d + e;

console.log(sum(5, 4, 9, 20, 25)); */

////////////////////////////////////////////////////////////////
/* const suma = (numbers) => {
  let accum = 0;
  for (const number of numbers) {
    accum += number;
  }
  return accum;
};

console.log(suma([10, 20, 30, 40])); */

////////////////////////////////////////////////////////////////
/* const sum = (...numbers) => {
  let accum = 0;
  for (const number of numbers) {
    accum += number;
  }
  return accum;
};

console.log(sum(10, 20, 30, 40, 50, 60)); */

///////////////////////////////////////
const sum = (a, b, ...numbers) => {
  let accum = a + b;
  for (const number of numbers) {
    accum += number;
  }
  return accum;
};

console.log(sum(30, 40, 50, 10, 90));

/* const subtract = (...numbers) => {
  let accum = 0;
  for (const number of numbers) {
    accum -= number;
  }
  return accum;
}; */

const subtract = function () {
  let accum = 0;
  for (const number of arguments) {
    accum -= number;
  }
  return accum;
};

console.log(subtract(40, 10, 50, 60));
