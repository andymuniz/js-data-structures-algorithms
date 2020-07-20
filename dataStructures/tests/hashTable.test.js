const { HashTable } = require('../hashTable')

test('should HashTable', () => {
    let ht = new HashTable()
    ht.set('red', 0)
    expect(ht.get('red')).toBe(0)
    expect(ht.keys()).toStrictEqual(['red'])
    expect(ht.values()).toStrictEqual([0])
})
