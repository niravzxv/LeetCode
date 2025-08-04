/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const sumArr = [];
    let currentSum = 0;
    for (let j = 0; j < nums.length; j++) {
        currentSum += nums[j];
        sumArr.push(currentSum)
    }
    return sumArr;
};

console.log(runningSum([3, 1, 2, 10, 1]));