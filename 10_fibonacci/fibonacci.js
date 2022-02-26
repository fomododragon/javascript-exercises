const fibonacci = function(ordinal) {
    ordinalNumber = Number(ordinal);
    if (ordinalNumber < 1) {
        return "OOPS";
    } else {
        let fibonacciSequence = [0, 1];
        for (let i = 1; i < ordinalNumber; i++) {
            newFibonacci = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
            fibonacciSequence.push(newFibonacci);
        }
        fibonacciNumber = fibonacciSequence[fibonacciSequence.length - 1];
    }
    return fibonacciNumber;
};

// Do not edit below this line
module.exports = fibonacci;
