/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let setOfChar = JSON.parse(JSON.stringify(s)), lp = 0, rp = s.length - 1;
    for (let i = 0; i < s.length; i++) {
        if (lp == rp) {
            return;
        } else {
            s[rp] = setOfChar[lp]
            s[lp] = setOfChar[rp]
            lp++;
            rp--;
        }
    }
};
let s = ["h", "e", "l", "l", "o"];
reverseString(s)
console.log(s); // Output should be the reversed string