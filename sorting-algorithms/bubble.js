// Basic example
// function bubble(arr) {
//     const swap = (arr, ind1, ind2) => {
//         [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
//     }
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i-1; j++) {
//             if (arr[j] > arr[j+1]) swap(arr, i, j+1)
//         }
//     }
//     return arr
// }

// optimized
function bubble(arr) {
    var noSwaps
    const swap = (arr, ind1, ind2) => {
        [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
    }
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, i, j+1)
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}

// swap
function swap(arr, ind1, ind2) {
    let temp = arr[ind1]
    arr[ind1] = arr[ind2]
    arr[ind2] = temp
}
