// Enumerable Magic #25 - Take the First N Elements (8 kyu)
// https://www.codewars.com/kata/545afd0761aa4c3055001386

function take(arr, n) {
    return arr.slice(0, n)
}

// Test
console.log(take([0, 1, 2, 3, 5, 8, 13], 3)) // [0, 1, 2]