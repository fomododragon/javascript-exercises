const caesar = function(string, shift) {
    array = string.split('');
    for (let i = 0; i < string.length; i++) {
        // identify characters A - Z
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            newCharCode = string.charCodeAt(i) + shift;
            if (newCharCode < 65) {
                while (newCharCode < 65) {
                    newCharCode = newCharCode + 26;
                }
            } else if (newCharCode > 90) {
                while (newCharCode > 90) {
                    newCharCode = newCharCode - 26;
                }
            }
            newChar = String.fromCharCode(newCharCode);
            array.splice(i, 1, newChar);
        } 
        // identify characters a - z
        else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            newCharCode = string.charCodeAt(i) + shift;
            if (newCharCode < 97) {
                while (newCharCode < 97) {
                    newCharCode = newCharCode + 26;
                }
            } else if (newCharCode > 122) {
                while (newCharCode > 122) {
                    newCharCode = newCharCode - 26;
                }
            }
            newChar = String.fromCharCode(newCharCode);
            array.splice(i, 1, newChar);
        }
    }
    encodedString = array.join('');
    return encodedString;
};

// Do not edit below this line
module.exports = caesar;
