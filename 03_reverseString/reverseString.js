const reverseString = function(string) {
    let newString = "";
    for (let i = 1 ; i <= string.length; i++) {
        index = string.length - i;
        character = string.charAt(index);
        newString = newString.concat(character);
    }
    return string = newString;
};

// Do not edit below this line
module.exports = reverseString;
