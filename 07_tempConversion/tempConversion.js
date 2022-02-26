const ftoc = function(inputFahrenheit) {
  convertedCelsiusValue = (inputFahrenheit - 32) * 5 / 9;
  if (convertedCelsiusValue % 1 !== 0) {
    outputCelsius = convertedCelsiusValue.toFixed(1);
  } else {
    outputCelsius = convertedCelsiusValue;
  }
  return Number(outputCelsius);
};

const ctof = function(inputCelsius) {
  convertedFahrenheitValue = inputCelsius * 9 / 5 + 32;
  if (convertedFahrenheitValue % 1 !== 0) {
    outputFahrenheit = convertedFahrenheitValue.toFixed(1);
  } else {
    outputFahrenheit = convertedFahrenheitValue;
  }
  return Number(outputFahrenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
