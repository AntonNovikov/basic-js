const { NotImplementedError } = require("../extensions/index.js");
//done
/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
// function calculateHanoi(/* disksNumber, turnsSpeed */) {
function calculateHanoi(disksNumber, turnsSpeed) {
    // throw new NotImplementedError('Not implemented');

    let turns = 2 ** disksNumber - 1;
    let seconds = Math.floor((turns / turnsSpeed) * 3600);
    // remove line with error and write your code here
    return { turns: turns, seconds: seconds };
}

module.exports = {
    calculateHanoi,
};