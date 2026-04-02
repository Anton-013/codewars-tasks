// Build Tower (6 kyu)
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
    let arr = []
    for (let i = 1; i <= nFloors; i++) {
        arr.push(`${' '.repeat(nFloors - i)}${'*'.repeat((i * 2) - 1)}${' '.repeat(nFloors - i)}`)
    }
    return arr
}

// Test
console.log(towerBuilder(1)) // "*"
console.log(towerBuilder(2)) // " * ","***"
console.log(towerBuilder(3)) // "  *  "," *** ","*****"