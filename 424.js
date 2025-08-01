/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
    let start = 0;
    let maxCount = 0;
    let freq = {};
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        let endChar = s[end];
        freq[endChar] = (freq[endChar] || 0) + 1;
        maxCount = Math.max(maxCount, freq[endChar]);

        const windowSize = end - start + 1;
        if (windowSize - maxCount > k) {
            let startChar = s[start];
            freq[startChar]--;
            start++;
        }

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
characterReplacement("AAABBBAACBBBAXBB", 4); // Example call to the function