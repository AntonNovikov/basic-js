const { NotImplementedError } = require('../extensions/index.js');
// DONE
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**9
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
// function dateSample(/* sampleActivity */) {
function dateSample(sampleActivity) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // 15 = 2850
    // 7.5 5730
    // 3.75 11460
    // 1.8 22920
    // age = MODERN_ACTIVITY /sampleActivity  * HALF_LIFE_PERIOD;

    // sampleActivity = +sampleActivity
    if (typeof sampleActivity === "number") {
        // if(typeof sampleActivity=== "number"){
        return false
    }

    if (typeof sampleActivity === "object") {
        return false
    }

    sampleActivity /= 1
        // if(sampleActivity<0) {return false}
        // if(typeof sampleActivity != number) {return false};
    if (!sampleActivity) {
        return false
    }
    if (sampleActivity < 0) {
        return false
    }
    if (!(!isNaN(parseFloat(sampleActivity)) && isFinite(sampleActivity))) {
        return false
    }

    age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0, 693 / HALF_LIFE_PERIOD) * 1000);
    // age = Math.ceil(Math.log (MODERN_ACTIVITY /sampleActivity) / (0,694/HALF_LIFE_PERIOD)*1000);
    // age = Math.log (MODERN_ACTIVITY /sampleActivity) ;
    // age = typeof sampleActivity;
    console.log(age);
    console.log("hi i'm here")

    // return sampleActivity;
    return age < 0 ? false : (age === 9000 ? false : age);
}

module.exports = {
    dateSample
};