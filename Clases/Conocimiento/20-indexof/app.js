const testResults = [1, 2.2, 1.5, 8.99, 3];
const storedResults = testResults.concat([3, 5]);

testResults.push(6.56);

console.log(storedResults, testResults);
console.log(testResults.indexOf(1.5));
