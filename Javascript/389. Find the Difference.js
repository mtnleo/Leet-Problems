
var findTheDifference = function(s, t) {
    t = t.split("");
    s = s.split("");
    for (let i = 0; i < t.length; i++) {
        sIndex = s.indexOf(t[i]);
        console.log(sIndex + " | " + s.lastIndexOf(t[i]));
        if(sIndex === -1 || t.indexOf(t[i]) !== t.lastIndexOf(t[i])) {
            return t[i];
        }
    }
    return undefined;
};


s = "a";
t = "aa";

console.log(findTheDifference(s, t));
