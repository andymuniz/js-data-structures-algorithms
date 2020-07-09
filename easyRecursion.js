// Write recursive solutions

/**
 * Accepts base and exponent
 * Do not worry about negative bases and exponents
 */
function power(base, exponent) {
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

/**
 * Accepts number and returns facorial
 */
function factorial(number) {
    if(number === 1) return 1;
    return number * factorial(number - 1);
}

/**
 * Accepts array and returns the product of all numbers
 */
function productOfArray(array) {
    if(array.length === 0) return 1;
    return array[0] * productOfArray(array.splice(1))
}

/**
 * Accepts a number and adds up all numbers from 0 to the number
 */
function recursiveRange(number) {
    if(number === 0) return 0;
    return number + recursiveRange(number - 1);
}

/**
 * Accepts a number and returns the nth number in fibonacci
 */
function fib(i) {
    if (i === 0) return 0;
    if (i === 1) return 1;
    return fib(i - 1) + fib(i - 2);
}

module.exports = {
    power,
    factorial,
    productOfArray,
    recursiveRange,
    fib
}