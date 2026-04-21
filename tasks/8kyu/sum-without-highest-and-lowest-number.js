// Sum without highest and lowest number (8 kyu)
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
    if (array === null || array === undefined || array.length === 0) {
        return 0
    }

    return array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((a, b) => a + b, 0)
}

// Test
console.log(sumArray(null)) // 0
console.log(sumArray([])) // 0
console.log(sumArray([3])) // 0
console.log(sumArray([3, 5])) // 0
console.log(sumArray([6, 2, 1, 8, 10])) // 16
console.log(sumArray([0, 1, 6, 10, 10])) // 17
console.log(sumArray([-6, -20, -1, -10, -12])) // -28
console.log(sumArray([-6, 20, -1, 10, -12])) // 3