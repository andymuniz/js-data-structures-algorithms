// Return true if chars in first string appear in sequence in the second string
/**
 * HINT: multiple pointers
 * Requirements:
 * TIME O(N + M)
 * SPACE O(1)
 */
function isSubsequence(str1, str2) {
    if (str1.length > str2) return false;

    let i = 0;
    let j = 0;

    while (j < str2.length) {
        if (str1.charAt(i) === str2.charAt(j)) i++
        if (i === str1.length) return true;
        j++
    }
    return false;
}

module.exports = isSubsequence;