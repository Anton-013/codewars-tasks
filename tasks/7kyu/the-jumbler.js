// The Jumbler (7 kyu)
// https://www.codewars.com/kata/69269262ced9e95dc63abd1e

function jumbler(indices) {
    const arr = [...indices]
    let counter = 0
    while (arr[0] !== 0) {
        arr.unshift(arr.splice(arr[0], 1)[0])
        counter++
    }
    return counter
}

// Test

console.log(jumbler([0]))                         // 0
console.log(jumbler([1, 0]))                      // 1
console.log(jumbler([2, 0, 1]))                   // 3
console.log(jumbler([3, 0, 1, 2]))                // 2
console.log(jumbler([3, 1, 4, 2, 0]))             // 6
console.log(jumbler([5, 3, 1, 0, 4, 2]))          // 9
console.log(jumbler([5, 2, 4, 0, 1, 6, 3]))       // 7
console.log(jumbler([5, 3, 6, 7, 0, 4, 1, 2]))    // 9
console.log(jumbler([2, 6, 8, 3, 5, 4, 0, 7, 1])) // 12
