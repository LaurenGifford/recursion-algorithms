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