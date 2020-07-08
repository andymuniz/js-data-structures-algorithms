// Two positive integers,
// Find if the two numbers have the same frequency of digits.
// Must have Time of O(N)
// My solution: O(N + M) = O(N)
function sameFrequency(number1, number2){
    let counters = {};
    let num1 = number1.toString();
    let num2 = number2.toString();

    for(let digit of num1){
        counters[digit] ? counters[digit]++ : counters[digit] = 1;
    }

    for(let digit of num2) {
        if(!counters[digit]){
            return false;
        }
        counters[digit]--;
    }
    return true;
}

module.exports = sameFrequency;