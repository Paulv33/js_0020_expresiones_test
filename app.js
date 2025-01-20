// mathExpressions.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
if (b === 0){
throw new Error;
}
 return a / b;
}

function modulus(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function squareRoot(a) {
 return Math.sqrt(a)
}

function cube(a) {
  return a ** 3;
}

function absolute(a) {
  return Math.abs(a);
}

function sine(degrees) {
  const radians = degrees *(Math.PI / 180);
  return Math.sin(radians);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  exponent,
  squareRoot,
  cube,
  absolute,
  sine
};
