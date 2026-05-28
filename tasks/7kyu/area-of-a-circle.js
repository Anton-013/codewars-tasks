// Area of a Circle (7 kyu)
// https://www.codewars.com/kata/537baa6f8f4b300b5900106c

// если радиус <= 0 - выбрасываем ошибку, иначе площадь круга с точностью до 3 знаков
function circleArea(radius) {
    if (radius <= 0) throw new Error()

    return Number((Math.PI * radius ** 2).toFixed(3))
}

// Test
console.log(circleArea(1)) // 3.141 0.01
console.log(circleArea(43.2673)) //  5881.248, 0.01
console.log(circleArea(68)) // 14526.724, 0.01
console.log(circleArea(0.45)) // 0.6361725, 0.01
console.log(circleArea(0)) // Error
console.log(circleArea(-1)) // Error