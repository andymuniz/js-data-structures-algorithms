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

test('should someRecursive', () => {

})

test('should flatten', () => {

})
