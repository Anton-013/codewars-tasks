// Convert Decimal Degrees to Degrees, Minutes, Seconds (7 kyu)
// https://www.codewars.com/kata/590ac6b9be4dff49b0000042

// переводим градусы в секунды и округляем (боремся с плавающей точкой)
// выделяем часы, минуты, секунды через деление и остаток
// убираем нулевые значения с конца
function convert(degrees) {
    const result = []

    let totalSeconds = Math.round(degrees * 3600)

    const hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600

    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    result.push(hours)
    if (minutes > 0 || seconds > 0) result.push(minutes)
    if (seconds > 0) result.push(seconds)

    return result
}

// Test
console.log(convert(0)) // [0]
console.log(convert(40.567)) // [40, 34, 1]
console.log(convert(80.5)) // [80, 30]
console.log(convert(20.999)) // [20, 59, 56]
console.log(convert(50)) // [50]
console.log(convert(0.0001388888888888889)) // [0, 0, 1]
console.log(convert(0.0001388888888888888)) // [0]
console.log(convert(91.33333333333333)) // [91, 20]
console.log(convert(69.36666666666666)) // [69, 22]
console.log(convert(262.21666666666664)) // [262, 13]
console.log(convert(0.99999999)) // [1]