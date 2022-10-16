const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    array: [],

    getLength() {
        return this.array.length;
        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    },
    // addLink(/* value */) {
    addLink(value) {
        this.array.push(String(value));
        return this;
        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    },
    removeLink(position) {
        if (
            typeof position !== "number" ||
            position % 1 !== 0 ||
            !this.array[position - 1]
        ) {
            this.array.length = 0;
            throw new Error(`You can't remove incorrect link!`);
        } else {
            this.array.splice(position - 1, 1);
            return chainMaker;
        }
    },
    reverseChain() {
        this.array.reverse();
        return this;

        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    },
    finishChain() {
        let str = `( ${this.array.join(" )~~( ")} )`;
        this.array = [];
        return str;
        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    },
};

module.exports = {
    chainMaker,
};