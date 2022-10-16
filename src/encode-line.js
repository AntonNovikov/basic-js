const { NotImplementedError } = require("../extensions/index.js");
//done
/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    // throw new NotImplementedError('Not implemented');
    let res = "";
    let score = 1;
    let arrStr = str.split("");
    arrStr.forEach((e, i) => {
        if (e == arrStr[i + 1]) {
            score++;
        } else {
            if (score > 1) {
                res += score + e;
                score = 1;
            } else {
                res += e;
                score = 1;
            }
        }
    });
    return res;
}

module.exports = {
    encodeLine,
};