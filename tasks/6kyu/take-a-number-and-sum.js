// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!! (6 kyu)
// https://www.codewars.com/kata/5626b561280a42ecc50000d1

// перебираем числа в диапазоне, разбиваем на цифры,
// суммируем цифры в степенях от 1, сравниваем с исходным числом
function sumDigPow(a, b) {
    const result = []
    for (let i = a; i <= b; i++) {
        const sum = [...i.toString()].map(Number).reduce((acc, curr, index) => acc + curr ** (index + 1), 0)
        if (i === sum) {
            result.push(i)
        }
    }
    return result
}


// Test
console.log(sumDigPow(1, 10)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 100)) // [89]
console.log(sumDigPow(90, 100)) // []
console.log(sumDigPow(90, 150)) // [135]
console.log(sumDigPow(50, 150)) // [89, 135]
console.log(sumDigPow(10, 150)) // [89, 135]