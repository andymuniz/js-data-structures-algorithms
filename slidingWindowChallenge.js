/**
 * Finds max sum of a subarray with length of number passed.
 * Subarray must consist of consecutive elements from original array.
 * Time O(N)
 * Space O(1)
 */
function maxSubarraySum(array, num) {
    let start = 0;
    let end = num;

    if (array.length < num || array.length === 0) return null;

    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += array[i];
    }

    if (array.length === num) return sum;

    let max = sum;
    while (end < array.length) {
        sum -= array[start];
        sum += array[end];
        if (sum > max) max = sum;
        start++
        end++
    }
    return max;
}

/**
 * Accepts array of positive ints and a positive int
 * Returns the minimal length of a contiguous subarray of which the sum is greater than or equal to number passed.
 * If there isn't one, return 0
 * Time O(n)
 * Space O(1)
 */
function minSubArrayLen(array, num) {
    let minLen = Infinity;

    let left = 0;
    let right = 1;

    if (array[left] >= num || array[right] >= num) return 1;

    let sum = array[left] + array[right]
    while (right < array.length) {
        if (sum >= num) {
            minLen = Math.min(minLen, right - left + 1)
            sum -= array[left];
            left++
        }
        else {
            right++
            sum += array[right]
        }
    }

    if (minLen === Infinity)
        return 0;
    else
        return minLen;
}

/**
 * Accepts string and returns the length of the longest
 * substring with all distinct characters.
 * Time O(n)
 */
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for(let i = 0; i <str.length; i++){
        let char = str[i]
        if(seen[char]){
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}

module.exports = {
    maxSubarraySum,
    minSubArrayLen,
    findLongestSubstring
}