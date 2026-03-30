// Even or Odd (8 kyu)
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// Test
console.log(evenOrOdd(7)); // "Odd"
console.log(evenOrOdd(4)); // "Even"