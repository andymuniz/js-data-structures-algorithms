const { SinglyLinkedList } = require('../linkedList')

test('should SinglyLinkedList', () => {
    let list = new SinglyLinkedList();
    expect(list.pop()).toBe(undefined);
    list.push(1);
    expect(list.length).toBe(1);
    list.push(2);
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.tail.value).toBe(2);
    expect(list.tail.next).toBe(null);
    expect(list.push(3)).toBe(list);
    expect(list.length).toBe(3)
    expect(list.pop().value).toBe(3)
    expect(list.length).toBe(2);
    expect(list.tail.value).toBe(2);
    expect(list.tail.next).toBe(null);
    expect(list.shift().value).toBe(1);
    expect(list.shift().value).toBe(2)
    expect(list.shift()).toBe(undefined)
    expect(list.length).toBe(0)
    expect(list.unshift(2)).toBe(list)
    expect(list.length).toBe(1)
    expect(list.unshift(1).length).toBe(2)
    expect(list.get(0).value).toBe(1)
    expect(list.get(1).value).toBe(2)
    expect(list.get(-1)).toBe(null)
    expect(list.get(2)).toBe(null)
    expect(list.set(0, 0)).toBe(true)
    expect(list.set(-1, -1)).toBe(false)
    expect(list.get(0).value).toBe(0)
    expect(list.set(0, 1)).toBe(true)
    expect(list.get(0).value).toBe(1);
    expect(list.insert(0, 0)).toBe(true)
    expect(list.get(0).value).toBe(0)
    expect(list.length).toBe(3)
    expect(list.insert(-1, -1)).toBe(false)
    expect(list.remove(1).value).toBe(1)
    expect(list.remove(-1)).toBe(undefined);
    expect(list.length).toBe(2)
    expect(list.remove(0).value).toBe(0)
    expect(list.get(0).value).toBe(2)
    expect(list.unshift(1)).toBe(list)
    expect(list.reverse()).toBe(list)
    expect(list.get(0).value).toBe(2)
    expect(list.get(1).value).toBe(1)
})
