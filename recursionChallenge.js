function reverse(str) {
    if(str.length === 1) return str;
    return reverse(str.slice(1)).concat(str[0])
}

function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str[0] !== str[str.length - 1])
        return false;
    let subArray = str.substring(1, str.length - 1);
    return isPalindrome(subArray);
}

/**
 * Accepts array and a callback
 * Returns true if a single value in the array returns true when passed to callback.
 * Otherwise returns false
 */
function isOdd(val) {
    return val % 2 !== 0;
}
function someRecursive(array, callback) {
    if(array.length === 0) return false;
    if(callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}

/**
 * Accepts an array of arrays.
 * Returns a new array with all values flattened.
 */
function flatten (array) {
    if(array.length === 0) return [];
    let value = array[0];
    if(Array.isArray(value)){
        return flatten(value).concat(flatten(array.slice(1)))
    }
    else {
        return [array[0]].concat(flatten(array.slice(1)))
    }
}

module.exports = {
    reverse,
    isPalindrome,
    someRecursive,
    flatten
}