/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const ransomeNoteArray = ransomNote.split('');
    const magazineArray = magazine.split('');
    const hashmap = {};
    for (let i = 0; i < magazineArray.length; i++) {
        if(!hashmap[magazineArray[i]]) {
            hashmap[magazineArray[i]] = 1;
        } else {
            hashmap[magazineArray[i]]++;
        }
    }
    for (let i = 0; i < ransomeNoteArray.length; i++) {
        if (hashmap[ransomeNoteArray[i]]) {
            hashmap[ransomeNoteArray[i]]--;
            if (hashmap[ransomeNoteArray[i]] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

console.log(canConstruct("aa","aab"))