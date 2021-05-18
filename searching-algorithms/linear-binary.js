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
    while (arr[mid] !== val && start <= end) {
        if (val > mid) left = mid + 1
        else right = mid - 1
        mid = Math.floor((left + right) / 2)
    }
    return arr[mid] === val ? mid : -1
}