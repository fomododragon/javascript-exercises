const { reverse } = require("lodash");

const palindromes = function (string) {
    capString = string.toUpperCase();
    for (i = 0; i < capString.length; i++) {
        //remove characters outside A - Z
        if (capString.charCodeAt(i) < 65 || capString.charCodeAt(i) > 90) {
            capString = capString.replace(capString.charAt(i), "");
            i--;
        }
    }    
    array = capString.split('');
    reverseArray = array.reverse();
    for (j = 0; j < array.length; j++) {
        if (array[j] !== array.reverse()[j]) {
        break;
        }
    }
    if (j === array.length) {
    return true;
    } else {
    return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
