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

function palinPerm(string) {
    let charCount = {}
    let oddCount = 0

    for (let i=0; i<string.length; i++){
        if (charCount[string[i]] >= 1) {
        charCount[string[i]] = charCount[string[i]] + 1}
        else {charCount[string[i]] = 1}

        if (charCount[string[i]] % 2 == 1) {
            oddCount++
        }
        else if (charCount[string[i]] % 2 == 0) {
         oddCount--
     }
    }
    return oddCount <= 1
}

function oneAway(s1, s2) {
    
    if (s1 === s2) {
        return true
    }
    else if (s1.length + 1 === s2.length) {
        return oneInsert(s1, s2)
    }
    else if (s1.length - 1 === s2.length) {
        return oneInsert(s2, s1)
    }
    else if (s1.length === s2.length) {
        return oneReplace(s1, s2)
    }
    
    function oneReplace(s1, s2){
        let diff = false
        for (let i=0; i< s1.length; i++) {
            if (s1[i] !== s2[i]) {
                if (diff){
                    return false
                }
                diff = true
            }
        }
        return diff
    }

    function oneInsert(s1, s2) {
        let index1 = 0
        let index2 = 0
        while (index1 < s1.length && index2 < s2.length) {
            if (s1[index1] !== s2[index2]){
                if (index1 !== index2) {
                    return false
                }
            index2++
            } else {
                index1++
                index2++
            }
        }
        return true
    }
    return false
}



oneAway('let', 'lets')