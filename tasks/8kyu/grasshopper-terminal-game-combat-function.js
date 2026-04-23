// Grasshopper - Terminal game combat function (8 kyu)
// https://www.codewars.com/kata/586c1cf4b98de0399300001d

function combat(health, damage) {
    return Math.max(health - damage, 0)
}

// Test
console.log(combat(100, 5)) // 95
console.log(combat(92, 8)) // 84
console.log(combat(20, 30)) // 0 "Health cannot go below 0"