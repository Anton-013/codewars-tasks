// Are You Playing Banjo? (8 kyu)
// https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
    return (name[0].toUpperCase() === 'R') ? `${name} plays banjo` : `${name} does not play banjo`
}

// Test
console.log(areYouPlayingBanjo("Adam")) // "Adam does not play banjo"
console.log(areYouPlayingBanjo("Paul")) // "Paul does not play banjo"
console.log(areYouPlayingBanjo("Ringo")) // "Ringo plays banjo"
console.log(areYouPlayingBanjo("bravo")) // "bravo does not play banjo"
console.log(areYouPlayingBanjo("rolf")) // "rolf plays banjo"