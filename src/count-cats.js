const { NotImplementedError } = require('../extensions/index.js');
//done
/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// function countCats(/* matrix */) {
function countCats(backyard) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let cats = 0;
    for (let i = 0; i < backyard.length; i++) {
        const element = backyard[i];
        for (let j = 0; j < element.length; j++) {
            const el = element[j];
            if (el === "^^") { cats++ }

        }

    }
    return cats
}

module.exports = {
    countCats
};