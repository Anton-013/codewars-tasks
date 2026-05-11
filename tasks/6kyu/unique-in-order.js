// Unique In Order (6 kyu)
// https://www.codewars.com/kata/54e6533c92449cc251001667

// создаем массив из строки или копируем если на вход пришел массив
var uniqueInOrder = function (iterable) {
    let arr = []
    if (typeof iterable === 'string') {
        arr = iterable.split('')
    } else {
        arr = [...iterable]
    }
    // у filter есть необязательные параметры index и array - сравниваем текущий элемент с предыдущим
    return arr.filter((el, index, array) => el !== array[index - 1])
}

// Test
console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A','B','C','D','A','B']
console.log(uniqueInOrder('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])) // [1, 2, 3]