// Find the position! (8 kyu)
// https://www.codewars.com/kata/5808e2006b65bff35500008f

function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt() - 96}`
}

// Test
console.log(position("a")) // "Position of alphabet: 1"
console.log(position("z")) // "Position of alphabet: 26"
console.log(position("e")) // "Position of alphabet: 5"