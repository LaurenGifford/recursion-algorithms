function addElements(array, index) {
    if (array.length > index) {
        return array[index] + addElements(array, index+1)
    } else {return 0}
}
