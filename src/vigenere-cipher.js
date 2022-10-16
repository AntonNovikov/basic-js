const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type;
        this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    encrypt(text, key) {
        if (!text || !key || typeof text !== "string" || typeof key !== "string")
            throw new Error("Incorrect arguments!");
        let m = text.toUpperCase().split(" ").join("");
        let k = key.toUpperCase();
        let res = "";
        let result = "";
        for (; m.length > k.length;) k += k;

        for (let i = 0; i < m.length; i++) {
            let newAbc = [...this.abc].slice("");
            let codeAbc = newAbc
                .concat(newAbc.splice(0, newAbc.indexOf(k[i])))
                .join("");

            if (this.abc.includes(m[i])) res += codeAbc[this.abc.indexOf(m[i])];
            else res += m[i];
        }

        let revM = res.split("").reverse();

        for (let i = 0; i < text.length; i++) {
            if (text[i] != " ") result += revM.pop();
            else result += " ";
        }

        if (this.type) {
            console.log(result);
            return result;
        } else {
            console.log(result.split("").reverse().join(""));
            return result.split("").reverse().join("");
        }
    }
    decrypt(text, key) {
        if (!text || !key || typeof text !== "string" || typeof key !== "string")
            throw new Error("Incorrect arguments!");
        let m = text.toUpperCase().split(" ").join(""),
            k = key.toUpperCase(),
            res = "",
            result = "";
        for (; m.length > k.length;) k += k;

        for (let i = 0; i < m.length; i++) {
            let newAbc = [...this.abc].slice("");
            let codeAbc = newAbc
                .concat(newAbc.splice(0, newAbc.indexOf(k[i])))
                .join("");
            if (this.abc.includes(m[i])) res += this.abc[codeAbc.indexOf(m[i])];
            else res += m[i];
        }

        let revM = res.split("").reverse();

        for (let i = 0; i < text.length; i++) {
            if (text[i] != " ") result += revM.pop();
            else result += " ";
        }

        if (this.type) {
            console.log(result);
            return result;
        } else {
            console.log(result.split("").reverse().join(""));
            return result.split("").reverse().join("");
        }
    }
}

module.exports = {
    VigenereCipheringMachine,
};