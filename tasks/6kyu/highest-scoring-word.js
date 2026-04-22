// Highest Scoring Word (6 kyu)
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

const score = (char) => char.charCodeAt(0) - 96

function high(x) {
    const arrWeight = x.split(' ')
    const arrSum = []
    for (let i = 0; i < arrWeight.length; i++) {
        arrSum[i] = 0
        for (let y = 0; y < arrWeight[i].length; y++) {
            arrSum[i] += score(arrWeight[i][y])
        }
    }
    const maxScore = Math.max(...arrSum)
    const maxIndex = arrSum.indexOf(maxScore)
    return arrWeight[maxIndex]
}

// Test
console.log(high('man i need a taxi up to ubud')) // 'taxi'
console.log(high('what time are we climbing up the volcano')) // 'volcano'
console.log(high('take me to semynak')) // 'semynak'
console.log(high('aa b')) // 'aa'
console.log(high('b aa')) // 'b'
console.log(high('bb d')) // 'bb'
console.log(high('d bb')) // 'd'
console.log(high('aaa b')) // 'aaa'