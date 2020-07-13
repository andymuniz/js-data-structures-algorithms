const recursionChallenge = require('../recursionChallenge')
const { reverse, isPalindrome, someRecursive, flatten, capitalizeFirst, nestedEvenSum, capitalizeWords, stringifyNumbers, collectStrings } = recursionChallenge;

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
    expect(flatten([1, 2, 3, [4, 5]])).toStrictEqual([1, 2, 3, 4, 5])
    expect(flatten([1, [2, [3, 4], [[5]]]])).toStrictEqual([1, 2, 3, 4, 5])
    expect(flatten([[1], [2], [3]])).toStrictEqual([1, 2, 3])
    expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toStrictEqual([1, 2, 3])
})

test('should capitalizeFirst', () => {
    expect(capitalizeFirst(['car', 'taco', 'banana'])).toStrictEqual(['Car', 'Taco', 'Banana'])
})

test('should nestedEvenSum', () => {
    var obj1 = {
        outer: 2,
        obj: {
            inner: 2,
            otherObj: {
                superInner: 2,
                notANumber: true,
                alsoNotANumber: "yup"
            }
        }
    }

    var obj2 = {
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
        d: 1,
        e: { e: { e: 2 }, ee: 'car' }
    };

    expect(nestedEvenSum(obj1)).toBe(6)
    expect(nestedEvenSum(obj2)).toBe(10)
})

test('should capitalizeWords', () => {
    expect(capitalizeWords(['i', 'am', 'learning', 'recursion'])).toStrictEqual(['I', 'AM', 'LEARNING', 'RECURSION'])
})

test('should stringifyNumbers', () => {
    let obj = {
        num: 1,
        test: [],
        data: {
            val: 4,
            info: {
                isRight: true,
                random: 66
            }
        }
    }
    expect(stringifyNumbers(obj)).toStrictEqual(
        {
            num: "1",
            test: [],
            data: {
                val: "4",
                info: {
                    isRight: true,
                    random: "66"
                }
            }
        }
    )
})

test('should collectStrings', () => {
    const obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }

    expect(collectStrings(obj)).toStrictEqual(["foo", "bar", "baz"])
})
