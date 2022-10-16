const { NotImplementedError } = require("../extensions/index.js");
// done
/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        let depthCalc = 0;
        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                //depthCalc = 1;
                depthCalc = Math.max(depthCalc, this.calculateDepth(arr[i]));
            }
            depthCalc++;
        }
        return depthCalc;

        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    }
}

module.exports = {
    DepthCalculator,
};