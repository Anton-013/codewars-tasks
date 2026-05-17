// Is he gonna survive? (8 kyu)
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

function hero(bullets, dragons) {
    return bullets >= dragons * 2
}

// Test
console.log(hero(10, 5)) // true
console.log(hero(7, 4)) // false
console.log(hero(4, 5)) // false
console.log(hero(100, 40)) // true
console.log(hero(1500, 751)) // false
console.log(hero(0, 1)) // false