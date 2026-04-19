// Grasshopper - Terminal game move function (8 kyu)
// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2

function move(position, roll) {
    return position + roll * 2
}


// Test
console.log(move(0, 4)) // 8
console.log(move(3, 6)) // 15
console.log(move(2, 5)) // 12