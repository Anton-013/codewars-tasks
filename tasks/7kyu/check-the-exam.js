// Check the exam (7 kyu)
// https://www.codewars.com/kata/5a3dd29055519e23ec000074

// правильный ответ +4, неправильный -1, нет ответа 0
// если итоговый счет отрицательный - возвращаем 0
function checkExam(array1, array2) {
    let result = 0
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === '') continue
        array1[i] === array2[i] ? result += 4 : result -= 1
    }
    return (result > 0) ? result : 0
}

// Test
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])) // 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) // 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])) // 0