const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    // throw new NotImplementedError('Not implemented');
    let min = [];
    let max = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) min.push(arr[i]);
        else max.push(arr[i]);
    }
    max.sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) result.push(min.pop());
        else result.push(max.pop());
    }
    return result;
}

module.exports = {
    sortByHeight,
};