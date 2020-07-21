// Type of trees
// Similar to BST, different rules
// e.g. MaxBinaryHeap, parent is greater than left and right children values
// Unordered
// Tree always balances itself upon insertion


// We can just use an array and math for simplicity
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        if (this.values.length === 1) return this;

        this.bubbleUp();
        return this;
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx]
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    // Remove root
    // Move last element added to the root
    // Bubble root down until it finds a good spot
    extractMaximum() {
        let idx = 0;
        let oldRoot = this.values[idx];
        this.values[idx] = this.values.pop();

        while(true) {

            let element = this.values[idx];
            let leftIdx = (2*idx) + 1
            let rightIdx = (2*idx) + 2
            let left = this.values[leftIdx] || -Infinity
            let right = this.values[rightIdx] || -Infinity

            if(left > element && right > element) {
                if(left > right) {
                    let temp = left
                    this.values[leftIdx] = element;
                    this.values[idx] =temp;
                    idx = leftIdx
                }
                else {
                    let temp = right;
                    this.values[rightIdx] = element;
                    this.values[idx] = temp;
                    idx = rightIdx;
                }
            }
            else if(left > element) {
                let temp = left;
                this.values[leftIdx] = element;
                this.values[idx] =temp;
                idx = leftIdx
            }
            else if (right > element) {
                let temp = right;
                this.values[rightIdx] = element;
                this.values[idx] = temp;
                idx = rightIdx;
            }
            else {
                break;
            }
        }
        return oldRoot;
    }
}

module.exports = {
    MaxBinaryHeap
};