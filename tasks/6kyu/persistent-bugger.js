// Persistent Bugger (6 kyu)
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// разбиваем число на массив
const getDigits = num => {
    const arr = []
    let temp = num
    while (temp > 0) {
        arr.unshift(temp % 10)
        temp = Math.floor(temp / 10)
    }
    return arr
}

// перемножаем цифры, пока не останется одна - считаем количество итераций
function persistence(num) {
    let counter = 0
    while (num > 9) {
        const arr = getDigits(num)
        num = 1
        for (let i = 0; i < arr.length; i++) {
            num *= arr[i]
        }
        counter++
    }
    return counter
}

// Test
console.log(persistence(39)) // 3
console.log(persistence(4)) // 0
console.log(persistence(25)) // 2
console.log(persistence(999)) // 4