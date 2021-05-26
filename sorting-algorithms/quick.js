
function quickSort(arr, left = 0, right = arr.length -1) {
    let pivotIdx = pivotHelper(arr, left, right)
    if (left < right) {
        quickSort(arr, left, pivotIdx-1)
        quickSort(arr, pivotIdx+1, right)
    }
    return arr
}

function pivotHelper(arr, start=0, end=arr.length-1) {
    let pivot = arr[start]
    let swapIdx = start

    const swap = (arr, ind1, ind2) => {
        [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
    }

    for (let i = start+1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}