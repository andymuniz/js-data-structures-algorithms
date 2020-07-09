const easyRecursion = require('../easyRecursion')
const {power, factorial, productOfArray, recursiveRange, fib} = easyRecursion

test('power', () => {
    expect(power(2,0)).toBe(1)
    expect(power(2,2)).toBe(4)
    expect(power(2,4)).toBe(16)
})

test('factorial', () => {
    expect(factorial(1)).toBe(1)
    expect(factorial(2)).toBe(2)
    expect(factorial(4)).toBe(24)
    expect(factorial(7)).toBe(5040)
})

test('productOfArray', () => {
    expect(productOfArray([1,2,3])).toBe(6)
    expect(productOfArray([1,2,3,10])).toBe(60)
})

test('recursiveRange', () => {
    expect(recursiveRange(6)).toBe(21)
    expect(recursiveRange(10)).toBe(55)
})

test('fib', () => {
    expect(fib(4)).toBe(3)
    expect(fib(10)).toBe(55)
    expect(fib(28)).toBe(317811)
    expect(fib(35)).toBe(9227465)
})

