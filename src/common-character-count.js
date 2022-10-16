const { NotImplementedError } = require("../extensions/index.js");
//done
/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    // throw new NotImplementedError('Not implemented');

    let s1Copy = s1.split(""),
        s2Copy = s2.split("");
    let result = 0;
    s1Copy.forEach((element) => {
        if (s2Copy.includes(element)) {
            result++;
            s2Copy.splice(s2Copy.indexOf(element), 1);
            console.log(s2Copy);
        }
    });
    return result;
}

module.exports = {
    getCommonCharacterCount,
};