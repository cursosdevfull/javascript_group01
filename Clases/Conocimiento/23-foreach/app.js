const prices = [10.2, 32.45, 5.8, 9, 99];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach((price, idx, list) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);
