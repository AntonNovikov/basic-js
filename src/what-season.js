const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
// function getSeason(date) {
function getSeason(date) {
    if (!arguments.length) return "Unable to determine the time of year!";

    if (
        Object.prototype.toString.call(date) != "[object Date]" ||
        typeof date == "string" ||
        Object.getOwnPropertySymbols(date).length !== 0
    ) {
        throw new Error("Invalid date!");
    }

    let month = date.getMonth();
    if (month >= 2 && month <= 4) {
        console.log("spring");
        return "spring";
    }
    if (month >= 5 && month <= 7) {
        console.log("summer");
        return "summer";
    }
    if (month >= 8 && month <= 10) {
        console.log("autumn");
        return "autumn";
    }
    if (month == 11 || (month >= 0 && month <= 1)) {
        console.log("winter");
        return "winter";
    }
}

module.exports = {
    getSeason,
};