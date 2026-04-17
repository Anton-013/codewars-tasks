// Name Shuffler (8 kyu)
// https://www.codewars.com/kata/559ac78160f0be07c200005a

function nameShuffler(str) {
    return str.split(' ').reverse().join(' ')
}


// Test
console.log(nameShuffler('john McClane')) // 'McClane john'
console.log(nameShuffler('Mary jeggins')) // 'jeggins Mary'
console.log(nameShuffler('tom jerry')) // 'jerry tom'