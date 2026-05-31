// Who ate the cookie? (8 kyu)
// https://www.codewars.com/kata/55a996e0e8520afab9000055

function cookie(x) {
    let name = ''
    switch (typeof x) {
        case 'string': name = 'Zach'; break
        case 'number': name = 'Monica'; break
        case 'boolean': name = 'the dog'; break
    }
    return `Who ate the last cookie? It was ${name}!`
}

// Test
console.log(cookie("Ryan")) // "Who ate the last cookie? It was Zach!"
console.log(cookie(26)) // "Who ate the last cookie? It was Monica!"
console.log(cookie(2.3)) // "Who ate the last cookie? It was Monica!"
console.log(cookie(true)) // "Who ate the last cookie? It was the dog!"