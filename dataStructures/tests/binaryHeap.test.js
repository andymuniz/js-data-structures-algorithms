const { MaxBinaryHeap } = require('../binaryHeap')

test('should MaxBinaryHeap', () => {
    let heap = new MaxBinaryHeap();
    heap.insert(41)
    heap.insert(39)
    heap.insert(33)
    heap.insert(18)
    heap.insert(27)
    heap.insert(12)
    heap.insert(38)
    expect(heap.values).toStrictEqual([41, 39, 38, 18, 27, 12, 33])
    heap.insert(55)
    expect(heap.values).toStrictEqual([55, 41, 38, 39, 27, 12, 33, 18])
    expect(heap.extractMaximum()).toBe(55)
    expect(heap.values).toStrictEqual([41, 39, 38, 18, 27, 12, 33])
})
