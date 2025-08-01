/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let setOfChar = s, lp = 0, rp = s.length - 1;
    for (let i = 0; i < s.length; i++) {
        if(lp == rp){
            break;
        } else{

            setOfChar[rp] = s[lp]
            setOfChar[lp] = s[rp]
            lp++;
            rp--;
        }
        console.log(setOfChar)
    }
};

console.log(reverseString(["H","a","n","n","a","h"]))