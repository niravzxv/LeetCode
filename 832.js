/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    const finalArray = [];
    for (let frag of image) {
        frag = frag.reverse();
        const tempArray = [];
        for (let elem of frag) {
            let num;
            if (elem == 0) {
                num = 1;
            } else {
                num = 0;
            }
            tempArray.push(num);
        }
        finalArray.push(tempArray);
    }
    return finalArray;
};
console.log(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]))