class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (val === current.value) return undefined;
            if (val < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            }
            else if (val > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    find(val) {
        if (!this.root) return undefined;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (val < current.value) {
                current = current.left;
            }
            else if (val > current.value) {
                current = current.right;
            }
            else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    // Use array as stack for simplicity.
    BFS() {
        let queue = [],
            data = [];

        if (!this.root) return data;

        queue.push(this.root);

        while (queue.length) {
            let node = queue.shift();
            data.push(node.value)
            if (node.left)
                queue.push(node.left)
            if (node.right)
                queue.push(node.right)
        }
        return data;
    }

    // pre-order
    DFSPreOrder() {
        let data = [];
        if (this.root === null) return data;

        function traverse(node) {
            data.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }

        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        let data = [];
        if (this.root === null) return data;

        function traverse(node) {
            if (node.left) traverse(node.left)
            data.push(node.value)
            if (node.right) traverse(node.right)
        }

        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        let data = [];
        if (this.root === null) return data;

        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }

        traverse(this.root);
        return data;
    }
}



module.exports = BinarySearchTree;