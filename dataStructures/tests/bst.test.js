const BinarySearchTree = require('../bst')

test('should BinarySearchTree', () => {
    let tree = new BinarySearchTree();
    expect(tree instanceof BinarySearchTree).toBe(true)
    tree.insert(10)
    expect(tree.root.value).toBe(10)
    tree.insert(5)
    expect(tree.root.left.value).toBe(5)
    expect(tree.root.right).toBe(null)
    tree.insert(7)
    expect(tree.root.left.right.value).toBe(7)
    expect(tree.insert(7)).toBe(undefined)
    expect(tree.find(10).value).toBe(10)
    expect(tree.find(5).value).toBe(5)
    expect(tree.find(7).value).toBe(7)
    expect(tree.find(0)).toBe(undefined)
})
