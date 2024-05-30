/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xCharArray = (x.toString()).split("");
    return xCharArray.toString() === (xCharArray.reverse().toString());
};