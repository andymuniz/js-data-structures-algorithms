const isSubsequence = require('../isSubsequence')

test('check if the characters in the first string appear as in sequence in the the second string', () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true)
    expect(isSubsequence('sing', 'sting')).toBe(true)
    expect(isSubsequence('abc', 'abracadabra')).toBe(true)
    expect(isSubsequence('abc', 'acb')).toBe(false)
})