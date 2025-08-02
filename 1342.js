/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let counter = 0;
    while (1) {
        if (num == 0) {
            return counter;
        } else {
            counter++;
            if (num % 2 == 0) {
                num = num / 2;
            } else {
                num = num - 1;
            }
        }
    }
};
console.log(numberOfSteps(123));