// Accepts variable number of arguments
// Can be numbers or characters... or more!?
// Unsorted
// solve with Time O(n)
// solve with Space O(n)
/**
 * Bonus:
 * Time: O(n log n)
 * Space: O(1)
 */

 /**
  Time: O(n)
  Space: O(n)
  */
let areThereDuplicates = function (...myArgs) {
    let cache = {};
    for(let arg of myArgs){
        if(cache[arg]) return true;
        cache[arg] = 1;
    }
    return false;
}

areThereDuplicates = function(...myArgs) {
    if(myArgs.length === 0 || myArgs.length === 1)
        return false;
    // 1. Sort array first O(n log n)
    myArgs = myArgs.sort();
    // 2. Multiple Pointers Solution O(n)
    let i = 0;
    for(let j = 1; j < myArgs.length; j++){
        if(myArgs[i] == myArgs[j]){
            return true;
        }
        i++;
    }
    return false;
}

// Another solution for O(n log n) would be to just do a search for each element across remaining elements in unsorted
// That would be O(n log n);

module.exports = areThereDuplicates;

areThereDuplicates(1,2,2)