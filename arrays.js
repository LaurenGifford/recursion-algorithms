function addElements(array, index) {
    if (array.length > index) {
        return array[index] + addElements(array, index+1)
    } else {return 0}
}

function isLargest(array, compare=0) { 
    let a = array[0]
    let b = array[1]
    let highest =  a > b ? a : b
    let newCompare = highest > compare ? highest : compare
    let newArray = array.filter(el => el !== highest)

    if (array.length > 1){
    return isLargest(newArray, newCompare)
    } else {return newCompare}
}


function doesInclude(array, element) {
    if (array[0] !== element) {
        let newArray = array.slice(1)
        if (newArray.length === 0) {return false}
        else {return doesInclude(newArray, element)}
    } else {
        return true}
}

// Uses counter approach 
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let counter1 = {}
    let counter2 = {}

    for (let val of arr1) {
        counter1[val] = (counter1[val] || 0) + 1
    }
    for (let val of arr2) {
        counter2[val] = (counter2[val] || 0) + 1
    }
    for (let key in counter1) {
        if (!(key ** 2 in counter2)) {
            return false
        }
        if (counter2[key ** 2] !== counter1[key]) {
            return false
        }
    }
    return true
}

// Uses pointer approach
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum  = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {left++}
    }
}


function countUniqueValues(arr) {
    if (arr.length === 0) return 0
    let index = 0
    for (let j = 1; j < arr.length; j++) {
       if (arr[index] !== arr[j]) {
        index++
        arr[index] = arr[j]
       }
    }
    return index + 1 
}