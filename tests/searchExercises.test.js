const { linearSearch, binarySearch, stringSearch, KMPSearch } = require('../searchExercises')

test('should linearSearch', () => {
    expect(linearSearch([10, 15, 20, 25, 30], 15)).toBe(1)
    expect(linearSearch([9, 8 , 7, 6, 5, 4, 3, 2, 1, 0], 4)).toBe(5)
    expect(linearSearch([100], 100)).toBe(0)
    expect(linearSearch([1,2,3,4,5], 6)).toBe(-1)
    expect(linearSearch([9,8,7,6,5,4,3,2,1,0], 10)).toBe(-1)
    expect(linearSearch([100], 200)).toBe(-1)
})

test('should binarySearch', () => {
    expect(binarySearch([1,2,3,4,5], 2)).toBe(1)
    expect(binarySearch([1,2,3,4,5], 3)).toBe(2)
    expect(binarySearch([1,2,3,4,5], 5)).toBe(4)
    expect(binarySearch([1,2,3,4,5], 6)).toBe(-1)
    expect(binarySearch([5,6,10,13,14,18,30,34,35,37,40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)).toBe(2)
    expect(binarySearch([5,6,10,13,14,18,30,34,35,37,40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)).toBe(16)
    expect(binarySearch([5,6,10,13,14,18,30,34,35,37,40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)).toBe(-1)
})

test('should stringSearch', () => {
    expect(stringSearch("wowwow", "wow")).toBe(2)
    expect(stringSearch("wowwow", "ow")).toBe(2)
    expect(stringSearch("eggseggeggsegg", "egg")).toBe(4)
    expect(stringSearch("eggseggeggsegg", "eggs")).toBe(2)
    expect(stringSearch("lololololol", "lol")).toBe(5)
})

test('should KMPSearch', () => {
    expect(KMPSearch("lola", "holalolola")).toBe(6)
})
