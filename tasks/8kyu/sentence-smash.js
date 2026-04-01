// Sentence Smash (8 kyu)
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

function smash(words) {
    return words.join(' ')
}

// Test
console.log(smash([])) // ""
console.log(smash(["hello"])) // "hello"
console.log(smash(["hello", "world"])) // "hello world"
console.log(smash(["hello", "amazing", "world"])) // "hello amazing world"
console.log(smash(["this", "is", "a", "really", "long", "sentence"])) // "this is a really long sentence"