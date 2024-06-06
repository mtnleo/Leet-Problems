var isNStraightHand = function (hand, groupSize) {
    hand = hand.sort();
    console.log(hand);
    let counter = 0;
    let output = false;
    let handLength = hand.length;
    console.log("HandLegth -> " + handLength);
    if (handLength >= 3) {
        for (let i = 0; i < handLength; i++) {
            if (i === 0 || hand[i] !== hand[i - 1]) {
                let k = i + 1;
                let current = hand[i];
                while (k < handLength) {
                    if (current + 1 === hand[k] || current === hand[k]) {
                        current = hand[k];
                        k++;
                    } else if (current + 1 < hand[k]) {
                        break;
                    }

                    if (current === hand[i] + groupSize - 1) {
                        counter++;
                        break;
                    }
                }
            }
            console.log("Counter -> " + counter + " | Group Size -> " + groupSize);
            if (counter >= groupSize) {
                output = true;
                break;
            }

        }
    }
    console.log(counter);

    return output;
};

console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3));
console.log(isNStraightHand([1,2,3], 1));