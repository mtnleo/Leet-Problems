/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(Number.isInteger(Math.log2(n))) {
        return true;
    }
    else {
        return false;
    }
};