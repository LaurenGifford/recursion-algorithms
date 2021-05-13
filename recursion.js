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