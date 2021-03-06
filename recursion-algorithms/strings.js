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
    if (string.length > 1) {
        let sub = string.substring(1)
        return reverseString(sub) + string[0]
    } else {
        return string
    }
}


function isPalindrome(string) {
    if (string.length <= 1) {
        return true
    }
    else if (string[0] !== string.charAt(string.length - 1)) {
        return false
    }
    else if (string.length >= 2) {
        let newString = string.substring(1, string.length - 1)
        return isPalindrome(newString)
    }
}

