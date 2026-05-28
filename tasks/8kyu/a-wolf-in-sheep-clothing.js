// A wolf in sheep's clothing (8 kyu)
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

// находим позицию волка, если он последний — угроза, иначе считаем номер овцы позади него
function warnTheSheep(queue) {
    const wolfIndex = queue.indexOf('wolf')
    const lastIndex = queue.length - 1
    return (wolfIndex === lastIndex)
        ? "Pls go away and stop eating my sheep"
        : `Oi! Sheep number ${lastIndex - wolfIndex}! You are about to be eaten by a wolf!`
}

// Test
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])) // "Oi! Sheep number 2! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])) // "Oi! Sheep number 5! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])) // "Oi! Sheep number 6! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["sheep", "wolf", "sheep"])) // "Oi! Sheep number 1! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["wolf"])) // "Pls go away and stop eating my sheep"
console.log(warnTheSheep(["sheep", "sheep", "wolf"])) // "Pls go away and stop eating my sheep"