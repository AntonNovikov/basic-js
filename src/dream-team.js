const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof members != "object") {
        return false;
    }
    if (!members) {
        return false;
    }
    let isArray = !Array.isArray(members);
    if (isArray) {
        return false;
    }
    let arrStr = [];
    for (const i of members) {
        if (typeof i === "string") {
            arrStr.push(i);
        }
    }

    let arrFirst = [];
    for (let i of arrStr) {
        i = i.trim();
        i = i.substring(0, 1);
        i = i.toUpperCase();
        arrFirst.push(i);
    }

    // arrFirst = [...new Set(arrFirst)];

    arrFirst.sort((a, b) => a.localeCompare(b));
    arrFirst = arrFirst.join("");

    return arrFirst;
}

module.exports = {
    createDreamTeam,
};