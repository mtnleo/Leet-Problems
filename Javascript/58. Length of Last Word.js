/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    let counter = 0;
    let prevLetter = false;
    for (let i = s.length-1; i >= 0; i--) {
        
        if(s[i] !== " ") {
            counter++;
            prevLetter = true;
        }
        else if(prevLetter && s[i] === " ") {
            return counter;
        }
            
    }
    return counter;
};