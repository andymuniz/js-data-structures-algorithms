// Given a sorted array and an average
// Determine if there is a pair whose average equals the target average
// Use multiple pointers approach
/**
 * Time: O(N)
 * Space: O(1)
 */
function averagePair(array, target) {
    if(array.length === 0 || array.length === 1) return false;
    let left = 0, right = array.length - 1;

    function avg(num1, num2) {
        return (num1 + num2) / 2;
    }

    while(left < right) {
        let average = avg(array[left], array[right]);
        if(average === target)
            return true;
        if(average < target){
            left++;
        }
        else {
            right--;
        }
    }
    return false;
}

module.exports = averagePair;