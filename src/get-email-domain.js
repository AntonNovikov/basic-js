const { NotImplementedError } = require("../extensions/index.js");
// done
/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    // throw new NotImplementedError('Not implemented');

    return email.includes("@") ? email.slice(email.lastIndexOf("@") + 1) : false;
}

module.exports = {
    getEmailDomain,
};