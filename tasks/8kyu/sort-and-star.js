// Sort and Star (8 kyu)
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

function twoSort(s) {
  let word = s.sort()[0]
  let res = `${word[0]}`
  for (let i = 1; i < word.length; i++) {
    res += `***${word[i]}`
  }
  return res
}

// Test
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) // 'b***i***t***c***o***i***n'
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])) // 'a***r***e'