const removeFromArray = function() {
    args = Array.from(arguments);
    array = args.shift();
    elements = args;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            if (array[i] === elements[j]) {
                array.splice(i, 1);
                i--;
                j--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
