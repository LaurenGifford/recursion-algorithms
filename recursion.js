// Basic examples
function countDown(num) {
    if (num <= 0) {
        return
    }
    console.log(num)
    num--
    countDown(num)
}

function sumRange(num) {
    if (num === 1) return 1;
    return num + returnRange(num-1)
}

function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

// helper recursion
function collectOdds(nums) {
    results = []

    function helper(helperInput) {
        if (helperInput.length === 0) return
        if (helperInput[0] % 2 !== 0) {
            results.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return results
}

// pure recursion
// use methods like slice, spread operator, concat to copy arrays instead of mutating
function collectOddValues(arr) {
    let newArr = []

    if (arr.length === 0) {
        return newArr
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr
}

function power(b, e) {
    let newE = e - 1
    if (e === 0) return 1
    return b*power(b, newE)
}

function productOfArray(arr) {
    if (arr.length === 1) return arr
    return arr[0] * productOfArray(arr.slice(1))
}

function recursiveRange(num){
    if (num === 0) return num
    return num + recursiveRange(num - 1)
}

function fib(n){
    if (n <= 2) return 1
    return fib(n-1) + fib(n-2)
}

function reverse(str){
    let newStr = str[0]
    if (str.length === 1) return str

    newStr = reverse(str.substring(1)) + newStr
    return newStr
}


function isPalindrome(str) {
    if (str.length <= 1) return true
    if (str[0] !== str[str.length -1]) return false
    return isPalindrome(str.substring(1, str.length -1))
}

function someRecursive(arr, callback){
    if (arr.length === 0) return false
    if (callback(arr[0])) return true
    return someRecursive(arr.slice(1), callback)
}

function flatten(arr) {
    let newArr = []

    for (let i = 0; i< arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]))
        }
        else newArr.push(arr[i])
    }
    return newArr
}

// iterative
function capitalizeFirst(arr) {
    let capitalized = [] 

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        let first = word[0].toUpperCase()
        let rest = word.slice(1)
        capitalized.push(first.concat(rest))
    }
    return capitalized
}
// recursive
function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
  }

function nestedEvenSum(obj) {
    let values = Object.values(obj)
    let sum = 0

    values.forEach(val => {
        if (typeof val === 'object') {
            sum += nestedEvenSum(val)
        }
        else if ((typeof val === 'number') && (val % 2 === 0)) {
            sum += val
        }
    })
    return sum
}

function capitalizeWords(arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
      }
      let res = capitalizeWords(arr.slice(0, -1));
      res.push(arr.slice(arr.length-1)[0].toUpperCase());
      return res;
}

function stringifyNumbers(obj) {
    let newObj = {}

    for (let val in obj) {
        if (typeof obj[val] === 'object' && !Array.isArray(obj[val])) {
            newObj[val] = stringifyNumbers(obj[val])
        }
        else if (typeof obj[val] === 'number') {
            newObj[val] = obj[val].toString()
        } else {
            newObj[val] = obj[val]
        }
    }
    return newObj
}

function collectStrings(obj) {
    let strings = []

    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            strings.push(obj[key])
        } 
        else if (typeof obj[key] === 'object') {
            strings = strings.concat(collectStrings(obj[key]))
        }
    }
    return strings
}