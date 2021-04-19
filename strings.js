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

function isUnique(string) {
    if (string.length <= 1) {
        return true
    }
    else if (string.length >= 2) {
        for (let i=0; i < string.length; i++){
            
            for (let j=i+1; j < string.length; j++) {
                if (string[i] === string[j]){
                    return false
                }
            }
        }
    }
    return true
}

function checkPermutation(s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }
    else if (sort(s1) === sort(s2)){
        return true
    }

    function sort(string) {
        return string.split('').sort().join()
    }
}


function urlify(string) {
    let noSpaces = string.split(" ")
    return noSpaces.join("%20")
}