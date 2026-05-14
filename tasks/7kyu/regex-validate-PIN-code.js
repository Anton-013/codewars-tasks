// Regex validate PIN code (7 kyu)
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

// проверяем что длина 4 или 6 и строка состоит только из цифр
function validatePIN(pin) {
    return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin)
}

// Test
console.log(validatePIN("1")) // false
console.log(validatePIN("12")) // false
console.log(validatePIN("123")) // false
console.log(validatePIN("12345")) // false
console.log(validatePIN("1234567")) // false
console.log(validatePIN("-1234")) // false
console.log(validatePIN("1.234")) // false
console.log(validatePIN("-1.234")) // false
console.log(validatePIN("00000000")) // false
console.log(validatePIN("1234")) // true
console.log(validatePIN("0000")) // true
console.log(validatePIN("1111")) // true