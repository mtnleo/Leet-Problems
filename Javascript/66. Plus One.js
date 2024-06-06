/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digitsLength = digits.length
    for (let i = digitsLength - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        }
        else {
            digits[i] += 1;
            break;
        }
    }
    if (digits[0] === 0) {
        digits.splice(0, 0, 1);
    }
    return digits;
};