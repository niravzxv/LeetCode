/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let maxWealth = 0;
    for (let account of accounts) {
        let thisWealth = 0
        for (let money of account) {
            thisWealth += money;
        }
        maxWealth = Math.max(thisWealth, maxWealth)
    }
    return maxWealth;
};
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]])); // Output: 10
