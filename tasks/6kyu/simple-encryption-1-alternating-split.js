// Simple Encryption #1 - Alternating Split (6 kyu)
// https://www.codewars.com/kata/57814d79a56c88e3e0000786

function encrypt(text, n) {
    if (!text || n < 1) return text
    let arr = text.split('')
    for (let i = 0; i < n; i++) {
        const arrEven = arr.filter((_, index) => index % 2 === 0)
        const arrOdd = arr.filter((_, index) => index % 2 !== 0)
        arr = arrOdd.concat(arrEven)
    }
    return arr.join('')
}

function decrypt(encryptedText, n) {
    if (n < 1 || encryptedText === null) return encryptedText
    let arr = encryptedText.split('')
    const middleIndex = Math.floor(arr.length / 2)
    for (let i = 0; i < n; i++) {
        const part1 = arr.slice(0, middleIndex)
        const part2 = arr.slice(middleIndex)
        arr = []
        for (let y = 0; y <= part1.length; y++) {
            arr.push(part2[y])
            arr.push(part1[y])
        }
    }
    return arr.join('')
}

// Test
console.log('encrypt')
console.log(encrypt("This is a test!", 0)) // "This is a test!"
console.log(encrypt("This is a test!", 1)) // "hsi  etTi sats!"
console.log(encrypt("This is a test!", 2)) // "s eT ashi tist!"
console.log(encrypt("This is a test!", 3)) // " Tah itse sits!"
console.log(encrypt("This is a test!", 4)) // "This is a test!"
console.log(encrypt("This is a test!", -1)) // "This is a test!"
console.log(encrypt("This kata is very interesting!", 1)) // "hskt svr neetn!Ti aai eyitrsig"

console.log('decrypt')
console.log(decrypt("This is a test!", 0)) // "This is a test!"
console.log(decrypt("hsi  etTi sats!", 1)) // "This is a test!"
console.log(decrypt("s eT ashi tist!", 2)) // "This is a test!"
console.log(decrypt(" Tah itse sits!", 3)) // "This is a test!"
console.log(decrypt("This is a test!", 4)) // "This is a test!"
console.log(decrypt("This is a test!", -1)) // "This is a test!"
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)) // "This kata is very interesting!"

console.log('null')
console.log(encrypt("", 0)) // ""
console.log(decrypt("", 0)) // ""
console.log(encrypt(null, 0)) // null
console.log(decrypt(null, 0)) // null