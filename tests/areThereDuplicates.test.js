const areThereDuplicates = require('../areThereDuplicates')

test('checks if there are any duplicates in arguments', () => {
    expect(areThereDuplicates(1,2,3)).toBe(false)
    expect(areThereDuplicates(1,2,2)).toBe(true)
    expect(areThereDuplicates('a','b','c','a')).toBe(true)
})