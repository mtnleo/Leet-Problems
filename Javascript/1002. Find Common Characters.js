var commonChars = function(words) {
    let first = words[0].split("");
    let repeated = [];
    for(let i = 0; i < first.length; i++) {
        for(let k = 1; k < words.length; k++) {
            console.log("Words[k] -> " + words[k] + " | First[i] -> " + first[i]);
            if(!words[k].includes(first[i])) {
                break;
            }
            else if(k === words.length - 1){
                repeated.push(first[i]);
            }
            else {
                let slicePosition = words[k].indexOf(first[i]);
                words[k] = words[k].slice(0, slicePosition) + words[k].slice(slicePosition + 1);
            }
        }
    }
    return repeated;
}

console.log(commonChars(["cool","lock","cook"]));
console.log(commonChars(["bella","label","roller"]));