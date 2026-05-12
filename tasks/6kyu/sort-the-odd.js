// Sort the odd (6 kyu)
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// фильтруем оставляем нечетные, сортируем
// в массиве меняем все нечетные числа на уже отсортированые
function sortArray(array) {
    let resultArr = [...array]
    const sortedOdds = array.filter(el => el % 2 !== 0).sort((a, b) => a - b)
    let index = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            resultArr[i] = sortedOdds[index]
            index++
        }
    }
    return resultArr
}

// Test
console.log(sortArray([5, 3, 2, 8, 1, 4])) //  [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])) //  [1, 3, 5, 8, 0]
console.log(sortArray([])) // []