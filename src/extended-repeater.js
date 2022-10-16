const { NotImplementedError } = require("../extensions/index.js");
//done
/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    // throw new NotImplementedError('Not implemented');
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || "+";
    let additionSeparator = options.additionSeparator || "|";
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let addition = options.addition;
    let newStr = [];

    for (let i = 0; i < repeatTimes; i++) {
        let addIt = str;
        if (addition !== undefined) {
            for (let j = 0; j < additionRepeatTimes; j++) {
                if (j + 1 < additionRepeatTimes) {
                    addIt += addition + additionSeparator;
                } else if (j + 1 == additionRepeatTimes) {
                    addIt += addition + "";
                }
            }
        }
        newStr.push(addIt);
    }

    return newStr.join(separator + "");
}

module.exports = {
    repeater,
};