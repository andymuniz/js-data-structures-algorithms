const recursionChallenge = require('../recursionChallenge')
const {reverse, isPalindrome, someRecursive, flatten } = recursionChallenge;

test('reverse', () => {
    expect(reverse('awesome')).toBe('emosewa')
    expect(reverse('rithmschool')).toBe('loohcsmhtir')
})

test('should isPalindrome', () => {
    expect(isPalindrome('awesome')).toBe(false)
    expect(isPalindrome('foobar')).toBe(false)
    expect(isPalindrome('tacocat')).toBe(true)
    expect(isPalindrome('amanaplanacanalpanama')).toBe(true)
    expect(isPalindrome('amanaplanacanalpandemonium')).toBe(false)
})

function isOdd(val) {
    return val % 2 !== 0;
}
test('should someRecursive', () => {
    expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true)
    expect(someRecursive([4, 6, 8, 9], isOdd)).toBe(true)
    expect(someRecursive([4, 6, 8], isOdd)).toBe(false)
    expect(someRecursive([4, 6, 8], val => val > 10)).toBe(false)
})

test('should flatten', () => {
    expect(flatten([1,2,3,[4,5]])).toStrictEqual([1,2,3,4,5])
    expect(flatten([1,[2, [3, 4], [[5]]]])).toStrictEqual([1,2,3,4,5])
    expect(flatten([[1], [2], [3]])).toStrictEqual([1,2,3])
    expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toStrictEqual([1,2,3])
})
