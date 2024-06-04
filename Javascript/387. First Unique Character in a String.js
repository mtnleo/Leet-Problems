/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let index = -1;
    let cache = [];
    s = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (cache.indexOf(s[i]) === -1) {
            if (s.lastIndexOf(s[i]) === i) {
                index = i;
                break;
            }
        }

        cache.push(s[i]);
    }
    return index;
};


console.log(firstUniqChar("bbaaca"));