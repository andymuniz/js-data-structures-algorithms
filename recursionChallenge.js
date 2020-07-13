function reverse(str) {
    if (str.length === 1) return str;
    return reverse(str.slice(1)).concat(str[0])
}

function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str[0] !== str[str.length - 1])
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
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}

/**
 * Accepts an array of arrays.
 * Returns a new array with all values flattened.
 */
function flatten(array) {
    if (array.length === 0) return [];
    let value = array[0];
    if (Array.isArray(value)) {
        return flatten(value).concat(flatten(array.slice(1)))
    }
    else {
        return [array[0]].concat(flatten(array.slice(1)))
    }
}
/**
 * Given an array of strings, capitalize the first letter of each string in array.
 */
function capitalizeFirst(array) {
    if (array.length === 0) return [];
    let str = array[0].charAt(0).toUpperCase() + array[0].substring(1);
    return [str].concat(capitalizeFirst(array.slice(1)));
}

/**
 * Return the sum of all even numbers in an object which may contain nested objects
 */
function nestedEvenSum(obj) {
    let sum = 0;
    if (typeof obj === 'number' && obj % 2 === 0) {
        sum += obj;
    }
    else if (obj && typeof obj === 'object' && obj.constructor === Object) {
        let values = Object.values(obj);
        if (values.length === 0) return 0;
        for (let value of values) {
            sum += nestedEvenSum(value);
        }
    }
    return sum;
}

function capitalizeWords(array) {
    if (array.length === 0) return [];
    let str = array[0].toUpperCase();
    return [str].concat(capitalizeWords(array.slice(1)));
}

function stringifyNumbers(obj) {
    let newObj = {};
    if (typeof obj === 'number') {
        return obj.toString();
    }
    else if (typeof obj === 'object' && !Array.isArray(obj)) {
        let keys = Object.keys(obj);
        for (let key of keys) {
            let val = obj[key];
            newObj[key] = stringifyNumbers(val);
        }
    }
    else {
        return obj;
    }
    return newObj;
}

/**
 * Accepts object.
 * Returns array of all values in the object with
 * typeof string
 */
function collectStrings(obj) {
    let stringsArr = [];
    if(Array.isArray(obj)) {
        for(let val of obj){
            stringsArr = stringsArr.concat(collectStrings(val));
        }
    }
    else if(typeof obj === 'object'){
        let values = Object.values(obj);
        for(let val of values){
            stringsArr = stringsArr.concat(collectStrings(val));
        }
    }
    else if (typeof obj === 'string') {
        stringsArr.push(obj);
    }

    return stringsArr;
}

module.exports = {
    reverse,
    isPalindrome,
    someRecursive,
    flatten,
    capitalizeFirst,
    nestedEvenSum,
    capitalizeWords,
    stringifyNumbers,
    collectStrings
}