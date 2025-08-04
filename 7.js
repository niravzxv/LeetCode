/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = Math.sign(x);
    const result = sign * String(Math.abs(x)).split("").reverse().join("")
    const limit = Math.pow(2,31);
    if(result <=- limit || result > limit) return 0;
    return result;
};

console.log(reverse(-123)); // 321