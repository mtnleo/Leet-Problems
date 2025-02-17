/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    mass_w = '';
    volume = '';
    

    if (length >= 10000 || width >= 10000 || height >= 10000 || length * width * height >= 1000000000) {
        volume = 'Bulky';
    }
    if (mass >= 100) {
        mass_w = 'Heavy';
    }

    if (mass_w === 'Heavy' && volume === 'Bulky') {
        return 'Both';
    }
    else if (mass_w === 'Heavy' && volume === '') {
        return mass_w;
    }
    else if (mass_w === '' && volume === 'Bulky') {
        return volume;
    }
    else {
        return 'Neither';
    }
};
