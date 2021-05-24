function selection(arr) {
    const swap = (arr, ind1, ind2) => {
        [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
    }
    
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]) minIndex = j
        }
        if (i !== minIndex) swap(arr, i, minIndex)
    }
    return arr
}