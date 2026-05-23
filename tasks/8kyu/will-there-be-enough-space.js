// Will there be enough space? (8 kyu)
// https://www.codewars.com/kata/5875b200d520904a04000003

// если не хватает мест - возвращаем сколько не хватило, иначе 0
function enough(cap, on, wait) {
    return Math.max(on + wait - cap, 0)
}

// Test
console.log(enough(10, 5, 5)) // 0
console.log(enough(100, 60, 50)) // 10
console.log(enough(20, 5, 5)) // 0