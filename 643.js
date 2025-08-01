/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    for(let i = 0; i < k; i++){
        sum += nums[i];
    }
    let avarage = 0, maxSum = sum;
    for(let i = k; i < nums.length; i++){
        sum = (sum - nums[i-k]) + nums[i];
        maxSum = Math.max(sum, maxSum)
    }
    avarage = ((maxSum * 1.0) / k);
    return avarage;
};