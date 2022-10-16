const { NotImplementedError } = require('../extensions/index.js');
//done
/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    // throw new NotImplementedError('Not implemented');
    let result = {};
    domains.forEach((element) => {
        let str = '',
            strS = [];
        for (let i = element.split('.').length - 1; i >= 0; i--) {
            str += `.${element.split('.')[i]}`;
            strS.push(element.split('.')[i]);
            let r = 0;
            domains.forEach(element2 => {
                if (element2.includes([...strS].reverse().join('.'))) {
                    r++;
                }
            })
            result[str] = r;
        }
    })
    return result;

}

module.exports = {
    getDNSStats
};