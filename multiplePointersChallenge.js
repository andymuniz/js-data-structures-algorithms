// Array is sorted, can be negative numbers
// Function should count the unique values in the array.
// Time : O(n)
// Space: O(1)
function countUniqueValues(array) {
    let i = 0;
    let j = 1;

    if (array.length === 0) return 0;
    if (array.length === 1) return 1;

    while(j < array.length) {
        if(array[i] !== array[j]){
            ++i;
            array[i] = array[j]
        }
        j++;
    }
    return i + 1;
}

module.exports = countUniqueValues;