function reverse(str) {
    if(str.length === 1) return str;
    return reverse(str.slice(1)).concat(str[0])
}

function isPalindrome(str) {

}

function someRecursive() {

}

function flatten () {

}

module.exports = {
    reverse,
    isPalindrome,
    someRecursive,
    flatten
}