// Find the stray number (7 kyu)
// https://www.codewars.com/kata/57f609022f4d534f05000024

// фильтруем массив по первому элементу
// если длина полученного массива === 1 то искомый элемент в этом массиве
// иначе он является первым элементом исходного массива
function stray(numbers) {
    const filterArr = numbers.filter(el => el !== numbers[0])
    return filterArr.length === 1 ? filterArr[0] : numbers[0]
}

// Test
console.log(stray([1, 1, 2])) // 2
console.log(stray([1, 2, 1])) // 2
console.log(stray([2, 1, 1])) // 2