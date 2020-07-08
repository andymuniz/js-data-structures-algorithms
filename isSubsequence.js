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

    while (i < str1.length) {
        if(j >= str2.length)
            return false;
        if (str1.charAt(i) === str2.charAt(j)) {
            i++
            j++
        }
        else {
            j++
        }
    }
    return true;
}

module.exports = isSubsequence;