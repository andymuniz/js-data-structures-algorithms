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

module.exports = {
    linearSearch,
    binarySearch
}