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

module.exports = {
    bubbleSort,
    selectionSort,
    insertionSort
}