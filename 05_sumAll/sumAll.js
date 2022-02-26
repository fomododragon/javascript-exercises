const sumAll = function(firstNumber, secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return 'ERROR';
    } else if ((firstNumber * secondNumber) < 0) {
        return 'ERROR';
    } else {
        if (firstNumber <= secondNumber) {
            initialNumber = firstNumber;
            finalNumber = secondNumber;
        } else {
            initialNumber = secondNumber;
            finalNumber = firstNumber;
        }
        let sum = 0;
        for(let i = initialNumber; i <= finalNumber; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
