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

doesInclude([1,2,3,4,5],1)