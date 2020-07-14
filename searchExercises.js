function linearSearch(array, searchVal) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchVal) return i;
    }
    return -1;
}

/**
 * Assume array is sorted.
 */
function binarySearch(array, searchVal) {
    let start = 0;
    let end = array.length - 1;
    while (end >= start) {
        let pivot = Math.floor((end + start) / 2);
        if (array[pivot] === searchVal)
            return pivot;
        else if (searchVal < array[pivot])
            end = pivot - 1;
        else
            start = pivot + 1;
    }
    return -1;
}

/**
 * Naive algorithm O(m*n)
 */
function stringSearch(str, searchTerm) {
    if (searchTerm.length > str.length) return 0;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < searchTerm.length; j++) {
            if (searchTerm[j] !== str[i + j]) {
                break;
            }
            if (searchTerm.length - 1 === j) {
                count++;
            }
        }
    }
    return count;
}

/**
 * Knuth Morris Pratt (KMP) Algorithm
 * Find occurences of a substring within a string.
 *
 */
function makeLSP(pattern) {
    let lsp = [];
    lsp[0] = 0; // Base case
    for (let i = 1; i < pattern.length; i++) {
        let j = lsp[i - 1];
        while (j > 0 && pattern.charAt(i) != pattern.charAt(j)) {
            j = lsp[j - 1];
        }
        if (pattern.charAt(i) === pattern.charAt(j))
            j++;
        lsp[i] = j;
    }
    return lsp;
}

function KMPSearch(pattern, text) {
    let lsp = makeLSP(pattern);

    let j = 0;
    for(let i = 0; i < text.length; i++) {
        while( j > 0  && text.charAt(i) !== pattern.charAt(j)){
            j = lsp[j - 1]
        }
        if(text.charAt(i) == pattern.charAt(j)) {
            // Next char matched, increment position
            j++;
            if(j == pattern.length) {
                return i - (j - 1);
            }
        }
    }

    return -1;
}

module.exports = {
    linearSearch,
    binarySearch,
    stringSearch,
    KMPSearch
}