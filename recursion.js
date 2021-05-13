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