// Is it even? (8 kyu)
// https://www.codewars.com/kata/555a67db74814aa4ee0001b5

function testEven(n) {
    return n % 2 === 0
}

// Test
console.log(testEven(0)) // true
console.log(testEven(0.5)) // false
console.log(testEven(1)) // false
console.log(testEven(2)) // true
console.log(testEven(-4)) // true