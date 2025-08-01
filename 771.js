/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let maxCount = 0, JEWELS = {};
    for (let i = 0; i < jewels.length; i++) {
        JEWELS[jewels[i]] = 0;
    }
    for (let i = 0; i < stones.length; i++) {
        JEWELS[stones[i]] = JEWELS[stones[i]] + 1;
    }
    for (let i = 0; i < jewels.length; i++) {
        maxCount = maxCount + JEWELS[jewels[i]];
    }
    return maxCount;
};

// Example usage:
console.log(numJewelsInStones("aA", "aAAbbbb")); // Example call to the function
console.log(numJewelsInStones("z", "ZZ"));
console.log(numJewelsInStones("abc", "aabbcc")); // Example call to the function
console.log(numJewelsInStones("xyz", "xxyyzz")); // Example call to the function
console.log(numJewelsInStones("aA", "aAAbbbb")); // Example call to the function
