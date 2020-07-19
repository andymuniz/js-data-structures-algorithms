function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

/**
 * TIME: AVG: O(N^2) BEST: O(N)
 */
function bubbleSort(array) {
    for (let i = array.length; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return array;
}


// TIME O(N^2)
// Only advantage is if we cared about how many swaps we make. Unlikely.
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        if (i != minIdx)
            swap(arr, i, minIdx);
    }
    return arr;
}

// TIME Worst - O(N^2)
//      Average - O(N^2)
//      Best - O(N)
//      Good with nearly sorted data.
//      Works with streams.
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr
}

// Divide and Conquer
// Recursive
// Sort ascending
// Test [3,2,1]
// [3] [2, 1]
// [3] [2] [1]
// Time O(n log n)
// Space O(n)
function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr;

    // Split in half
    let mid, left, right;
    mid = Math.floor(arr.length / 2);
    left = mergeSort(arr.slice(0, mid));
    right = mergeSort(arr.slice(mid));

    return merge(left, right)
}

// merge two sorted arrays
// should not mutate parameters
// Time O(n + m)
// Space O(n + m)
function merge(arr1, arr2) {
    let newArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArray.push(arr1[i])
            i++;
        }
        else {
            newArray.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        newArray.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        newArray.push(arr2[j])
        j++;
    }
    return newArray;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = partition(arr, left, right)
        quickSort(arr, left, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, right)
    }
    return arr;
}

// Given an array, should pick a pivot and rearrange elements in the array so that all elements less than
// pivot are moved to the left of pivot and greater are moved to right of pivot
// The order of elements on either side of pivot doesn't matter!
// This should do it in place. Mutate the original array.
// Should return the index of the pivot
function partition(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;

    // Swap numbers less than pivot to start;
    // loop from start to end inclusive
    for (let i = start; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

module.exports = {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    quickSort
}