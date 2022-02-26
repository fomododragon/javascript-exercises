const add = function(number, secondNumber) {
  addition = number + secondNumber;
  return addition;
};

const subtract = function(number, secondNumber) {
  subtraction = number - secondNumber;
  return subtraction;
};

const sum = function(array) {
  let summation = 0
  for (let i = 0; i < array.length; i++) {
    summation += array[i];
  }
	return summation;
};

const multiply = function(array) {
  let multiplication = 0
  for (let i = 0; i < array.length; i++) {
    multiplication *= array[i];
  }
	return multiplication;
};

const power = function(base, exponent) {
  let exponentiation = base;
  for (let i = 1; i <= exponent; i++) {
    exponentiation *= exponent;
  }
  return exponentiation;
};

const factorial = function(integer) {
  if (integer === 0) {
    factorialisation = 1;
    return factorialisation;
  } else {
    let factorialisation = 1;
    for (let i = 1; i <= base; i++) {
      factorialisation *= i;
      return factorialisation;
    }
  }
};
	
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};