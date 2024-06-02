/*
var WordDictionary = function() {
    constructor() {
        this.wordDict = [];
    }
};*/
class WordDictionary {
    constructor() {
        this.wordDict = [];
    }
}

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    (this.wordDict).push(word);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    let exists = false;
    (this.wordDict).forEach((item) => {
        if (!exists) {
            if (item.at(0) === word.at(0) || word.at(0) === ".") {
                
                let wordLength = word.length;   
                let itemLength = item.length;
                if (itemLength === wordLength) {
                    let i = 0;
                    while (i < itemLength) {
                        if (word.at(i) !== item.at(i) && word.at(i) !== "." && item.at(i) !== undefined) {
                            break;
                        }
                        i++;
                    }
                    if (i === itemLength) {
                        exists = true;
                    }
                }
            }
            
        }
        else {
                return true;
            }

    })
    return exists;
};
/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
let WD = new WordDictionary();
WD.addWord("A");
WD.addWord("4");
WD.addWord("G");
WD.addWord("w");
WD.addWord("q");
WD.addWord("1");
WD.addWord("i");
WD.addWord("rts");
WD.addWord("Afsdf");
WD.addWord("cxbA");
WD.search('ewwq')