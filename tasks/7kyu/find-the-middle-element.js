// Find the middle element (7 kyu)
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

// создаем копию, которую сразу сортируем
// ищем индекс в оригинальном массиве совпадающий со средним элементом отсортированного

function gimme(triplet) {
    const sortedArr = [...triplet].sort((a, b) => a - b)
    return triplet.indexOf(sortedArr[1])
}

// Test
console.log(gimme([2, 3, 1])) // 0
console.log(gimme([5, 10, 14])) // 1
console.log(gimme([2.1, 3.2, 1.4])) // 0
console.log(gimme([5.9, 10.4, 14.2])) // 1
console.log(gimme([-2, -3, -1])) // 0
console.log(gimme([-5, -10, -14])) // 1
console.log(gimme([-2, -3.2, 1])) // 0
console.log(gimme([-5.2, -10.6, 14])) // 0