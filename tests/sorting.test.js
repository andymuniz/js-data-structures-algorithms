const { bubbleSort, selectionSort } = require('../sorting')

test('should bubbleSort', () => {
    expect(bubbleSort([0, 1, 2])).toStrictEqual([0, 1, 2])
    expect(bubbleSort([1, 2, 0])).toStrictEqual([0, 1, 2])
    expect(bubbleSort([37, 45, 29, 8])).toStrictEqual([8, 29, 37, 45])
})

test('should selectionSort', () => {
    expect(selectionSort([0, 1, 2])).toStrictEqual([0, 1, 2])
    expect(selectionSort([1, 2, 0])).toStrictEqual([0, 1, 2])
    expect(selectionSort([37, 45, 29, 8])).toStrictEqual([8, 29, 37, 45])
    expect(selectionSort([0, 2, 34, 22, 10, 19, 17])).toStrictEqual([0, 2, 10, 17, 19, 22, 34])
})
