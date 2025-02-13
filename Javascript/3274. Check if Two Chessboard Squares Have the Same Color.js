/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
    const blackOnEvenRegex = /[bdfh]/;
        const c1_blackOnEven = blackOnEvenRegex.test(coordinate1);
        const c2_blackOnEven = blackOnEvenRegex.test(coordinate2);

        let c1_black = false;
        let c2_black = false;

        if(c1_blackOnEven && Number(coordinate1.at(1)) % 2 == 0) {
            c1_black = true;
        }
        else if (!c1_blackOnEven && Number(coordinate1.at(1)) % 2 != 0) {
            c1_black = true;
        }
        else {
            c1_black = false;
        }

        if(c2_blackOnEven && Number(coordinate2.at(1)) % 2 == 0) {
            c2_black = true;
        } else if (!c2_blackOnEven && Number(coordinate2.at(1)) % 2 != 0) {
            c2_black = true;
        }
        else {
            c2_black = false;
        }

        if ((c2_black && c1_black) || (!c2_black && !c1_black)) {
            return true;
        }
        else {
            return false;
        }
        

};
