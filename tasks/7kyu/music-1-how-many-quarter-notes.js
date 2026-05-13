// Music 1: How Many Quarter Notes? (7 kyu)
// https://www.codewars.com/kata/69c2f04a1294ffc95c526d9e

// разбираем сигнатуру на верхнее и нижнее числа
// проверяем валидность: нижнее число должно быть > 0 и степенью двойки, верхнее > 0
// вычисляем количество четверных нот: верхнее * (4 / нижнее), округлить до меньшего
function findQuarterNotes(timeSignature) {
    const arr = timeSignature.split('/')
    const upNumber = Number(arr[0])
    const downNumber = Number(arr[1])

    if (downNumber > 0 && (downNumber & (downNumber - 1)) !== 0) {
        return null
    }
    if (upNumber <= 0 || downNumber <= 0) {
        return null
    }

    return Math.floor(upNumber * (4 / downNumber))
}

// Test
console.log(findQuarterNotes("4/4")) // 4
console.log(findQuarterNotes("3/4")) // 3
console.log(findQuarterNotes("6/8")) // 3
console.log(findQuarterNotes("9/8")) // 4
console.log(findQuarterNotes("1/8")) // 0
console.log(findQuarterNotes("1/16")) // 0