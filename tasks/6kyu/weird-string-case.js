// WeIrD StRiNg CaSe (6 kyu)
// https://www.codewars.com/kata/52b757663a95b11b3d00062d

// делим строку на массив слов
// каждое слово в массив в процессе четный символ - верхний регистр, нечетный - нижний
// склеиваем обратно в строку
function toWeirdCase(string) {
    return string
        .split(' ')
        .map(word =>
            word
                .split('')
                .map((symbol, index) => index % 2 === 0 ? symbol.toUpperCase() : symbol.toLowerCase())
                .join('')
        )
        .join(' ')
}

// Test
console.log(toWeirdCase('This is a test')) // 'ThIs Is A TeSt'
console.log(toWeirdCase('')) // ''
console.log(toWeirdCase('unique')) // 'UnIqUe'
console.log(toWeirdCase('UPPER CASE')) // 'UpPeR CaSe'
console.log(toWeirdCase('lower case')) // 'LoWeR CaSe'