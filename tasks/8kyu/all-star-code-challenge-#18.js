// All Star Code Challenge #18 (8 kyu)
// https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter) {
  return str.split(letter).length - 1
}

// Test
console.log(strCount('Hello', 'o')) // 1
console.log(strCount('Hello', 'l')) // 2
console.log(strCount('', 'z')) // 0