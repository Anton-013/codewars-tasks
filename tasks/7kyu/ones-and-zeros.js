// Ones and Zeros (7 kyu)
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

// переводим двоичный массив в десятичное число
// каждому биту сопоставляем степень двойки (от старшей к младшей) и суммируем
const binaryArrayToNumber = arr => {
    const arrDegree = []
    for (let i = 0; i < arr.length; i++) {
        arrDegree.unshift(2 ** i)
    }
    return arr.reduce((sum, el, index) => sum + el * arrDegree[index], 0);
};

// Test
console.log(binaryArrayToNumber([0, 0, 0, 1])) // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])) // 2
console.log(binaryArrayToNumber([1, 1, 1, 1])) // 15
console.log(binaryArrayToNumber([0, 1, 1, 0])) // 6