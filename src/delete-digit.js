const { NotImplementedError } = require("../extensions/index.js");
//done
/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    // throw new NotImplementedError('Not implemented');
    let nArr = (n + "").split("");
    let result = 0;
    for (let i = 0; i < nArr.length; i++) {
        let nArrCopy = [...nArr];
        let v = nArrCopy.splice(i, 1);
        nArrCopy.join("") > result ? (result = nArrCopy.join("")) : result;
    }
    return +result;
}

module.exports = {
    deleteDigit,
};