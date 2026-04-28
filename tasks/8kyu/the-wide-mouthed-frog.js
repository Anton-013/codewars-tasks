// The Wide-Mouthed frog! (8 kyu)
// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89

function mouthSize(animal) {
    if (animal.toLowerCase() === 'alligator') {
        return 'small'
    } else {
        return 'wide'
    }
}

// Test
console.log(mouthSize("toucan")) // "wide"
console.log(mouthSize("ant bear")) // "wide"
console.log(mouthSize("alligator")) // "small"