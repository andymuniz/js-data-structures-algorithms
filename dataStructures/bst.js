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
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true) {
            if(val === current.value) return undefined;
            if(val < current.value) {
                if(!current.left) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            }
            else if (val > current.value) {
                if(!current.right) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    find(val) {
        if(!this.root) return undefined;
        let current = this.root,
            found = false;
        while(current && !found) {
            if(val < current.value){
                current = current.left;
            }
            else if (val > current.value) {
                current = current.right;
            }
            else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
}

module.exports = BinarySearchTree;