// Return number i in fibonacci sequence
// Sequence:  0, 1, 1, 2, 3, 5, 8, 13, 21,
// Example: fibonacci(0) => undefined, fibonacci(1) => 0, fibonacci(2) => 1, fibonacci(3) => 1

// fibonacci(3) = 2 == fibonacci(2) + fibonacci (1)

function fibonacci(i) {
    if (i === 0) return 0;
    if (i === 1) return 1;
    return fibonacci(i - 1) + fibonacci(i - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));
