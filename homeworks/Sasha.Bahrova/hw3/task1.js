/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {
    const newArray = [];
    function isPositive(i) {
        if (i >= 0) {
            return true;
        }
    }
    for (let i = 0; i < input.length; i++) {
        if(isNaN(input[i])){
            throw new Error('Input not a number');
        }
        if (isPositive(input[i])) {
            newArray.push(input[i]);
        }
    }
    return newArray;
}

module.exports = negativeFilter;
