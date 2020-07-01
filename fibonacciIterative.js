// Return number i in fibonacci sequence
// Sequence:  0, 1, 1, 2, 3, 5, 8, 13, 21,
// Example: fibonacci(0) => undefined, fibonacci(1) => 0, fibonacci(2) => 1, fibonacci(3) => 1

// fibonacci(3) = 2 == fibonacci(2) + fibonacci (1)

function fibonacci(i) {
    if(i === 0) return 0;
    if(i === 1) return 1;
    let previous = [0, 1];
    let current;
    for(var j = 2; j <= i; j++){
        current = previous[0] + previous[1];
        previous = [previous[1], current];
    }
    return current;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));