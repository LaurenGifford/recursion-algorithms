// Linear Searching
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i
    }
    return -1
}


// Binary Searching
// only on sorted arrays!!
// iterative
function binarySearch(arr, val) {
    let left = 0
    let right = arr.length -1
    let mid = Math.floor((left + right) / 2)
    while (arr[mid] !== val && left <= right) {
        if (val < arr[mid]) right = mid - 1
        else left = mid + 1
        mid = Math.floor((left + right) / 2)
    }
    return arr[mid] === val ? mid : -1
}

// Naive String Search
function naive(long, short) {
    let count = 0
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (long[i+j] !== short[j]) break;
            if (j === short.length -1) count++;
        }
    }
    return count
}
