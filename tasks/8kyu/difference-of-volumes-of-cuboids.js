// Difference of Volumes of Cuboids (8 kyu)
// https://www.codewars.com/kata/58cb43f4256836ed95000f97

function findDifference(a, b) {
    return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2])
}

// Test
console.log(findDifference([3, 2, 5], [1, 4, 4])) // 14
console.log(findDifference([9, 7, 2], [5, 2, 2])) // 106
console.log(findDifference([11, 2, 5], [1, 10, 8])) // 30
console.log(findDifference([4, 4, 7], [3, 9, 3])) // 31
console.log(findDifference([15, 20, 25], [10, 30, 25])) // 0