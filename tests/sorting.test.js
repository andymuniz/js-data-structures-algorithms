const { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } = require('../sorting')

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

test('should insertionSort', () => {
    expect(insertionSort([0, 1, 2])).toStrictEqual([0, 1, 2])
    expect(insertionSort([1, 2, 0])).toStrictEqual([0, 1, 2])
    expect(insertionSort([37, 45, 29, 8])).toStrictEqual([8, 29, 37, 45])
    expect(insertionSort([0, 2, 34, 22, 10, 19, 17])).toStrictEqual([0, 2, 10, 17, 19, 22, 34])
})

test('should mergeSort', () => {
    expect(mergeSort([1,0])).toStrictEqual([0,1])
    expect(mergeSort([0, 1, 2])).toStrictEqual([0, 1, 2])
    expect(mergeSort([1, 2, 0])).toStrictEqual([0, 1, 2])
    expect(mergeSort([37, 45, 29, 8])).toStrictEqual([8, 29, 37, 45])
    expect(mergeSort([0, 2, 34, 22, 10, 19, 17])).toStrictEqual([0, 2, 10, 17, 19, 22, 34])
})

test('should quickSort', () => {
    expect(quickSort([1,0])).toStrictEqual([0,1])
    expect(quickSort([0, 1, 2])).toStrictEqual([0, 1, 2])
    expect(quickSort([1, 2, 0])).toStrictEqual([0, 1, 2])
    expect(quickSort([37, 45, 29, 8])).toStrictEqual([8, 29, 37, 45])
    expect(quickSort([0, 2, 34, 22, 10, 19, 17])).toStrictEqual([0, 2, 10, 17, 19, 22, 34])
})
