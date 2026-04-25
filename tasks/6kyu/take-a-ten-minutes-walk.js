// Take a Ten Minutes Walk (6 kyu)
// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
    if (walk.length !== 10) return false

    let x = 0
    let y = 0

    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'n') y++
        else if (walk[i] === 's') y--
        else if (walk[i] === 'e') x++
        else x--
    }
    return (x === 0 && y === 0)
}

// Test
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])) // 'should return true'
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])) // 'should return false'
console.log(isValidWalk(['w'])) // 'should return false'
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])) // 'should return false'