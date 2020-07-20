class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])

    }

    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            for (let keyVal of this.keyMap[index]) {
                if (keyVal[0] === key) {
                    return keyVal[1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let keys = [];
        for (let pairs of this.keyMap) {
            if (pairs) {
                for (let pair of pairs) {
                    if (!keys.includes(pair[0]))
                        keys.push(pair[0])
                }
            }
        }
        return keys;
    }

    values() {
        let keys = [];
        for (let pairs of this.keyMap) {
            if (pairs) {
                for (let pair of pairs) {
                    if (!keys.includes(pair[1]))
                        keys.push(pair[1])
                }
            }
        }
        return keys;
    }
}

module.exports = {
    HashTable
}