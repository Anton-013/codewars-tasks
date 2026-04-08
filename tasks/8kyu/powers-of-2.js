// Powers of 2 (8 kyu)
// https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powersOfTwo(n) {
  const resArr = []
  for (let i = 0; i <= n; i++) {
    resArr.push(2 ** i)
  }
  return resArr
}

// Test
console.log(powersOfTwo(0)) // [1]
console.log(powersOfTwo(1)) // [1, 2]
console.log(powersOfTwo(4)) // [1, 2, 4, 8, 16]