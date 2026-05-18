// Square Every Digit (7 kyu)
// https://www.codewars.com/kata/546e2562b03326a88e000020

// число > строка > массив > массив чисел в квадрате > строка > число
function squareDigits(num) {
    return Number((num + '').split('').map(el => el * el).join(''))
}

// Test
console.log(squareDigits(3212)) // 9414
console.log(squareDigits(2112)) // 4114
console.log(squareDigits(0)) // 0