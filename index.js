function printString(string) {
    console.log(string[0])

    if (string.length > 1){
        let stringLeft = string.substring(1, string.length)
        printString(stringLeft)
    } else {
        return true
    }
}



function reverseString(string) {
    let start = string[0]
    let end = string.length
    let reversed = string.substring(start)

    if (string.length > 1) {
        let sub = string.substring(1, string.length)
        reverseString(sub)
    } else {
        return true
    }
}