// Make a function that does arithmetic! (7 kyu)
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a

// в зависимости от оператора выполняем нужное арифметическое действие
function arithmetic(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b
        case 'subtract':
            return a - b
        case 'multiply':
            return a * b
        case 'divide':
            return a / b
    }
}

// Test
console.log(arithmetic(1, 2, "add")) // 3
console.log(arithmetic(8, 2, "subtract")) // 6
console.log(arithmetic(5, 2, "multiply")) // 10
console.log(arithmetic(8, 2, "divide")) // 4